"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Basicinfo from "./Basicinfo";
import Contactinfo from "./Contactinfo";
import Dependent1 from "./Dependent1";
import Emergencycontact from "./Emergencycontact";
import Attachments from "./Attachments";
import { useFormContext } from "@/context/FormContext";
import { makeStyles } from "@mui/styles";
import { StepConnector } from "@mui/material";
import { validateStep } from "@/utils/validateSteps";

const steps = [
  "Basic Info",
  "Contact Info",
  "Dependent Info",
  "Emergency Contact",
  "Attachment",
  "Confirmation",
];

const useStyles = makeStyles({
  connector: {
    visibility: "hidden", 
  },
  label: {
    marginTop: 10,
    wordWrap: "break-word",
  },
});

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [isLoading, setIsLoading] = React.useState(false);
  const [success, setSuccess] = React.useState("");
  const { formData, updateFormData, errors, setErrors } = useFormContext();

  const classes = useStyles();

  const isStepOptional = (step) => {
    return step === 2 || step === 3;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (validateStep(activeStep, formData, setErrors)) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



  const renderStepContent = (step) => {
    const commonProps = {
      updateFormData: updateFormData,
      formData: formData,
    };

    switch (step) {
      case 0:
        return <Basicinfo {...commonProps} />;
      case 1:
        return <Contactinfo {...commonProps} />;
      case 2:
        return <Dependent1 {...commonProps} />;
      case 3:
        return <Emergencycontact {...commonProps} />;
      case 4:
        return <Attachments {...commonProps} />;
      default:
        return (
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        );
    }
  };

  const handleRegistration = async () => {
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();

      for (let field in formData) {
        if (formData.hasOwnProperty(field)) {
          const value = formData[field];

          if (value instanceof File) {
            formDataToSend.append(field, value, value.name);
          } else {
            formDataToSend.append(field, value);
          }
        }
      }

      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: formDataToSend,
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log("Form data is successfully registered", formData);
        setSuccess("Form data is successfully registered");
      } else {
        console.error(responseData.error);
      }
    } catch (error) {
      console.error("There was an error registering the user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box className="p-4 shadow-lg rounded-md w-full">
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<StepConnector classes={{ line: classes.connector }} />}
        style={{ flexWrap: "wrap" }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} style={{ maxWidth: "100%" }}>
              <StepLabel style={{ marginTop: 10, wordWrap: "break-word" }}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box
        sx={{
          mt: 4,
          mb: 4,
          backgroundColor: "#ffffff",
          p: 3,
          borderRadius: 2,
        }}
      >
        {renderStepContent(activeStep)}
      </Box>
      {success && (
        <Box mb={5}>
          <Alert severity="success">{success}</Alert>
        </Box>
      )}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        {/* Hide the Back button when form is submitted */}
        {activeStep === steps.length - 1 && isLoading ? null : (
          <Button
            variant="contained"
            color="secondary"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              color: "black",
              "&:hover": {
                color: "white",
              },
            }}
          >
            Back
          </Button>
        )}
        <Box sx={{ flex: "1 1 auto" }} />
        {activeStep === steps.length - 1 ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleRegistration}
            disabled={isLoading}
            sx={{
              color: "black",
              "&:hover": {
                color: "white",
              },
            }}
          >
            {isLoading ? "Loading..." : "Submit"}{" "}
            {/* Show loading text when loading */}
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            sx={{
              color: "black",
              "&:hover": {
                color: "white",
              },
            }}
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
}

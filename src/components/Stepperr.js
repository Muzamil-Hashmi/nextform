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

const steps = [
  "Basic Info",
  "Contact Info",
  "Dependent Info",
  "Emergency Contact",
  "Attachment",
  "Confirmation",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { formData, updateFormData } = useFormContext();

  const isStepOptional = (step) => {
    return step === 2 || step === 3;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
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
      } else {
        console.error(responseData.error);
      }
    } catch (error) {
      console.error("There was an error registering the user:", error);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{ mt: 2, mb: 2 }}>{renderStepContent(activeStep)}</Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        {isStepOptional(activeStep) && (
          <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
            Skip
          </Button>
        )}
        {activeStep === steps.length - 1 ? (
          <Button onClick={handleRegistration}>Submit</Button>
        ) : (
          <Button onClick={handleNext}>Next</Button>
        )}
      </Box>
    </Box>
  );
}

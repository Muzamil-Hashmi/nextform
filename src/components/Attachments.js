import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useFormContext } from "@/context/FormContext";
import { Card, Grid, Button, Typography } from "@mui/material";

const FileUploadButton = ({ label, onFileChange, keyName }) => {
  const [fileName, setFileName] = React.useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
    onFileChange(file, keyName);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <label>
        <Typography variant="subtitle2" gutterBottom>
          {label}
        </Typography>
        <Button
          variant="outlined"
          component="label"
          fullWidth
          startIcon={<CloudUploadIcon />}
        >
          Upload
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        <Typography variant="body2" color="textSecondary">
          {fileName || "No file chosen"}
        </Typography>
      </label>
    </Grid>
  );
};

export default function InputFileUpload() {
  const { formData, updateFormData } = useFormContext();

  const handleFileChange = (file, key) => {
    updateFormData({ [key]: file });
  };

  return (
    <div className="container mx-auto p-4">
      <Card elevation={3}>
        <div className="p-4">
          <Typography variant="h5" gutterBottom>
            File Upload
          </Typography>
          <Grid container spacing={3}>
            <FileUploadButton
              label="Passport Copy Head"
              onFileChange={handleFileChange}
              keyName="passportCopyHead"
            />
            <FileUploadButton
              label="Visa"
              onFileChange={handleFileChange}
              keyName="visa"
            />
            <FileUploadButton
              label="Passport Copy Dep1"
              onFileChange={handleFileChange}
              keyName="passportCopyDep1"
            />
            <FileUploadButton
              label="Visa Dep1"
              onFileChange={handleFileChange}
              keyName="visaDep1"
            />
            <FileUploadButton
              label="Passport Copy Dep2"
              onFileChange={handleFileChange}
              keyName="passportCopyDep2"
            />
            <FileUploadButton
              label="Visa Dep2"
              onFileChange={handleFileChange}
              keyName="visaDep2"
            />
            <FileUploadButton
              label="Proof of Origin Head in case of Other Nationality"
              onFileChange={handleFileChange}
              keyName="proofOfOrigin"
            />
          </Grid>
        </div>
      </Card>
    </div>
  );
}

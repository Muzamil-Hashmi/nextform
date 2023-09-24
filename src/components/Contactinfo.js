"use client";
import React from "react";
import { useFormContext } from "@/context/FormContext";
import {
  Card,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

const Contactinfo = () => {
  const { formData, updateFormData, errors } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Card className="p-4 shadow-lg rounded-md w-full">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="mobileNumber">Mobile Number</InputLabel>
          <TextField
            id="mobileNumber"
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            className="mb-3"
            error={!!errors.mobileNumber}
            helperText={errors.mobileNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="whatsappNumber">Whatsapp Number</InputLabel>
          <TextField
            id="whatsappNumber"
            type="number"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            className="mb-3"
            error={!!errors.whatsappNumber}
            helperText={errors.whatsappNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <TextField
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            className="mb-3"
            error={!!errors.address}
            helperText={errors.address}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="province">Province</InputLabel>
          <TextField
            id="province"
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            className="mb-3"
            error={!!errors.province}
            helperText={errors.province}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="district">District</InputLabel>
          <TextField
            id="district"
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            className="mb-3"
            error={!!errors.district}
            helperText={errors.district}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel htmlFor="cell">Cell</InputLabel>
          <TextField
            id="cell"
            type="number"
            name="cell"
            value={formData.cell}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            className="mb-3"
            error={!!errors.cell}
            helperText={errors.cell}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Contactinfo;

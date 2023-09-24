'use client'
import { useFormContext } from "@/context/FormContext";
import {
  Card,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import React from "react";

const Emergencycontact = () => {
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
          <InputLabel id="country-label">Country</InputLabel>
          <TextField
            onChange={handleChange}
            value={formData.emergencycountry}
            type="text"
            name="emergencycountry"
            id="country"
            placeholder="Country"
            fullWidth
            variant="outlined"
            className="mb-3 text-base font-medium text-[#6B7280] border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md"
            error={!!errors.emergencycountry}
            helperText={errors.emergencycountry}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="city-label">City</InputLabel>
          <TextField
            onChange={handleChange}
            value={formData.city}
            type="text"
            name="city"
            id="city"
            placeholder="City"
            fullWidth
            variant="outlined"
            className="mb-3 text-base font-medium text-[#6B7280] border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md"
            error={!!errors.city}
            helperText={errors.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="contactPersonName-label">
            Name Of Contact Person
          </InputLabel>
          <TextField
            onChange={handleChange}
            value={formData.contactPersonName}
            type="text"
            name="contactPersonName"
            id="contactPersonName"
            placeholder="Enter Full Name"
            fullWidth
            variant="outlined"
            className="mb-3 text-base font-medium text-[#6B7280] border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md"
            error={!!errors.contactPersonName}
            helperText={errors.contactPersonName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="emergencycontact-label">
            Relation with Contact Person
          </InputLabel>
          <TextField
            onChange={handleChange}
            value={formData.emergencycontact}
            type="text"
            name="emergencycontact"
            id="emergencycontact"
            placeholder="Emergency Contact"
            fullWidth
            variant="outlined"
            className="mb-3 text-base font-medium text-[#6B7280] border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md"
            error={!!errors.emergencycontact}
            helperText={errors.emergencycontact}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="contactPersonNumber-label">
            Mobile Number for contact Person
          </InputLabel>
          <TextField
            onChange={handleChange}
            value={formData.contactPersonNumber}
            type="number"
            name="contactPersonNumber"
            id="contactPersonNumber"
            placeholder="Mobile Number"
            fullWidth
            variant="outlined"
            className="mb-3 text-base font-medium text-[#6B7280] border-[#e0e0e0] focus:border-[#6A64F1] focus:shadow-md"
            error={!!errors.contactPersonNumber}
            helperText={errors.contactPersonNumber}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Emergencycontact;

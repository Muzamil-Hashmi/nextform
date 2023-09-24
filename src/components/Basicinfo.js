"use client";
import React from "react";
import { useFormContext } from "@/context/FormContext";
import {
  Grid,
  Card,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
} from "@mui/material";

const Basicinfo = () => {
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
          <InputLabel className="text-gray-600">Enter Your Email</InputLabel>
          <TextField
            fullWidth
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            required
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel className="text-gray-600">
            Enter Your Full Name
          </InputLabel>
          <TextField
            fullWidth
            type="text"
            name="fullname"
            placeholder="Enter Your Full Name"
            value={formData.fullname}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            error={!!errors.fullname}
            helperText={errors.fullname}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel className="text-gray-600">Enter Birth Date</InputLabel>
          <TextField
            id="birthDate"
            placeholder="Enter Birth Date"
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            className="mb-3"
            InputLabelProps={{
              shrink: true,
            }}
            error={!!errors.birthDate}
            helperText={errors.birthDate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel className="text-gray-600">Gender</InputLabel>
          <Select
            fullWidth
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            error={!!errors.gender}
            helperText={errors.gender}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel className="text-gray-600">Marital Status</InputLabel>
          <Select
            fullWidth
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            error={!!errors.maritalStatus}
            helperText={errors.maritalStatus}
          >
            <MenuItem value="Single">Single</MenuItem>
            <MenuItem value="Married">Married</MenuItem>
            <MenuItem value="Widow">Widow</MenuItem>
            <MenuItem value="Widower">Widower</MenuItem>
            <MenuItem value="Divorced">Divorced</MenuItem>
          </Select>
          {errors.maritalStatus && (
            <FormHelperText error>{errors.maritalStatus}</FormHelperText>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel className="text-gray-600">Enter Nationality</InputLabel>
          <TextField
            fullWidth
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            error={!!errors.nationality}
            helperText={errors.nationality}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel className="text-gray-600">
            Enter Passport Number
          </InputLabel>
          <TextField
            fullWidth
            type="number"
            name="passportNumber"
            placeholder="Enter Passport Number"
            value={formData.passportNumber}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            error={!!errors.passportNumber}
            helperText={errors.passportNumber}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel className="text-gray-600">Passport Expiry</InputLabel>
          <TextField
            fullWidth
            type="number"
            name="passportExpiry"
            placeholder="Passport Expiry"
            value={formData.passportExpiry}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            error={!!errors.passportExpiry}
            helperText={errors.passportExpiry}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel className="text-gray-600">Origin ID</InputLabel>
          <TextField
            fullWidth
            type="number"
            name="originID"
            placeholder="Origin ID"
            value={formData.originID}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            error={!!errors.originID}
            helperText={errors.originID}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel className="text-gray-600">
            Enter Your Occupation
          </InputLabel>
          <TextField
            fullWidth
            type="number"
            name="occupation"
            placeholder="Enter Occupation"
            value={formData.occupation}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            error={!!errors.occupation}
            helperText={errors.occupation}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel className="text-gray-600">
            Enter Occupation Details
          </InputLabel>
          <TextField
            fullWidth
            type="number"
            name="occupationDetails"
            placeholder="Enter Occupation Details"
            value={formData.occupationDetails}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            error={!!errors.occupationDetails}
            helperText={errors.occupationDetails}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel className="text-gray-600">Enter Visa Status</InputLabel>
          <TextField
            fullWidth
            type="number"
            name="visaStatus"
            placeholder="Enter Visa Status"
            value={formData.visaStatus}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            error={!!errors.visaStatus}
            helperText={errors.visaStatus}
          />
        </Grid>

        <Grid item xs={12}>
          <InputLabel className="text-gray-600">Proof Of Origin</InputLabel>
          <Select
            fullWidth
            name="proofOfOrigin"
            value={formData.proofOfOrigin}
            onChange={handleChange}
            variant="outlined"
            className="mt-1"
            error={!!errors.proofOfOrigin}
          >
            <MenuItem value="NIC">NIC</MenuItem>
            <MenuItem value="POc">POc</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          {errors.proofOfOrigin && (
            <FormHelperText error>{errors.proofOfOrigin}</FormHelperText>
          )}
        </Grid>
      </Grid>
    </Card>
  );
};

export default Basicinfo;

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

const Dependent1 = () => {
  const { formData, updateFormData, errors } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <Card className="p-4 shadow-lg rounded-md w-full">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel id="country-label">Relation</InputLabel>
            <Select
              fullWidth
              labelId="country-label"
              id="relation"
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              error={!!errors.relation}
              helperText={errors.relation}
            >
              <MenuItem value="Wife">Wife</MenuItem>
              <MenuItem value="Husband">Husband</MenuItem>
              <MenuItem value="Son">Son</MenuItem>
              <MenuItem value="Daughter">Daughter</MenuItem>
              <MenuItem value="Mother">Mother</MenuItem>
              <MenuItem value="Father">Father</MenuItem>
              <MenuItem value="MIL">Mother-In-Law (MIL)</MenuItem>
              <MenuItem value="FIL">Father-In-Law (FIL)</MenuItem>
              <MenuItem value="Brother">Brother</MenuItem>
              <MenuItem value="Sister">Sister</MenuItem>
              <MenuItem value="BIL">Brother-In-Law (BIL)</MenuItem>
              <MenuItem value="SIL">Sister-In-Law (SIL)</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel id="country-label">Last Name</InputLabel>

            <TextField
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              fullWidth
              variant="outlined"
              className="mb-3"
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="country">Nationality</InputLabel>
            <Select
              fullWidth
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              error={!!errors.country}
              helperText={errors.country}
            >
              <MenuItem value="Pakistan">Pakistan</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="Mexico">Mexico</MenuItem>
            </Select>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="country">Expiry of Passport</InputLabel>
            <TextField
              id="passportExpiry"
              type="text"
              name="passportExpiry"
              value={formData.passportExpiry}
              onChange={handleChange}
              placeholder="09/02/2021"
              fullWidth
              variant="outlined"
              className="mb-3"
              error={!!errors.passportExpiry}
              helperText={errors.passportExpiry}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="proofOfOrigin">
              Prof of Pakistani Origin
            </InputLabel>
            <Select
              fullWidth
              id="proofOfOrigin"
              name="proofOfOrigin"
              value={formData.proofOfOrigin}
              onChange={handleChange}
              error={!!errors.proofOfOrigin}
              helperText={errors.proofOfOrigin}
            >
              <MenuItem value="NIC">NIC</MenuItem>
              <MenuItem value="POc">POc</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="country">
              Id number For prof of Origin
            </InputLabel>
            <TextField
              id="idNumber"
              type="number"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              placeholder="00000000000"
              fullWidth
              variant="outlined"
              className="mb-3"
              error={!!errors.idNumber}
              helperText={errors.idNumber}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="occupation">Occupation</InputLabel>
            <Select
              fullWidth
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              error={!!errors.occupation}
              helperText={errors.occupation}
            >
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="Job">Job</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="other">other</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="country">
              Details of occupation / School Name and Grades
            </InputLabel>
            <TextField
              id="occupationDetails"
              type="text"
              name="occupationDetails"
              value={formData.occupationDetails}
              onChange={handleChange}
              placeholder="Enter Details"
              fullWidth
              variant="outlined"
              className="mb-3"
              error={!!errors.occupationDetails}
              helperText={errors.occupationDetails}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="occupation">
              Name of School, College, University
            </InputLabel>

            <TextField
              id="school"
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              placeholder="Enter the Name of School, College, University"
              fullWidth
              variant="outlined"
              className="mb-3"
              error={!!errors.grade}
              helperText={errors.grade}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="occupation">Grade</InputLabel>

            <TextField
              id="grade"
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              placeholder="Enter the Grade"
              fullWidth
              variant="outlined"
              className="mb-3"
              error={!!errors.grade}
              helperText={errors.grade}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel id="visaStatus-label">Visa Status</InputLabel>
            <Select
              fullWidth
              labelId="visaStatus-label"
              id="visaStatus"
              name="visaStatus"
              value={formData.visaStatus}
              onChange={handleChange}
              label="Visa Status"
              error={!!errors.visaStatus}
              helperText={errors.visaStatus}
            >
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="Permit">Permit</MenuItem>
              <MenuItem value="Visit visa">Visit Visa</MenuItem>
              <MenuItem value="Temporary Permit">Temporary Permit</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="occupation">Other Info</InputLabel>

            <TextField
              id="otherInfo"
              type="text"
              name="otherInfo"
              value={formData.otherInfo}
              onChange={handleChange}
              placeholder="Enter Your full Name"
              fullWidth
              variant="outlined"
              className="mb-3"
              error={!!errors.otherInfo}
              helperText={errors.otherInfo}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="occupation">Expiry of Permit/Visa</InputLabel>

            <TextField
              id="expiryOfPermit"
              type="text"
              name="expiryOfPermit"
              value={formData.expiryOfPermit}
              onChange={handleChange}
              placeholder="09/02/2021"
              fullWidth
              variant="outlined"
              className="mb-3"
              error={!!errors.expiryOfPermit}
              helperText={errors.expiryOfPermit}
            />
          </Grid>

          <Grid item xs={12}>
            <InputLabel htmlFor="occupation">
              Staying in Rawanda Since when?
            </InputLabel>

            <TextField
              id="staying"
              type="text"
              name="staying"
              value={formData.staying}
              onChange={handleChange}
              placeholder="09/02/2021"
              fullWidth
              variant="outlined"
              className="mb-3"
              error={!!errors.staying}
              helperText={errors.staying}
            />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Dependent1;

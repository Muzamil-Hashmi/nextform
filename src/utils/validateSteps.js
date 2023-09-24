export const validateStep = (step, formData, setErrors) => {
  let errors = {};

  if (step === 0) {
    if (
      !formData.email ||
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      errors.email = "Invalid email address";
    }
    if (!formData.fullname) {
      errors.fullname = "Full name is required";
    }
    if (!formData.birthDate) {
      errors.birthDate = "Birth date is required";
    }
    if (!formData.gender) {
      errors.gender = "Gender is required";
    }
    if (!formData.maritalStatus) {
      errors.maritalStatus = "Marital status is required";
    }
    if (!formData.nationality) {
      errors.nationality = "Nationality is required";
    }
    if (!formData.passportNumber) {
      errors.passportNumber = "Passport number is required";
    }
    if (!formData.passportExpiry) {
      errors.passportExpiry = "Passport expiry is required";
    }
    if (!formData.originID) {
      errors.originID = "Origin ID is required";
    }
    if (!formData.occupation) {
      errors.occupation = "Occupation is required";
    }
    if (!formData.occupationDetails) {
      errors.occupationDetails = "Occupation details is required";
    }
    if (!formData.visaStatus) {
      errors.visaStatus = "Visa status is required";
    }
    if (!formData.proofOfOrigin) {
      errors.proofOfOrigin = "Proof of origin is required";
    }
  }
  if (step === 1) {
    if (!formData.mobileNumber) {
      errors.mobileNumber = "Mobile number is required";
    }
    if (!formData.whatsappNumber) {
      errors.whatsappNumber = "Whatsapp number is required";
    }
    if (!formData.address) {
      errors.address = "Address is required";
    }
    if (!formData.province) {
      errors.province = "Province is required";
    }
    if (!formData.district) {
      errors.district = "District is required";
    }
    if (!formData.cell) {
      errors.cell = "Cell is required";
    }
  }

  if (step === 2) {
    if (!formData.relation) {
      errors.relation = "Relation is required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!formData.country) {
      errors.country = "Country is required";
    }
    if (!formData.passportExpiry) {
      errors.passportExpiry = "Passport expiry date is required";
    }
    if (!formData.proofOfOrigin) {
      errors.proofOfOrigin = "Proof of Pakistani origin is required";
    }
    if (!formData.idNumber) {
      errors.idNumber = "ID number for proof of origin is required";
    }
    if (!formData.occupation) {
      errors.occupation = "Occupation is required";
    }
    if (!formData.occupationDetails) {
      errors.occupationDetails = "Occupation details are required";
    }
    if (!formData.school) {
      errors.school = "Name of School, College, University is required";
    }
    if (!formData.grade) {
      errors.grade = "Grade is required";
    }
    if (!formData.visaStatus) {
      errors.visaStatus = "Visa status is required";
    }
    if (!formData.expiryOfPermit) {
      errors.expiryOfPermit = "Expiry of Permit/Visa is required";
    }
    if (!formData.staying) {
      errors.staying = "Staying in Rawanda Since when is required";
    }
  }
  if (step === 3) {
    if (!formData.emergencycountry) {
      errors.emergencycountry = "Country is required";
    }
    if (!formData.city) {
      errors.city = "City is required";
    }
    if (!formData.address) {
      errors.address = "Address is required";
    }
    if (!formData.contactPersonName) {
      errors.contactPersonName = "Name of contact person is required";
    }
    if (!formData.emergencycontact) {
      errors.emergencycontact = "Relation with contact person is required";
    }
    if (!formData.contactPersonNumber) {
      errors.contactPersonNumber =
        "Mobile number for contact person is required";
    }
  }
  setErrors(errors);
  return Object.keys(errors).length === 0;
};

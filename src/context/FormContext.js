"use client";
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: "",
    birthDate: "",
    gender: "",
    maritalStatus: "",
    nationality: "",
    passportNumber: "",
    passportExpiry: "",
    proofOfOrigin: "",
    originID: "",
    occupation: "",
    occupationDetails: "",
    visaStatus: "",
    visaExpiry: "",
    rwandaStaySince: "",
    dependantsInRwanda: "",
    mobileNumber: "",
    whatsappNumber: "",
    address: "",
    province: "",
    district: "",
    cell: "",
    relation: "",
    fullname: "",
    lastName: "",
    country: "",
    school: "",
    grade: "",
    otherInfo: "",
    expiryOfPermit: "",
    staying: "",
    idNumber: "",
    emergencycountry: "",
    city: "",
    address: "",
    contactPersonName: "",
    emergencycontact: "",
    contactPersonNumber: "",
    passportCopyHead: "",
    visa: "",
    passportCopyDep1: "",
    visaDep1: "",
    passportCopyDep2: "",
    visaDep2: "",
    proofOfOrigin: "",
  });

const [errors, setErrors] = useState({});

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <FormContext.Provider
      value={{ formData, updateFormData, errors, setErrors }}
    >
      {children}
    </FormContext.Provider>
  );
};

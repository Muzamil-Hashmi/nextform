"use client";

import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useFormContext } from "@/context/FormContext";

const FileUploadButton = ({ label, onFileChange, keyName }) => {
  const [fileName, setFileName] = React.useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
    onFileChange(file, keyName);
  };

  return (
    <div className="mb-4 md:w-1/2 lg:w-1/3 px-2">
      <label className="block mb-2 text-gray-700">{label}</label>
      <label
        htmlFor={`upload-${label.toLowerCase().replace(/ /g, "-")}`}
        className="block w-full h-32 bg-gray-100 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 text-center"
      >
        <input
          id={`upload-${label.toLowerCase().replace(/ /g, "-")}`}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        <CloudUploadIcon className="mt-8 text-4xl text-gray-400" />
        <p className="text-gray-500">{fileName || "Click to upload"}</p>
      </label>
    </div>
  );
};

export default function InputFileUpload() {
  const { formData, updateFormData } = useFormContext();

  const handleFileChange = (file, key) => {
    updateFormData({ [key]: file });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">File Upload</h1>
      <div className="flex flex-wrap -mx-2">
        <FileUploadButton
          label="Passport Copy head"
          onFileChange={handleFileChange}
          keyName="passportCopyHead"
        />
        <FileUploadButton
          label="Visa"
          onFileChange={handleFileChange}
          keyName="visa"
        />
        <FileUploadButton
          label="Passport Copy dep1"
          onFileChange={handleFileChange}
          keyName="passportCopyDep1"
        />
        <FileUploadButton
          label="Visa dep1"
          onFileChange={handleFileChange}
          keyName="visaDep1"
        />
        <FileUploadButton
          label="Passport Copy dep2"
          onFileChange={handleFileChange}
          keyName="passportCopyDep2"
        />
        <FileUploadButton
          label="Visa dep2"
          onFileChange={handleFileChange}
          keyName="visaDep2"
        />
        <FileUploadButton
          label="Proof of Origin Head in case of other Nationality"
          onFileChange={handleFileChange}
          keyName="proofOfOrigin"
        />
      </div>
    </div>
  );
}

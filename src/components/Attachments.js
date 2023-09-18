import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploadButton = ({ label }) => {
  return (
    <div className="mb-4 md:w-1/2 lg:w-1/3 px-2">
      <label className="block mb-2 text-gray-700">{label}</label>
      <label
        htmlFor={`upload-${label.toLowerCase().replace(/ /g, '-')}`}
        className="block w-full h-32 bg-gray-100 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 text-center"
      >
        <input
          id={`upload-${label.toLowerCase().replace(/ /g, '-')}`}
          type="file"
          className="hidden"
        />
        <CloudUploadIcon className="mt-8 text-4xl text-gray-400" />
        <p className="text-gray-500">Click to upload</p>
      </label>
    </div>
  );
};

export default function InputFileUpload() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">File Upload</h1>
      <div className="flex flex-wrap -mx-2">
        <FileUploadButton label="Passport Copy head" />
        <FileUploadButton label="Visa" />
        <FileUploadButton label="Passport Copy dep1" />
        <FileUploadButton label="Visa dep1" />
        <FileUploadButton label="Passport Copy dep2" />
        <FileUploadButton label="Visa dep2" />
        <FileUploadButton label="Proof of Origin Head in case of other Nationality" />
      </div>
    </div>
  );
}

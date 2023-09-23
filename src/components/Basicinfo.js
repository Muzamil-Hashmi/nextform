"use client";
import React from "react";
import { useFormContext } from "@/context/FormContext";

const Basicinfo = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-wrap -mx-4 p-6 bg-white  rounded-lg">
      <div className="w-1/2 px-4 space-y-4">
        <label className="block">
          <span className="text-gray-600">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-600">Name</span>
          <input
            type="text"
            name="fullname"
            placeholder="Enter Your Name"
            value={formData.fullname}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-600">Birth Date</span>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-600">Gender</span>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-600">Marital Status</span>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widow">Widow</option>
            <option value="Widower">Widower</option>
            <option value="Divorced">Divorced</option>
          </select>
        </label>
      </div>

      <div className="w-1/2 px-4 space-y-4">
        <label className="block">
          <span className="text-gray-600">Nationality</span>
          <input
            type="text"
            name="nationality"
            placeholder="Enter Nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-600">Passport Number</span>
          <input
            type="text"
            name="passportNumber"
            placeholder="Enter Passport Number"
            value={formData.passportNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-600">Passport Expiry</span>
          <input
            type="date"
            name="passportExpiry"
            value={formData.passportExpiry}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-600">Proof Of Origin</span>
          <select
            name="proofOfOrigin"
            value={formData.proofOfOrigin}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="NIC">NIC</option>
            <option value="POc">POc</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block">
          <span className="text-gray-600">Origin ID</span>
          <input
            type="text"
            name="originID"
            placeholder="Enter Origin ID"
            value={formData.originID}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
      </div>

      <div className="w-full px-4 space-y-4 mt-4">
        <label className="block">
          <span className="text-gray-600">Occupation</span>
          <input
            type="text"
            name="occupation"
            placeholder="Enter Occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-600">Occupation Details</span>
          <input
            type="text"
            name="occupationDetails"
            placeholder="Enter Occupation Details"
            value={formData.occupationDetails}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block">
          <span className="text-gray-600">Visa Status</span>
          <input
            type="text"
            name="visaStatus"
            placeholder="Enter Visa Status"
            value={formData.visaStatus}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md p-2 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </label>
      </div>
    </div>
  );
};

export default Basicinfo;

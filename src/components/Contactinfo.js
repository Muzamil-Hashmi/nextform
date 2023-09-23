"use client";
import React from "react";
import { useFormContext } from "@/context/FormContext"; 

const Contactinfo = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
        updateFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <div className="mb-5">
        <label
          htmlFor="mobileNumber"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Mobile Number
        </label>
        <input
          type="number" 
          name="mobileNumber"
          id="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="whatsappNumber"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Whatsapp Number
        </label>
        <input
          type="number"
          name="whatsappNumber"
          id="whatsappNumber"
          value={formData.whatsappNumber}
          onChange={handleChange}
          placeholder="Whatsapp Number"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="address"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="province"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Province
        </label>
        <input
          type="text"
          name="province"
          id="province"
          value={formData.province}
          onChange={handleChange}
          placeholder="Province"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="district"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          District
        </label>
        <input
          type="text"
          name="district"
          id="district"
          value={formData.district}
          onChange={handleChange}
          placeholder="District"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="cell"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Cell
        </label>
        <input
          type="number"
          name="cell"
          id="cell"
          value={formData.cell}
          onChange={handleChange}
          placeholder="Cell"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
    </>
  );
};

export default Contactinfo;

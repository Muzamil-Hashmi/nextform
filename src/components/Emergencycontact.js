'use client'
import { useFormContext } from "@/context/FormContext";
import React from "react";

const Emergencycontact = () => {
const { formData, updateFormData } = useFormContext();

const handleChange = (e) => {
  const { name, value } = e.target;
  updateFormData({
    ...formData,
    [name]: value,
  });
};
  return (
    <>
      {/* component */}
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Country
              </label>
              <input
                onChange={handleChange}
                value={formData.emergencycountry}
                type="text"
                name="emergencycountry"
                id="country"
                placeholder="Country"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                City
              </label>
              <input
                onChange={handleChange}
                value={formData.city}
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Other Full Adress
              </label>
              <input
                onChange={handleChange}
                value={formData.address}
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name Of Contact Person
              </label>
              <input
                onChange={handleChange}
                value={formData.contactPersonName}
                type="text"
                name="contactPersonName"
                id="contactPersonName"
                placeholder="Enter Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Relation with Conatact Person
              </label>
              <input
                onChange={handleChange}
                value={formData.emergencycontact}
                type="text"
                name="emergencycontact"
                id="emergencycontact"
                placeholder="emergencycontact"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Mobile Number for contact Person
              </label>
              <input
                onChange={handleChange}
                value={formData.contactPersonNumber}
                type="number"
                name="contactPersonNumber"
                id="contactPersonNumber"
                placeholder="Mobile Number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Emergencycontact;

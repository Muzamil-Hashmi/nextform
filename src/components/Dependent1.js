'use client'
import React from 'react'
import { useFormContext } from "@/context/FormContext";


const Dependent1 = () => {
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
        <div>
          <div>
            <div className="w-full h-14 pt-2 text-center  bg-gray-700  shadow overflow-hidden sm:rounded-md font-bold text-3xl text-white ">
              Job Requisition Form
            </div>
            <section className="text-gray-600 body-font  m-0 p-0 relative" />
            <div className="container    mx-auto">
              <div className="flex flex-col text-center w-full mb-1"></div>
              <div className="mt-10 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-2 py-8 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="relation"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Relation
                          </label>
                          <select
                            id="relation"
                            name="relation"
                            value={formData.relation}
                            onChange={handleChange}
                            autoComplete="country"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>Wife</option>
                            <option>Husband</option>
                            <option>Son</option>
                            <option>Daughter</option>
                            <option>Mother</option>
                            <option>Father</option>
                            <option>MIL</option>
                            <option>FIL</option>
                            <option>Brother</option>
                            <option>Sister</option>
                            <option>BIL</option>
                            <option>Sill</option>
                          </select>
                        </div>
                        {/* <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            placeholder="Enter Your full Name"
                            id="name"
                            autoComplete="name"
                            className="mt-1 focus:ring-indigo-500 text-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 rounded-md"
                          />
                        </div> */}
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="09/02/2021"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nationality
                          </label>
                          <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            autoComplete="country"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>Pakistan</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                          </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Passport Number
                          </label>
                          <input
                            type="number"
                            name="passport"
                            value={formData.passport}
                            placeholder="00000000000"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Expiray of Passport
                          </label>
                          <input
                            type="text"
                            name="passportExpiry"
                            value={formData.passportExpiry}
                            onChange={handleChange}
                            placeholder="09/02/2021"
                            id="passportExpiry"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Prof of Pakistani Origin
                          </label>
                          <select
                            id="country"
                            name="proofOfOrigin"
                            value={formData.proofOfOrigin}
                            onChange={handleChange}
                            autoComplete="country"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option>NIC</option>
                            <option>POc</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Id number For prof of Origin
                          </label>
                          <input
                            type="number"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleChange}
                            placeholder="00000000000"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Occupation
                          </label>
                          <select
                            id="country"
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleChange}
                            autoComplete="country"
                            className="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option className="mt-2">HR</option>
                            <option>Job</option>
                            <option>Business</option>
                            <option>Student</option>
                            <option>other</option>
                          </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Details of occupation / School Name and Grades
                          </label>
                          <input
                            type="text"
                            name="occupationDetails"
                            value={formData.occupationDetails}
                            onChange={handleChange}
                            placeholder="Enter Your full Name"
                            id="name"
                            autoComplete="name"
                            className="mt-1 focus:ring-indigo-500 text-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name of School,College,University
                          </label>
                          <input
                            type="text"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            placeholder="Enter Your full Name"
                            id="name"
                            autoComplete="name"
                            className="mt-1 focus:ring-indigo-500 text-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Grade
                          </label>
                          <input
                            type="text"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            placeholder="Enter Your full Name"
                            id="name"
                            autoComplete="name"
                            className="mt-1 focus:ring-indigo-500 text-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Visa Status
                          </label>
                          <select
                            id="country"
                            name="visaStatus"
                            value={formData.visaStatus}
                            onChange={handleChange}
                            autoComplete="country"
                            className="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option className="mt-2">HR</option>
                            <option>Permit</option>
                            <option>Visit visa</option>
                            <option>Temprory Permit</option>
                            <option>other</option>
                          </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            other Info
                          </label>
                          <input
                            type="text"
                            name="otherInfo"
                            value={formData.otherInfo}
                            onChange={handleChange}
                            placeholder="Enter Your full Name"
                            id="name"
                            autoComplete="name"
                            className="mt-1 focus:ring-indigo-500 text-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Expiray of Permit /visa
                          </label>
                          <input
                            type="text"
                            name="expiryOfPermit"
                            value={formData.expiryOfPermit}
                            onChange={handleChange}
                            placeholder="09/02/2021"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Staying in Rawanda Since when ?
                          </label>
                          <input
                            type="text"
                            name="staying"
                            value={formData.staying}
                            onChange={handleChange}
                            placeholder="09/02/2021"
                            id="last-name"
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Dependent1

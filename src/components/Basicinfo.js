import React from 'react'

const Basicinfo = () => {
    return (
        <>
            <div>

                <div>
                    {/* component */}
                    {/* This is an example component */}
                    <div className="w-full h-14 pt-2 text-center  bg-gray-700  shadow overflow-hidden sm:rounded-md font-bold text-3xl text-white ">
                        Job Requisition Form
                    </div>
                    <section className="text-gray-600 body-font  m-0 p-0 relative" />
                    <div className="container    mx-auto">
                        <div className="flex flex-col text-center w-full mb-1">
                        </div>
                        <div className="mt-10 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-2 py-8 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Email
                                                </label>
                                                <input type="email" name="email" placeholder="Enter Your Email" id="email" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 rounded-md" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Full Name
                                                    </label>
                                                <input type="text" name="name" placeholder="Enter Your full Name" id="name" autoComplete="name" className="mt-1 focus:ring-indigo-500 text-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 rounded-md" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Date Of Birth
                                                    </label>
                                                <input type="text" name="last-name" placeholder="09/02/2021" id="last-name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Gender</label>
                                                <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <option>Male</option>
                                                    <option>female</option>
                                                    <option>other</option>
                                                </select>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Marital Status</label>
                                                <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <option>Single</option>
                                                    <option>Marrried</option>
                                                    <option>Window</option>
                                                    <option>Windower</option>
                                                    <option>Divoced</option>
                                                   
                                                </select>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Nationality</label>
                                                <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <option>Pakistan</option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Pasport Number
                                                    </label>
                                                <input type="number" name="last-name" placeholder="00000000000" id="last-name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Expiray of Passport
                                                    </label>
                                                <input type="text" name="last-name" placeholder="09/02/2021" id="last-name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Prof of Pakistani Origin</label>
                                                <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <option>NIC</option>
                                                    <option>POc</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Id number For prof of Origin
                                                    </label>
                                                <input type="number" name="last-name" placeholder="00000000000" id="last-name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Occupation</label>
                                                <select id="country" name="country" autoComplete="country" className="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <option className="mt-2">HR</option>
                                                    <option>Job</option>
                                                    <option>Business</option>
                                                    <option>Student</option>
                                                    <option>other</option>
                                                </select>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Details of occupation / School Name and Grades
                                                    </label>
                                                <input type="text" name="name" placeholder="Enter Your full Name" id="name" autoComplete="name" className="mt-1 focus:ring-indigo-500 text-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 py-2 rounded-md" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Visa Status</label>
                                                <select id="country" name="country" autoComplete="country" className="mt-3 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <option className="mt-2">HR</option>
                                                    <option>Permit</option>
                                                    <option>Visit visa</option>
                                                    <option>Temprory Permit</option>
                                                    <option>other</option>
                                                </select>
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Expiray of Permit /visa
                                                    </label>
                                                <input type="text" name="last-name" placeholder="09/02/2021" id="last-name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Staying in Rawanda Since when ?
                                                    </label>
                                                <input type="text" name="last-name" placeholder="09/02/2021" id="last-name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border py-2 border-gray-300 rounded-md" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Living with Dependants in Rawanda</label>
                                                <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <option>Yes</option>
                                                    <option>NO</option>
                                                   
                                                </select>
                                            </div>
                                        </div>
                                      
                                    </div>
                                    <div className="px-4 py-3 bg-white text-right sm:px-6">
                                        <button type="submit" className="mr-4 inline-flex justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md ring ring-gray-500 ring-offset-4  text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2  focus:ring-indigo-500">
                                            New
                                        </button>
                                        <button type="submit" className="inline-flex justify-center w-24 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md ring  ring-indigo-500 ring-offset-4 bg-indigo-600 hover:bg-indigo-700 text-whitefocus:outline-none focus:ring-2  focus:ring-indigo-500">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form></div>
                    </div>
                    <div className="hidden sm:block" aria-hidden="true">
                        <div className="py-5">
                            <div className />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Basicinfo
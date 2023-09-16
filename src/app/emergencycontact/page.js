import React from 'react'

const page = () => {
  return (
<>

{/* component */}
<div className="flex items-center justify-center p-12">
  {/* Author: FormBold Team */}
  {/* Learn More: https://formbold.com */}
  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
    <div className="mb-5">
        <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
          Country
        </label>
        <input type="text" name="subject" id="subject" placeholder="Country" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>
      <div className="mb-5">
        <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
         City
        </label>
        <input type="text" name="subject" id="subject" placeholder="City" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>
      <div className="mb-5">
        <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
          Other Full Adress
        </label>
        <input type="text" name="subject" id="subject" placeholder="Adress" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>
      <div className="mb-5">
        <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
          Name Of Contact Person
        </label>
        <input type="text" name="name" id="Name" placeholder="Enter Full Name
" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>
      <div className="mb-5">
        <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
          Relation with Conatact Person
        </label>
        <input type="text" name="subject" id="subject" placeholder="Relation" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
          Mobile Number for contact Person
        </label>
        <input type="number" name="number" id="number" placeholder="Mobile Number" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>
      <div>
        <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

</>  )
}

export default page
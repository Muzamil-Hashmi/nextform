import React from 'react'

const Contactinfo = () => {
  return (
<>

{/* component */}
<div className="flex items-center justify-center p-12">
  {/* Author: FormBold Team */}
  {/* Learn More: https://formbold.com */}
  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
          Mobile Number
        </label>
        <input type="number" name="number" id="number" placeholder="Mobile Number" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
          Whatsapp Number
        </label>
        <input type="number" name="number" id="number" placeholder="Whatsaap Number" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>
      <div className="mb-5">
        <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
          Adress
        </label>
        <input type="text" name="subject" id="subject" placeholder="Adress" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>
      <div className="mb-5">
        <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
          Provience
        </label>
        <input type="text" name="subject" id="subject" placeholder="Provience
" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>
      <div className="mb-5">
        <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
          Distric
        </label>
        <input type="text" name="subject" id="subject" placeholder="Distric" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
         Cell
        </label>
        <input type="number" name="number" id="number" placeholder="Cell" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
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

export default Contactinfo
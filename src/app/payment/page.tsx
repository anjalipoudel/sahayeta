import React from 'react'
export default function Payments() {
  return (
    <>
      <div className="">
        <div className="container mx-auto mt-8">
          <form className="mx-auto max-w-md rounded bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-xl font-semibold text-blue-500">
              Donor Information
            </h2>
            <div className="flex flex-row gap-4">
              <div className="mb-4">
                <label
                  htmlFor="firstname"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  First Name
                </label>
                <input
                  className=" focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                  id="first-name"
                  type="text"
                  placeholder="first name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastname"
                  className="mb-2 block text-sm font-bold text-gray-700"
                >
                  Last Name
                </label>
                <input
                  className=" focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
                  id="last-name"
                  type="text"
                  placeholder="last name"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="emailaddress"
                className=" mb-2 block text-sm font-bold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="text"
                className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none "
                id="email-address"
                placeholder="email address"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phonenumber"
                className=" mb-2 block text-sm font-bold text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none "
                id="phone number"
                placeholder="phone number"
                required
              />
            </div>
            <div className="">
              <div className="flex flex-row gap-28">
                <h2 className="mb-6 text-xl font-semibold text-blue-500">
                  Payment Method
                </h2>
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none "
                id="phone number"
                placeholder="khalti phone number"
                required
              />
            </div>
            <div className="py-4 md:flex">
              <a
                href="#"
                className="focus:shadow-outline w-full rounded border border-transparent bg-blue-500 px-3 py-2 text-center font-semibold leading-tight text-white duration-500 hover:border hover:border-blue-400 hover:bg-transparent hover:text-blue-500 focus:outline-none"
              >
                Donate with khalti
              </a>
            </div>
            <div className="flex flex-row gap-2">
              <input type="checkbox" id="checkbox" />
              <p className=" text-sm text-blue-500">
                Don't display my name publicly on the fundraiser.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

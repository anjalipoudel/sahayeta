import React from 'react'
import { TbAddressBook } from 'react-icons/tb'
import { FaHeart } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'

export default function page() {
  return (
    <div className="flex w-full flex-col  items-center justify-center rounded bg-blue-50 p-6">
      <div className="container ">
        <div className="flex w-full flex-col rounded-xl bg-slate-200 py-5  ">
          <div className="relative px-10 sm:rounded-lg">
            <p className="py-4 text-lg font-bold text-blue-700">
              User Information
            </p>
          </div>
          <div className="m-3">
            <div className="  mb-3 flex items-center gap-3 rounded-md border bg-gray-50">
              <div className="m-3 h-24 w-24 rounded-full border border-accent bg-slate-300"></div>
              <div className=" rounded-md p-2">
                <p className="text-xl font-medium">Aanchal Subedi</p>
                <p className="text-md flex font-maven  text-slate-500 ">
                  <TbAddressBook className="m-1" />
                  Bharatpur, Chitwan
                </p>
                <p className="text-md flex font-maven  text-slate-500 ">
                  <FaHeart className="m-1" />
                  Fundraiser for 7 months
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="p-4">
                <h6 className="flex text-lg font-semibold">
                  <FaCalendarAlt className="m-2 text-lg" />
                  Donation Information
                </h6>
              </div>
            </div>

            <table className="mt-2 w-full text-left text-sm text-gray-500 rtl:text-right">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Campaign Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Start Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Goal Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Raised Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    End Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b hover:bg-gray-50 ">
                  <td
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 "
                  >
                    jajarkot
                  </td>
                  <td className="px-6 py-4">education</td>
                  <td className="px-6 py-4">2023-05-21</td>

                  <td className="px-6 py-4">25000</td>
                  <td className="px-6 py-4">22000</td>
                  <td className="px-6 py-4">2023-05-23</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

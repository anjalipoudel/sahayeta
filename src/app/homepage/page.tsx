import Image from 'next/image'
import React from 'react'
import { FaBriefcaseMedical } from 'react-icons/fa'
import { FaChildren } from 'react-icons/fa6'
import { GiBookCover } from 'react-icons/gi'
import { IoMdPaw } from 'react-icons/io'
import { FaMonument } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa'
export default function Page() {
  return (
    <>
      <div className="flex-col py-10 md:flex">
        <h1 className="flex justify-center text-4xl font-bold text-black">
          Trending Fundraiser
        </h1>
        <p className="flex justify-center py-4 font-semibold text-gray-400">
          View the fundraisers that are most active right now
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center md:flex-row ">
        <div className="flex">
          <div className="flex w-full flex-row justify-center gap-14 pb-2">
            <div className="flex w-1/3 flex-col justify-center rounded-b-lg shadow-2xl ">
              <Image
                src="/assets/img/donation.jpg"
                alt="Hero Section"
                width={300}
                height={200}
                className=""
                quality={100}
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">
                  School for special needs
                </div>
                <p className="text-base text-gray-700">
                  School for special needs
                </p>
                <div className="flex justify-center  py-4">
                  <button className="hover: flex w-1/3 items-center justify-center rounded border-blue-500 bg-blue-500 py-1 font-semibold text-white duration-300 hover:bg-transparent hover:text-black  ">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-1/3 flex-col  justify-center rounded-b-lg shadow-2xl">
              <Image
                src="/assets/img/child.jpg"
                alt="Hero Section"
                width={300}
                height={200}
                className=""
                quality={100}
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">
                  Education for needs
                </div>
                <p className="text-base text-gray-700">Education for needs</p>
                <div className="flex justify-center py-4">
                  <button className="flex w-1/3 items-center justify-center rounded border-blue-500 bg-blue-500 py-1 font-semibold text-white  ">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-1/3 flex-col justify-center rounded-b-lg shadow-2xl">
              <Image
                src="/assets/img/girl.jpg"
                alt="Hero Section"
                width={300}
                height={200}
                className=""
                quality={100}
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">Feed the hungry</div>
                <p className="text-base text-gray-700">Feed the hungry</p>
                <div className="flex justify-center py-4">
                  <button className="flex w-1/3 items-center justify-center rounded border-blue-500 bg-blue-500 py-1 font-semibold text-white ">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <button className="flex items-center justify-center rounded border border-transparent bg-blue-500 px-3 py-2 text-center font-semibold text-white shadow-2xl duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-blue-500">
          See all donations
        </button>
      </div>
      <div className="mb-10 pb-32">
        <div className="flex flex-col py-14">
          <h1 className="flex justify-center text-4xl font-bold text-black">
            Causes you can raises funds for
          </h1>
          <p className="flex justify-center py-4 font-semibold text-gray-400">
            social cause, personal cause - you can count on us for the project
            that you want to raise funds for.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row  ">
          <div className="flex h-40 w-48 flex-col items-center justify-center rounded-lg border border-transparent bg-blue-500 px-6 py-4 font-semibold text-white shadow-2xl duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-blue-500">
            <div className="h-10 ">
              <FaBriefcaseMedical size={40} />
            </div>
            <h1>Medical</h1>
          </div>
          <div className="flex h-40 w-48 flex-col items-center justify-center rounded-lg border border-transparent bg-blue-500 px-6 py-4 font-semibold text-white shadow-2xl duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-blue-500">
            <FaChildren size={40} />
            <h1>Children</h1>
          </div>
          <div className="flex h-40 w-48 flex-col items-center justify-center rounded-lg  border border-transparent bg-blue-500 px-6 py-4 font-semibold text-white shadow-2xl duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-blue-500">
            <GiBookCover size={40} />
            <h1>Education</h1>
          </div>
          <div className="flex h-40 w-48 flex-col items-center justify-center rounded-lg  border border-transparent bg-blue-500 px-6 py-4 font-semibold text-white shadow-2xl duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-blue-500">
            <IoMdPaw size={40} />
            <h1>Animal</h1>
          </div>
          <div className="flex h-40 w-48 flex-col items-center justify-center rounded-lg  border border-transparent bg-blue-500 px-6 py-4 font-semibold text-white shadow-2xl duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-blue-500">
            <FaMonument size={40} />
            <h1>Memorial</h1>
          </div>
          <div className="flex h-40 w-48 flex-col items-center justify-center rounded-lg  border border-transparent bg-blue-500 px-6 py-4 font-semibold text-white shadow-2xl duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-blue-500">
            <FaHandshake size={40} />
            <h1>Others</h1>
          </div>
        </div>
      </div>
      <div className="py-18 flex flex-col">
        <h1 className="flex px-28 text-xl font-bold text-black ">
          Featured Topics
        </h1>

        <div className="flex flex-col py-10 pb-20">
          <div className="flex flex-row justify-center px-20 ">
            <Image
              src="/assets/img/child.jpg"
              alt="Hero Section"
              width={550}
              height={200}
              className=" shadow-2xl"
              quality={100}
            />
            <div className="flex w-1/2 flex-col rounded-r-lg bg-blue-500 px-20 py-14 shadow-2xl">
              <h1 className="flex justify-start text-3xl font-bold text-white">
                Look what we can help
              </h1>
              <p className="flex justify-center py-10  text-white">
                People across the country need help covering rent, food, and
                bills. Your donation to the Holiday Drive makes a difference
                this winter.
              </p>
              <div className="flex justify-start py-2">
                <button className="flex items-center justify-center rounded-lg border-blue-500 bg-white px-3 py-2  text-center font-semibold text-blue-500 shadow-lg hover:bg-transparent hover:text-white ">
                  See all donations
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-14 flex flex-row items-center">
        <div className="">
          <div className="flex flex-col py-14">
            <h1 className="flex px-28 text-xl font-bold text-black ">
              Fundraise for anyone
            </h1>
          </div>
          <div className="flex flex-col px-28 ">
            <h1 className="text-2xl font-bold text-blue-500">Yourself</h1>
            <p className=" py-8 text-xl text-gray-500 ">
              Funds are delivered to your bank account for your own use
            </p>
          </div>
          <div className="flex flex-col px-28 py-14">
            <h1 className="text-2xl font-bold text-blue-500">
              Family and friends
            </h1>
            <p className=" py-8 text-xl text-gray-500 ">
              Funds can be distributed and received
            </p>
          </div>
          <div className="flex flex-col px-28 ">
            <h1 className="text-2xl font-bold text-blue-500">Charity</h1>
            <p className=" py-8 text-xl text-gray-500 ">
              Funds are delivered to your chosen nonprofit for you
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center px-20">
          <Image
            src="/assets/img/plant.jpg"
            alt="Hero Section"
            width={550}
            height={100}
            className=" rounded shadow-2xl "
            quality={100}
          />
        </div>
      </div>
      <div className="flex justify-center py-14"></div>
    </>
  )
}

// import Image from 'next/image'
// import React from 'react'

export const TrendingSection = () => {
  return (
    <div>
      {' '}
      <div className="flex flex-col py-10">
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
                src="/assets/img/children.jpg"
                alt="Hero Section"
                width={300}
                height={200}
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
      </div>{' '}
    </div>
  )
}

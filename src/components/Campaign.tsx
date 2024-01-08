'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
export default function Campaign() {
  const [categories, setCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCategories, setFilteredCategories] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/category')
        const data = await response.json()

        const categoryNames = data.category.map(category => category.name)

        setCategories(categoryNames)
      } catch (error) {
        console.error('Error fetching category data:', error)
      }
    }

    fetchData()
  }, [])

  const handleSearch = value => {
    setSearchTerm(value)

    // Filter categories based on the search term
    const filtered = categories.filter(category =>
      category.toLowerCase().includes(value.toLowerCase())
    )

    setFilteredCategories(filtered)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/category')
        const data = await response.json()

        const categoryNames = data.category.map(category => category.name)

        setCategories(categoryNames)
      } catch (error) {
        console.error('Error fetching category data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <>
      <div className="p-4 flex flex-row gap-8 ">
        <div className="flex flex-col  bg-neutral-100 w-1/6 h-1/2 rounded-lg ml-20 mt-28 pb-14 ">
          <div className="justify-center  ml-8 mt-10 text-gray-500 space-y-12 font-semibold text-xl">
            <h1 className="font-semibold text-2xl ">CATEGORIES</h1>
            <div className="gap-20">
              <option value="allcategories" className="hover:text-blue-500 ">
                All Categories
              </option>
              <option value="education" className="hover:text-blue-500 ">
                Education
              </option>
              <option value="medical" className="hover:text-blue-500 ">
                Medical
              </option>
              <option value="children" className="hover:text-blue-500 ">
                Children
              </option>
              <option value="memorial" className="hover:text-blue-500 ">
                Memorial
              </option>
              <option value="animals" className="hover:text-blue-500 ">
                Animals
              </option>
              <option value="food&hunger" className="hover:text-blue-500 ">
                Food & Hunger
              </option>
              {categories.map(category => (
                <option
                  value={category}
                  key={category}
                  className="flex text-base  gap-3 justify-center items-center"
                >
                  {category}
                </option>
              ))}
            </div>
            <div className="relative w-full">
              <div className="">
                {filteredCategories.length > 0 &&
                  filteredCategories.map(category => (
                    <div
                      key={category}
                      onClick={() => {
                        console.log(`Selected category: ${category}`)
                      }}
                    >
                      {category}
                    </div>
                  ))}
              </div>
            </div>
            <button className="flex justify-center w-2/3 h-10 bg-blue-500 text-white border border-blue-500 hover:border-blue-500 rounded py-1 hover:bg-transparent hover:text-blue-500 duration-300  ">
              Start a fundraiser
            </button>
          </div>
        </div>
        <div className="">
          <h1 className="justify-center ml-8 mt-10 font-semibold text-gray-500 text-2xl ">
            Showing Fundraiser For :
          </h1>
          <div className="flex flex-row gap-8 ">
            <div className=" flex flex-col ml-8 mt-10  bg-neutral-200 w-2/5 h-2/3 rounded-lg">
              <div className="">
                <Image
                  src="/assets/img/donation.jpg"
                  alt="Hero Section"
                  width={400}
                  height={100}
                  className="rounded-t-lg"
                  quality={100}
                />
                <div className="m-2 space-y-3 ml-5 pt-2 ">
                  <p className="font-semibold text-black text-heading6">
                    Help This Child Get A Second Chance At Life.
                  </p>
                  <h1 className="font-semibold text-2xl text-black">$ 1500</h1>
                  <p className="font-semibold text-gray-500">
                    raised of $ 10,000 goal
                  </p>
                  <progress
                    value={100}
                    className="rounded-lg w-80 h-2.5 bg-blue-500"
                  ></progress>
                  <div className="flex flex-row gap-36 text-gray-500 font-semibold pb-4">
                    <p>10 days left</p>
                    <p>10 supporters</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col ml-8 mt-10  bg-neutral-200 w-2/5 h-2/3 rounded-lg">
              <div className="">
                <Image
                  src="/assets/img/donation.jpg"
                  alt="Hero Section"
                  width={400}
                  height={100}
                  className="rounded-t-lg"
                  quality={100}
                />
                <div className="m-2 space-y-3 ml-5 pt-2 ">
                  <p className="font-semibold text-black text-heading6">
                    Help This Child Get A Second Chance At Life.
                  </p>
                  <h1 className="font-semibold text-2xl text-black">$ 1500</h1>
                  <p className="font-semibold text-gray-500">
                    raised of $ 10,000 goal
                  </p>
                  <progress
                    value={100}
                    className="rounded-lg w-80 h-2.5 bg-blue-500"
                  ></progress>
                  <div className="flex flex-row gap-36 text-gray-500 font-semibold pb-4">
                    <p>10 days left</p>
                    <p>10 supporters</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col ml-8 mt-10  bg-neutral-200 w-2/5 h-2/3 rounded-lg">
              <div className="">
                <Image
                  src="/assets/img/donation.jpg"
                  alt="Hero Section"
                  width={400}
                  height={100}
                  className="rounded-t-lg"
                  quality={100}
                />
                <div className="m-2 space-y-3 ml-5 pt-2 ">
                  <p className="font-semibold text-black text-heading6">
                    Help This Child Get A Second Chance At Life.
                  </p>
                  <h1 className="font-semibold text-2xl text-black">$ 1500</h1>
                  <p className="font-semibold text-gray-500">
                    raised of $ 10,000 goal
                  </p>
                  <progress
                    value={100}
                    className="rounded-lg w-80 h-2.5 bg-blue-500"
                  ></progress>
                  <div className="flex flex-row gap-36 text-gray-500 font-semibold pb-4">
                    <p>10 days left</p>
                    <p>10 supporters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-8 ">
            <div className=" flex flex-col ml-8 mt-10  bg-neutral-200 w-2/5 h-2/3 rounded-lg">
              <div className="">
                <Image
                  src="/assets/img/donation.jpg"
                  alt="Hero Section"
                  width={400}
                  height={100}
                  className="rounded-t-lg"
                  quality={100}
                />
                <div className="m-2 space-y-3 ml-5 pt-2 ">
                  <p className="font-semibold text-black text-heading6">
                    Help This Child Get A Second Chance At Life.
                  </p>
                  <h1 className="font-semibold text-2xl text-black">$ 1500</h1>
                  <p className="font-semibold text-gray-500">
                    raised of $ 10,000 goal
                  </p>
                  <progress
                    value={100}
                    className="rounded-lg w-80 h-2.5 bg-blue-500"
                  ></progress>
                  <div className="flex flex-row gap-36 text-gray-500 font-semibold pb-4">
                    <p>10 days left</p>
                    <p>10 supporters</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col ml-8 mt-10  bg-neutral-200 w-2/5 h-2/3 rounded-lg">
              <div className="">
                <Image
                  src="/assets/img/donation.jpg"
                  alt="Hero Section"
                  width={400}
                  height={100}
                  className="rounded-t-lg"
                  quality={100}
                />
                <div className="m-2 space-y-3 ml-5 pt-2 ">
                  <p className="font-semibold text-black text-heading6">
                    Help This Child Get A Second Chance At Life.
                  </p>
                  <h1 className="font-semibold text-2xl text-black">$ 1500</h1>
                  <p className="font-semibold text-gray-500">
                    raised of $ 10,000 goal
                  </p>
                  <progress
                    value={100}
                    className="rounded-lg w-80 h-2.5 bg-blue-500"
                  ></progress>
                  <div className="flex flex-row gap-36 text-gray-500 font-semibold pb-4">
                    <p>10 days left</p>
                    <p>10 supporters</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col ml-8 mt-10  bg-neutral-200 w-2/5 h-2/3 rounded-lg">
              <div className="">
                <Image
                  src="/assets/img/donation.jpg"
                  alt="Hero Section"
                  width={400}
                  height={100}
                  className="rounded-t-lg"
                  quality={100}
                />
                <div className="m-2 space-y-3 ml-5 pt-2 ">
                  <p className="font-semibold text-black text-heading6">
                    Help This Child Get A Second Chance At Life.
                  </p>
                  <h1 className="font-semibold text-2xl text-black">$ 1500</h1>
                  <p className="font-semibold text-gray-500">
                    raised of $ 10,000 goal
                  </p>
                  <progress
                    value={100}
                    className="rounded-lg w-80 h-2.5 bg-blue-500"
                  ></progress>
                  <div className="flex flex-row gap-36 text-gray-500 font-semibold pb-4">
                    <p>10 days left</p>
                    <p>10 supporters</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

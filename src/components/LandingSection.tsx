'use client'
import { SearchIcon } from '@sahayeta/icons'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { CamapaignCard } from '@sahayeta/components'
import Link from 'next/link'
import { Loading } from '@sahayeta/components'

export default function LandingSection() {
  const [categories, setCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCategories, setFilteredCategories] = useState([])
  const [campaigns, setCampaigns] = useState<any[]>([])

  useEffect(() => {
    axios
      .get('/api/campaigns/', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        setCampaigns(response.data.campaigns)
      })
      .catch(error => {
        console.error('Axios error:', error)
      })
  }, [])

  const displayedCampaigns = campaigns.slice(0, 3)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/category/')
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
    const filtered = categories.filter(category =>
      category.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredCategories(filtered)
  }

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-10 bg-blue-700 px-5 py-8 lg:py-16">
        <div className="text-center text-xl font-medium text-white lg:text-3xl lg:font-bold">
          Empower Change, Inspire Hope Your Contribution Makes a Difference
        </div>
        <div className="text-center text-sm text-white lg:text-xl">
          Sahayata Uniting Hearts, Transforming Lives – Be the Difference Today!
        </div>

        <div className="flex items-center justify-between rounded bg-white lg:w-1/2">
          <div className="flex items-center justify-center gap-3 px-5 text-sm">
            <select className="w-44 rounded px-3 py-2 outline-none ">
              <option value="" className="w-full">
                Select Category
              </option>
              {categories.map(category => (
                <option value={category} key={category} className="">
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              className="h-14 w-full border-l border-gray-600 px-5 outline-none"
              placeholder="Search for "
              value={searchTerm}
              onChange={e => handleSearch(e.target.value)}
            />
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
        </div>
        <div className="flex gap-3">
          <div className="flex h-6 items-center justify-center rounded  bg-slate-100/30 p-3 text-white">
            <div className="flex h-4 w-4 items-center text-white ">
              {SearchIcon}
            </div>
            <p className="text-xs">Funding</p>
          </div>
          <div className="flex h-6 items-center justify-center rounded  bg-slate-100/30 p-3 text-white">
            <div className="flex h-4 w-4 items-center text-white">
              {SearchIcon}
            </div>
            <p className="text-xs">Campaign</p>
          </div>
          <div className="flex h-6 items-center justify-center rounded  bg-slate-100/30 p-3 text-white">
            <div className="flex h-4 w-4 items-center text-white">
              {SearchIcon}
            </div>
            <p className="text-xs">Charity</p>
          </div>
        </div>

        <div className="container grid w-full grid-cols-2 items-center justify-center gap-5 lg:grid-cols-5">
          <div className="flex flex-col items-center gap-2 ">
            <div className="h-28 w-44 rounded-2xl border-4 border-blue-300 p-0.5">
              <div className="relative h-full w-full items-center overflow-hidden  rounded-xl">
                <Image
                  src="/assets/img/health.avif"
                  fill
                  alt="Testimonial"
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className=" flex  items-center font-medium text-white">
              Health
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="h-28 w-44 rounded-2xl border-4 border-blue-300 p-0.5">
              <div className="relative h-full w-full items-center overflow-hidden  rounded-xl">
                <Image
                  src="/assets/img/education.jpg"
                  fill
                  alt="Testimonial"
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className=" flex  items-center font-medium text-white">
              Education
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="h-28 w-44 rounded-2xl border-4 border-blue-300 p-0.5">
              <div className="relative h-full w-full items-center overflow-hidden  rounded-xl">
                <Image
                  src="/assets/img/children.jpg"
                  fill
                  alt="Testimonial"
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className=" flex  items-center font-medium text-white">
              Children
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="h-28 w-44 rounded-2xl border-4 border-blue-300 p-0.5">
              <div className="relative h-full w-full items-center overflow-hidden  rounded-xl">
                <Image
                  src="/assets/img/animal.jpeg"
                  fill
                  alt="Testimonial"
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className=" flex  items-center font-medium text-white">
              Animal
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <div className="h-28 w-44 rounded-2xl border-4 border-blue-300 p-0.5">
              <div className="relative h-full w-full items-center overflow-hidden  rounded-xl">
                <Image
                  src="/assets/img/memorial.webp"
                  fill
                  alt="Testimonial"
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className=" flex  items-center font-medium text-white">
              Memorial
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col  items-center justify-between  gap-5 bg-[#c7ecff] py-8 lg:flex-row lg:px-64">
        <p className="flex items-center font-semibold ">
          Harmony in Giving Sahayata, Your Bridge to Positive Change.
        </p>

        <button>
          <Link
            href="/create-campaign"
            className=" inline-block items-center rounded border border-transparent  bg-blue-600 p-3 font-medium text-white duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-black "
          >
            Create Campaigns
          </Link>
        </button>
      </div>
      <p className="py-6 text-center font-serif text-xl font-semibold ">
        Join the Urgent Cause
      </p>
      {displayedCampaigns.length !== 0 ? (
        <div className="container flex w-full flex-col">
          <div className=" grid grid-cols-3 items-center justify-center gap-5 p-3 text-black">
            {displayedCampaigns.map(
              ({
                campaignId,
                image,
                title,
                description,
                currentAmount,
                collectedAmount
              }: any) => {
                return (
                  <CamapaignCard
                    key={campaignId}
                    campaignId={campaignId}
                    campaignImageAlt={title}
                    campaignImageURL={image}
                    campaignTitle={title}
                    campaignDescription={description}
                    campaignCurrentAmount={currentAmount}
                    campaignCollectedAmount={collectedAmount}
                  />
                )
              }
            )}
          </div>
          <div className="container flex items-center justify-center py-8 ">
            <button>
              <Link
                href="/campaigns"
                className=" inline-block items-center rounded border border-transparent  bg-blue-600 p-3 font-medium text-white duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-black "
              >
                View more Campaigns
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex h-48 items-center justify-center">
          <Loading />
        </div>
      )}
    </>
  )
}

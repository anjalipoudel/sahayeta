'use client'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

export const Search: React.FC = () => {
  const [campaigns, setCampaigns] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [result, setResult] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const postsPerPage = 4

  const offset = currentPage * postsPerPage
  const paginatedPosts = result.slice(offset, offset + postsPerPage)
  const pageCount = Math.ceil(result.length / postsPerPage)

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected)
  }

  useEffect(() => {
    const filteredCampaigns = campaigns
    setResult(filteredCampaigns)
  }, [campaigns])

  const handleSubmit = (query: string) => {
    const filteredPosts = campaigns?.filter(campaign => {
      const categoryString =
        typeof campaign.category === 'string' ? campaign.category : ''
      const matchCategory = categoryString
        .toLowerCase()
        .includes(query.toLowerCase())
      const matchTitle = campaign.title
        .toLowerCase()
        .includes(query.toLowerCase())
      return matchCategory || matchTitle
    })
    setResult(filteredPosts)
  }

  const handleInputChange = (e: any) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim() === '') {
      setResult(campaigns)
    } else {
      handleSubmit(query)
    }
  }

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

  return (
    <div className="w-full pt-16">
      <div className="container flex w-full items-center justify-center  py-3">
        <input
          type="text"
          placeholder="Search anything related to the Campaign...."
          value={searchQuery}
          onChange={handleInputChange}
          className="w-2/3 rounded bg-[#ECEEFF]  p-4 text-sm placeholder-gray-500 outline-none placeholder:flex placeholder:items-center placeholder:justify-center placeholder:text-center"
        />
      </div>
      <div className=" flex  flex-col items-center justify-center">
        <div className="container my-3 flex items-center justify-center bg-blue-700 p-4 text-base text-white ">
          Total Created Campaigns ( {result?.length} )
        </div>

        {paginatedPosts.map(campaign => (
          <div
            className="container my-2 gap-5 rounded-2xl bg-white p-5 shadow-2xl"
            key={campaign?.campaignId}
          >
            <div className="justify-between gap-20 p-10 lg:flex">
              <div className="flex w-full flex-col gap-2 lg:w-1/2">
                <button className="inline-block w-36 items-center rounded-full border border-transparent bg-blue-700 font-medium text-white duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-black">
                  <span>{campaign?.status}</span>
                </button>
                <p className="font-poppins text-base font-semibold">
                  {campaign?.title}
                </p>
                <p className="text-xs font-normal text-[#2540C4]">
                  Category: {campaign?.category?.name}
                </p>
                <p className="font-poppins text-sm font-normal text-gray-500">
                  {campaign?.description}
                </p>
                <div className="text-xs font-semibold">
                  Written by {campaign?.createdBy?.name}
                </div>
              </div>
              <div className="relative flex h-auto w-96 flex-col justify-center gap-2 lg:items-center">
                <div>
                  <Image
                    src={campaign?.image}
                    alt="campaign image"
                    fill
                    className="flex w-96 rounded-2xl bg-slate-400 p-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-28 px-12">
              <button>
                <Link
                  href={'/campaigns/' + campaign.campaignId}
                  className="inline-block w-28 items-center rounded border border-transparent  bg-blue-600 p-2 font-medium text-white duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-black "
                >
                  View
                </Link>
              </button>
              <button>
                <Link
                  href="/create-campaign"
                  className=" inline-block w-28 items-center rounded border border-transparent  bg-blue-600 p-2 font-medium text-white duration-300 hover:border hover:border-blue-400 hover:bg-transparent hover:text-black "
                >
                  Donate
                </Link>
              </button>
            </div>
          </div>
        ))}

        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
          containerClassName={'pagination flex justify-center mt-4'}
          pageClassName={
            'bg-blue-700 text-white px-4 py-2 mr-2 rounded-md cursor-pointer '
          }
          activeClassName={'bg-blue-700'}
          previousClassName={
            'border border-blue-700 text-[#546DEA] px-4 py-2 mr-2 rounded-md cursor-pointer'
          }
          nextClassName={
            'border border-blue-700 text-[#546DEA]   px-4 py-2 mr-2 rounded-md cursor-pointer'
          }
          breakClassName={
            'bg-white text-white px-4 py-2 mr-2 rounded-md cursor-pointer'
          }
        />
      </div>
    </div>
  )
}

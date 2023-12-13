import { FaBriefcaseMedical, FaHandshake, FaMonument } from 'react-icons/fa'
import { FaChildren } from 'react-icons/fa6'
import { GiBookCover } from 'react-icons/gi'
import { IoMdPaw } from 'react-icons/io'

export const CausesSection = () => {
    return (
        <div className="pb-32 mb-10">
            <div className="flex flex-col py-14">
                <h1 className="flex justify-center text-black font-bold text-4xl">
                    Causes you can raises funds for
                </h1>
                <p className="flex justify-center text-gray-400 font-semibold py-4">
                    social cause, personal cause - you can count on us for the project
                    that you want to raise funds for.
                </p>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2  ">
                <div className="flex flex-col bg-blue-500 shadow-2xl items-center justify-center font-semibold text-white px-6 py-4 w-48 h-40 rounded-lg hover:bg-transparent hover:border-blue-400 hover:text-blue-500 duration-300 hover:border border border-transparent">
                    <div className="h-10 ">
                        <FaBriefcaseMedical size={40} />
                    </div>
                    <h1>Medical</h1>
                </div>
                <div className="flex flex-col justify-center items-center shadow-2xl font-semibold text-white bg-blue-500 px-6 py-4 w-48 h-40 rounded-lg hover:bg-transparent hover:border-blue-400 hover:text-blue-500 duration-300 hover:border border border-transparent">
                    <FaChildren size={40} />
                    <h1>Children</h1>
                </div>
                <div className="flex flex-col justify-center items-center shadow-2xl font-semibold text-white  bg-blue-500 px-6 py-4 w-48 h-40 rounded-lg hover:bg-transparent hover:border-blue-400 hover:text-blue-500 duration-300 hover:border border border-transparent">
                    <GiBookCover size={40} />
                    <h1>Education</h1>
                </div>
                <div className="flex flex-col justify-center items-center shadow-2xl font-semibold text-white  bg-blue-500 px-6 py-4 w-48 h-40 rounded-lg hover:bg-transparent hover:border-blue-400 hover:text-blue-500 duration-300 hover:border border border-transparent">
                    <IoMdPaw size={40} />
                    <h1>Animal</h1>
                </div>
                <div className="flex flex-col justify-center items-center shadow-2xl font-semibold text-white  bg-blue-500 px-6 py-4 w-48 h-40 rounded-lg hover:bg-transparent hover:border-blue-400 hover:text-blue-500 duration-300 hover:border border border-transparent">
                    <FaMonument size={40} />
                    <h1>Memorial</h1>
                </div>
                <div className="flex flex-col justify-center items-center shadow-2xl font-semibold text-white  bg-blue-500 px-6 py-4 w-48 h-40 rounded-lg hover:bg-transparent hover:border-blue-400 hover:text-blue-500 duration-300 hover:border border border-transparent">
                    <FaHandshake size={40} />
                    <h1>Others</h1>
                </div>
            </div>
        </div>
    )
}
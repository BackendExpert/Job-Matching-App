import React from 'react'
import { BsBriefcaseFill, BsPower } from 'react-icons/bs'

const DashNav = () => {
  return (
    <div className="pt-6">
        <div className='bg-white py-4 px-8 rounded shadow-md'>
            <div className="flex justify-between">
                <div className="flex">
                    <BsBriefcaseFill className='h-8 w-auto text-purple-500'/>
                    <h1 className="text-xl pt-1 pl-2 font-semibold text-purple-400">Job Finder</h1>
                </div>
                <div className="md:block hidden">
                    <div className="flex">
                        <BsBriefcaseFill className='h-8 w-auto text-purple-500'/>
                        <h1 className="text-xl pt-1 pl-2 font-semibold text-orange-400">Job Finder</h1>
                    </div>
                </div>
                <div className="flex">
                    <BsPower className='h-4 w-auto text-red-500 mt-2'/>
                    <h1 className="pt-1 text-red-400 md:block hidden">Logout</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashNav
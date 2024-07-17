import React from 'react'
import { BsBellFill, BsBriefcaseFill, BsPower } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const DashNav = () => {
    const navigate = useNavigate()    
    const logout = () => {
        localStorage.clear()
        navigate('/')
    }
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
                        <BsBellFill className='h-6 w-auto text-purple-500 pt-1 cursor-pointer'/>
                    </div>
                </div>
                <div className="flex cursor-pointer">
                    <BsPower className='h-4 w-auto text-red-500 mt-2'/>
                    <h1 className="pt-1 text-red-400 md:block hidden" onClick={logout}>Logout</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashNav
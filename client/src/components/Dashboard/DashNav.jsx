import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsBellFill, BsBriefcaseFill, BsBuilding, BsBuildingFill, BsCaretDownFill, BsCaretUpFill, BsMenuDown, BsPersonFill, BsPower } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"

const DashNav = () => {
    const navigate = useNavigate() 
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");
   
    const logout = () => {
        localStorage.clear()
        navigate('/')
    }    

    // get login user data
    const [JobFinderData, SetJobFinderData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/jobfinder/GetJFData/${EmailUser}`)
        .then(res => SetJobFinderData(res.data.Result))
        .catch(err => console.log(err))
    }, [])

    const [DropDown, SetDropDown] = useState(false)

    const headleDropDown = () => {
        SetDropDown(!DropDown)
    }

    // view Comapany
    const []

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
                <div className="flex cursor-pointer" onClick={headleDropDown}>
                    <div className="flex">
                        {
                            (() => {
                                if(JobFinderData.image !== ''){
                                    return (
                                        <img src={'http://localhost:5000/' + JobFinderData.image} alt="ssssssssssssss" className="h-8 w-auto rounded-full" />
                                    )
                                }
                                else{
                                    return(
                                        <img src="https://cdn-icons-png.flaticon.com/128/10813/10813372.png" alt="" className='h-8 w-auto rounded-full' />
                                    )
                                }
                            })()
                        }
                        {
                            DropDown === false ? 
                                <BsCaretDownFill className='h-5 w-auto mt-2 ml-2 text-purple-500'/>
                            :
                                <BsCaretUpFill className='h-5 w-auto mt-2 ml-2 text-purple-500'/>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className={`${DropDown ? 'block' : 'hidden'} fixed  max-w-48 md:right-24 right-6 bg-white border border-purple-500 text-purple-600 py-2 px-4 rounded mt-2`}>
            <div className="flex py-2 cursor-pointer">                
                <BsPersonFill className='h-5 w-auto text-purple-500'/>
                <p className="ml-2">My Profile</p>
            </div>
            <div className="flex pt-2 pb-4 cursor-pointer">                
                <BsBuildingFill className='h-5 w-auto text-purple-500'/>
                <p className="ml-2">My Company</p>
            </div>

            <div className="flex py-2 cursor-pointer" onClick={logout}>                
                <BsPower className='h-5 w-auto text-purple-500'/>
                <p className="ml-2">Logout</p>
            </div>
        </div>
        
    </div>
  )
}

export default DashNav
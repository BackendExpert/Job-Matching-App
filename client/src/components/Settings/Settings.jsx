import React, { useEffect, useState } from 'react'
import MyImg from '../../assets/file.jpg'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { BsImage, BsPen } from 'react-icons/bs';
import axios from 'axios';

const Settings = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    // get login user data
    const [JobFinderData, SetJobFinderData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/jobfinder/GetJFData/${EmailUser}`)
        .then(res => SetJobFinderData(res.data.Result))
        .catch(err => console.log(err))
    }, [])

    const [UpdateDataBtn, SetUpdateDataBtn] = useState(false)
    const [UpdateImgBtn, SetUpdateImgBtn] = useState(false)
    
    


    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='bg-white py-4 px-6 shadow-md rounded'>
                <h1 className="text-2xl font-semibold text-gray-500 pt-2">Settings</h1>
                <hr  className='py-2'/>
        
                <div className="my-4">
                    <h1 className="">Personal Data</h1>
                    <hr className='pb-4'/>
                    <div className="md:flex">
                        {
                            (() => {
                                if(JobFinderData.image === ''){
                                    return (
                                        <img src="https://cdn-icons-png.flaticon.com/128/847/847969.png" alt="" className="h-44 w-auto rounded-xl" />
                                    )
                                }
                                else{
                                    return (
                                        <div className="">Image have</div>
                                    )
                                }
                            })()
                        }
                        
                        <div className="ml-4 md:mt-0 mt-4">
                            <table>
                                <tr>
                                    <th><p className="text-gray-600 text-left">Username</p></th>
                                    <td className='pl-4'><p className="">: {JobFinderData.username}</p></td>
                                </tr>
                                <tr>
                                    <th><p className="text-gray-600 text-left">Email</p></th>
                                    <td className='pl-4'><p className="">: {JobFinderData.email}</p></td>
                                </tr>
                                <tr>
                                    <th><p className="text-gray-600 text-left">Job</p></th>
                                    <td className='pl-4'><p className="">: {JobFinderData.job}</p></td>
                                </tr>
                                <tr>
                                    <th><p className="text-gray-600 text-left">Mobile</p></th>
                                    <td className='pl-4'><p className="">: {JobFinderData.mobile}</p></td>
                                </tr>
                                <tr>
                                    <th><p className="text-gray-600 text-left">Address</p></th>
                                    <td className='pl-4'><p className="">: {JobFinderData.Address}</p></td>
                                </tr>
                                <tr>
                                    <th><p className="text-gray-600 text-left">Date of Birth</p></th>
                                    <td className='pl-4'><p className="">: {JobFinderData.dob}</p></td>
                                </tr>
                            </table>
                            <div className="flex">
                                <a href="#UpdateData" className='pl-2' onClick={() => UpdateMyData(EmailUser)}>
                                    <button className='my-1 flex bg-blue-500 text-white py-2 px-4 rounded shadow-md'>
                                        <BsPen />
                                        <span className='pl-2'>Update</span>
                                    </button>
                                </a>
                                <a href="#UpdateImg" className='pl-2' onClick={() => UpdateMyImg(EmailUser)}>
                                    <button className='my-1 flex bg-blue-500 text-white py-2 px-4 rounded shadow-md'>
                                        <BsImage />
                                        <span className='pl-2'>Update</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="" id="UpdateData">
                            <h1 className="text-xl text-gray-500">Update Personal Data</h1>
                        </div>
                        <div className="" id="UpdateImg">
                            <h1 className="text-xl text-gray-500">Update Image</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        })
    }
}

export default Settings
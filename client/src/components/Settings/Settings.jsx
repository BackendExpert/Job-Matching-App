import React, { useEffect, useState } from 'react'
import MyImg from '../../assets/file.jpg'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { BsImage, BsPen, BsXCircleFill } from 'react-icons/bs';
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
        console.log(JobFinderData.address)
    }, [])

    const [UpdateDataBtn, SetUpdateDataBtn] = useState(false)
    const [UpdateImgBtn, SetUpdateImgBtn] = useState(false)
    
    const UpdateMyData = (id) => {
        SetUpdateDataBtn(true)
        SetUpdateImgBtn(false)
    }

    const UpdateMyImg = (id) => {
        SetUpdateDataBtn(false)
        SetUpdateImgBtn(true)
    }

    const headleClose = () => {
        SetUpdateDataBtn(false)
        SetUpdateImgBtn(false)
    }

    // update jobfinder data
    const [jobFindeUpdate, SetjobFindeUpdate] = useState({
        fname: '',
        lname: '',
        job: '',
        mobile: '',
        address: '',
        dob: '',
    })

    const healeJFUpdate = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`http://localhost:5000/jobfinder/UpdateJFData/${EmailUser}`, jobFindeUpdate)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Personal Data Updated Successfull")
                    window.location.reload()
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }


    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='bg-white py-4 px-6 shadow-md rounded'>
                <h1 className="text-2xl font-semibold text-purple-500 pt-2">Settings</h1>
                <hr  className='py-2'/>
        
                <div className="my-4">
                    <h1 className="text-purple-500">Personal Data</h1>
                    <hr className='pb-4'/>
                    <div className="md:flex">
                        {
                            (() => {
                                if(JobFinderData.image === ''){
                                    return (
                                        <img src="https://cdn-icons-png.flaticon.com/128/10813/10813372.png" alt="" className="h-44 w-auto rounded-xl" />
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
                                    <th><p className="text-gray-600 text-left">Name</p></th>
                                    <td className='pl-4'><p className="">:  {JobFinderData.fname} {JobFinderData.lname}</p></td>
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
                                    <td className='pl-4'><p className="">: {JobFinderData.address}</p></td>
                                </tr>
                                <tr>
                                    <th><p className="text-gray-600 text-left">Date of Birth</p></th>
                                    <td className='pl-4'><p className="">: {JobFinderData.dob}</p></td>
                                </tr>
                            </table>
                            <div className="flex">
                                <a href="#UpdateData" className='pl-2' onClick={() => UpdateMyData(EmailUser)}>
                                    <button className='my-1 flex bg-purple-500 text-white py-2 px-4 rounded shadow-md'>
                                        <BsPen />
                                        <span className='pl-2'>Update</span>
                                    </button>
                                </a>
                                <a href="#UpdateImg" className='pl-2' onClick={() => UpdateMyImg(EmailUser)}>
                                    <button className='my-1 flex bg-purple-500 text-white py-2 px-4 rounded shadow-md'>
                                        <BsImage />
                                        <span className='pl-2'>Update</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        {
                            (() => {
                                if(UpdateDataBtn === true && UpdateImgBtn == false){
                                    return (
                                        <div className="" id="UpdateData">
                                            <hr className='mt-2'/>
                                            <div className="flex justify-between pt-2">
                                                <h1 className="text-purple-500">Update Personal Data</h1>
                                                <div className="cursor-pointer text-purple-500" onClick={headleClose}>
                                                    <BsXCircleFill className='h-6 w-auto'/>
                                                </div>
                                            </div>
                                            
                                            <div className="my-2">
                                                <form method="post" onSubmit={healeJFUpdate}>
                                                    <div className="md:grid grid-cols-2 gap-4">
                                                        <div className="">
                                                            <input type="text" name="" id="" className="md:my-0 my-2 h-12 w-full bg-gray-200 pl-2 rounded" placeholder='Enter First Name' 
                                                            onChange={e => SetjobFindeUpdate({...jobFindeUpdate, fname:e.target.value})}/>
                                                        </div>
                                                        <div className="">
                                                            <input type="text" name="" id="" className="md:my-0 my-2 h-12 w-full bg-gray-200 pl-2 rounded" placeholder='Enter Last Name' 
                                                            onChange={e => SetjobFindeUpdate({...jobFindeUpdate, lname:e.target.value})}/>
                                                        </div>
                                                        <div className="">
                                                            <input type="text" name="" id="" className="md:my-0 my-2 h-12 w-full bg-gray-200 pl-2 rounded" placeholder='Enter Job' 
                                                            onChange={e => SetjobFindeUpdate({...jobFindeUpdate, job:e.target.value})}/>
                                                        </div>
                                                        <div className="">
                                                            <input type="text" name="" id="" className="md:my-0 my-2 h-12 w-full bg-gray-200 pl-2 rounded" placeholder='Enter Mobile Number' 
                                                            onChange={e => SetjobFindeUpdate({...jobFindeUpdate, mobile:e.target.value})}/>
                                                        </div>
                                                        <div className="">
                                                            <input type="text" name="" id="" className="md:my-0 my-2 h-12 w-full bg-gray-200 pl-2 rounded" placeholder='Enter Address' 
                                                            onChange={e => SetjobFindeUpdate({...jobFindeUpdate, address:e.target.value})}/>
                                                        </div>
                                                        {
                                                            (() => {
                                                                if(JobFinderData.dob === null){
                                                                    return (
                                                                        <div className="">
                                                                            <input type="date" name="" id="" className="md:my-0 my-2 h-12 w-full bg-gray-200 pl-2 rounded" placeholder='Enter Job' 
                                                                            onChange={e => SetjobFindeUpdate({...jobFindeUpdate, dob:e.target.value})}/>
                                                                            <p className="md:mb-0 mb-2">(Date of Birth)</p>
                                                                        </div>
                                                                    )
                                                                }
                                                                else{
                                                                    return (
                                                                        <div className=""></div>
                                                                    )
                                                                }
                                                            })()
                                                        }                                                        
                                                    </div>
                                                    <div className="mt-2">
                                                        <button type="submit" className='bg-purple-500 text-white py-2 px-4 rounded shadow-md'>Update Date</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )
                                }
                                else if(UpdateDataBtn === false && UpdateImgBtn == true){
                                    return (
                                        <div className="" id="UpdateImg">
                                            <hr className='mt-2'/>
                                            <div className="flex justify-between pt-2">
                                                <h1 className="text-purple-500">Update Image</h1>
                                                <div className="cursor-pointer text-purple-500" onClick={headleClose}>
                                                    <BsXCircleFill className='h-6 w-auto'/>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })()
                        }
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
import React, { useEffect, useState } from 'react'
import MyImg from '../../assets/file.jpg'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { BsBackpack2Fill, BsBuildingsFill, BsFileEarmarkPersonFill, BsImage, BsPen, BsPersonLinesFill, BsXCircleFill } from 'react-icons/bs';
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

    console.log(JobFinderData)

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

    // upload profile Image
    const [ProfileImg, SetProfileImg] = useState({
        image: ''
    })

    const headleUploadProfileImg = (e) => {
        e.preventDefault();
        const ImageData = new FormData();

        ImageData.append("image", ProfileImg.image);
        
        try{
            const res = axios.post(`http://localhost:5000/jobfinder/UploadProfileImg/${EmailUser}`, ImageData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Profile Image Updated Successfull")
                    window.location.reload()
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    // add cv
    const [AddCV, SetAddCV] = useState({
        myCV: ''
    })

    const headleAddCV = async (e) => {
        e.preventDefault();

        const CVData = new FormData()

        CVData.append('myCV', AddCV.myCV);

        try{
            const res = await axios.post(`http://localhost:5000/jobfinder/AddCV/${EmailUser}`, CVData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("CV Updated Successful")
                    window.location.reload()
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
        
    }

    // open model add education and exprence
    const [EduModel, SetEduModel] = useState(false)
    const [WorkModel, SetWorkModel] = useState(false)

    const OpenEduMode = () => {
        SetEduModel(true)
        SetWorkModel(false)
    }   
    const OpenWorkMode = () => {
        SetWorkModel(true)
        SetEduModel(false)
    }   

    const ModelClose = () => {
        SetEduModel(false)
        SetWorkModel(false)
    }

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className="">
                <div className='bg-white py-4 px-6 shadow-md rounded'>
                    <h1 className="text-2xl font-semibold text-purple-500 pt-2">Settings</h1>
                    <hr  className='py-2'/>
            
                    <div className="my-4">
                        <h1 className="text-purple-500 flex">
                            <BsPersonLinesFill className='h-6 w-auto pr-2'/>
                            Personal Data
                        </h1>
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
                                            <img src={'http://localhost:5000/' + JobFinderData.image} alt="ssssssssssssss" className="h-44 w-auto rounded-xl" />
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
                                                                <input type="text" name="" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" placeholder='Enter First Name' 
                                                                onChange={e => SetjobFindeUpdate({...jobFindeUpdate, fname:e.target.value})}/>
                                                            </div>
                                                            <div className="">
                                                                <input type="text" name="" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" placeholder='Enter Last Name' 
                                                                onChange={e => SetjobFindeUpdate({...jobFindeUpdate, lname:e.target.value})}/>
                                                            </div>
                                                            <div className="">
                                                                <input type="text" name="" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" placeholder='Enter Job' 
                                                                onChange={e => SetjobFindeUpdate({...jobFindeUpdate, job:e.target.value})}/>
                                                            </div>
                                                            <div className="">
                                                                <input type="text" name="" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" placeholder='Enter Mobile Number' 
                                                                onChange={e => SetjobFindeUpdate({...jobFindeUpdate, mobile:e.target.value})}/>
                                                            </div>
                                                            <div className="">
                                                                <input type="text" name="" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" placeholder='Enter Address' 
                                                                onChange={e => SetjobFindeUpdate({...jobFindeUpdate, address:e.target.value})}/>
                                                            </div>
                                                            {
                                                                (() => {
                                                                    if(JobFinderData.dob === null){
                                                                        return (
                                                                            <div className="">
                                                                                <input type="date" name="" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" placeholder='Enter Job' 
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
                                                <div className="my-4">

                                                    <form method="post" onSubmit={headleUploadProfileImg}>
                                                        <input type="file" name="image" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" required
                                                        onChange={e => SetProfileImg({...ProfileImg, image:e.target.files[0]})}/>
                                                        <div className="my-2">
                                                            <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded shadow-md">Update Profile Image</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        )
                                    }
                                })()
                            }
                        </div>
                    </div>
                </div>
                <div className="bg-white my-4 py-4 px-4 rounded shadow-md">
                    <div className="text-purple-500 pl-2 flex pb-2">
                        <BsFileEarmarkPersonFill className='h-6 w-auto pr-2'/>
                        My CV
                    </div>
                    <hr />
                    <div className="">                        
                    {
                        (() => {
                            if(JobFinderData.cv === ""){
                                return (
                                    <div className="my-2">
                                        <p className="">You not Added any CV</p>
                                     </div>
                                )   
                            }
                             else{
                                return (
                                    <div className="mt-2 mb-4">
                                        <p className="">You Already Added CV</p>
                                        <a href={'http://localhost:5000/' + JobFinderData.cv} target='_blank'>
                                            <button className="bg-purple-500 text-white rounded py-1 px-4">Download CV</button>
                                        </a>
                                    </div>
                                )
                             }
                        })()
                    }
                        <form method="post" onSubmit={headleAddCV}>
                            <input type="file" name="myCV" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" required 
                            onChange={e => SetAddCV({...AddCV, myCV:e.target.files[0]})}/>

                            <div className="mt-2">
                                <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded">Update CV</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="md:grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded shadow-md md:my-0 my-4">
                        <div className="flex justify-between">
                            <div className="text-purple-500 pl-2 flex pb-2">
                                <BsBackpack2Fill className='h-6 w-auto pr-2'/>
                                Education
                            </div>
                            <div className="text-purple-500 pl-2 flex pb-2">
                                <button onClick={OpenEduMode} className="bg-purple-500 text-white py-1 px-4 rounded shadow-md">Add Education</button>
                            </div>                        
                        </div>  
                        <hr />
                        <div className={`md:max-w-[50%] max-w-[80%] fixed top-36 md:right-40 right-[-4px] bg-purple-800 text-white p-6 rounded-lg transition-transform duration-300 ${EduModel ? 'transform translate-x-0 mr-8' : 'transform translate-x-full mr-[-500px]'}`}>
                            <div className="flex justify-between">
                                <h1 className="text-xl font-semibold flex mb-4">
                                    <BsBackpack2Fill className='h-6 w-auto mr-2'/>
                                    Add New Education
                                </h1>
                                <p className="" onClick={ModelClose}>
                                    <BsXCircleFill className='h-6 w-auto pt-1'/>
                                </p>
                            </div>

                            <div className="">
                                <div className="bg-white p-4">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded shadow-md md:my-0 my-4">
                        <div className="flex justify-between">
                            <div className="text-purple-500 pl-2 flex pb-2">
                                <BsBuildingsFill className='h-6 w-auto pr-2'/>
                                Work Experience
                            </div>
                            <div className="text-purple-500 pl-2 flex pb-2">
                                <button onClick={OpenWorkMode} className="bg-purple-500 text-white py-1 px-4 rounded shadow-md">Add Experience</button>
                            </div>                        
                        </div>  
                        <hr />
                        <div className={`md:max-w-[50%] max-w-[80%] fixed top-36 md:right-40 right-[-4px] bg-purple-800 text-white p-6 rounded-lg transition-transform duration-300 ${WorkModel ? 'transform translate-x-0 mr-8' : 'transform translate-x-full mr-[-500px]'}`}>
                            <div className="flex justify-between">
                                <h1 className="text-xl font-semibold flex mb-4">
                                    <BsBuildingsFill className='h-6 w-auto mr-2'/>
                                    Add Work Experience
                                </h1>
                                <p className="" onClick={ModelClose}>
                                    <BsXCircleFill className='h-6 w-auto pt-1'/>
                                </p>
                            </div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repudiandae hic, eum consequuntur officiis vel alias error ea voluptates expedita magnam, exercitationem, dolor commodi aut ipsam in molestiae cumque nulla.
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
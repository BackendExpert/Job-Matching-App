import React, { useEffect, useState } from 'react'
import  secureLocalStorage  from  "react-secure-storage"
import { Link, useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import { BsBackpack2, BsBagCheckFill, BsBriefcaseFill, BsBuildingFill, BsUiChecks, BsXCircle, BsXCircleFill } from 'react-icons/bs';
import JobPosterImg from '../../assets/programmer.png'
import JobFind from '../../assets/lap.png'
import axios from 'axios';

const DashHome = () => {
  const navigate = useNavigate()
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  const JobFinderDashData = [
    {id: 1, name: "Jobs", icon: <BsBriefcaseFill />, value: <CountUp end={20}/>, bgColor: 'bg-purple-500'},
    {id: 2, name: "Jobs Applied", icon: <BsBagCheckFill />, value: <CountUp end={20}/>, bgColor: 'bg-purple-500'},
    {id: 3, name: "Job Match", icon: <BsUiChecks />, value: <CountUp end={20}/>, bgColor: 'bg-purple-500'},
    {id: 4, name: "Companies", icon: <BsBuildingFill />, value: <CountUp end={20}/>, bgColor: 'bg-purple-500'},
  ]

  const [StartCompanyClicked, SetStartCompanyClicked] = useState(false)

  const headleStartCompany = () => {
    SetStartCompanyClicked(true)
  }

  const headleCloseComp = () => {
    SetStartCompanyClicked(false)
  }

  const [CompanyData, SetCompanyData] = useState({
    comName: '',
    comEmail: '',
    comAddress: '',
    comMobile: ''
  })

  const headleCreateCom = async(e) => {
    e.preventDefault();

    try{
      const res = await axios.post(`http://localhost:5000/company/CreateCompany/${EmailUser}`, CompanyData)
      .then(res => {
        if(res.data.Status === "Success"){
          alert("Company Created Successfull")
          window.location.reload()
        } 
        else{
          alert(res.data.Error)
        }
      })
    }
    catch(err) {
      console.log(err)
    }
  }

  // check user have comapany
  const [HaveCompany, SetHaveCompany] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/company/UserCompany/${EmailUser}`)
    .then(res => SetHaveCompany(res.data.Result))
    .catch(err => console.log(err))
  }, [])
  
  if(RoleUser !== null && EmailUser !== null){
    return (
      <div className="">
        <div className='bg-white py-4 px-6 shadow-md rounded'>
          <h1 className="text-2xl font-semibold text-purple-500 pt-2">Dashboard</h1>
          <hr  className='py-2'/>
          <div className="md:grid grid-cols-4 gap-4">
            {
              JobFinderDashData.map((jobdata, index) => {
                return (
                  <div key={index} className={`${jobdata.bgColor} py-8 px-2 rounded text-white shadow-md md:my-0 my-2`}>
                    <div className="flex justify-between pr-4">
                      <div className="pl-4">
                        <p className="text-3xl">{jobdata.value}</p>
                        <p className="">{jobdata.name}</p>
                      </div>
                      <div className="">
                        <p className="text-4xl">{jobdata.icon}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-2">
          <div className="bg-white mt-4 mb-2 p-4 shadow-md rounded">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque officia minus perferendis assumenda id animi eligendi repellat accusamus veritatis fuga dolor, ipsum corrupti suscipit ratione numquam quibusdam eaque sit aspernatur!
          </div>
          <div className="bg-white mt-4 mb-2 p-4 shadow-md rounded">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque officia minus perferendis assumenda id animi eligendi repellat accusamus veritatis fuga dolor, ipsum corrupti suscipit ratione numquam quibusdam eaque sit aspernatur!
          </div>
            {
              (() => {
                if(HaveCompany.Owner === EmailUser){
                  return (
                    <div className=""></div>
                  )
                }
                else{
                  return (
                    <div className="bg-white px-2 shadow-md rounded">
                      <div className="md:flex md:text-left text-center md:pb-0 pb-4">
                        <div class="md:hidden w-full flex justify-center">
                          <img src={JobPosterImg} alt="" className='h-64 w-auto'/>
                        </div>
                        <img src={JobPosterImg} alt="" className='h-[50%] w-auto md:block hidden'/>
                        <div className="">
                          <h1 className="text-purple-500 text-2xl font-semibold md:pt-10 pt-2">Be a Poster</h1>
                          <p className="text-purple-500">Start Your own Company here</p>
                          <div className="mt-4">
                            <button className='bg-purple-500 text-white py-2 px-4 rounded' onClick={headleStartCompany}>Start Company</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              })
            }
          {
            (() => {
              if(StartCompanyClicked === true){
                return (
                  <div className="bg-white p-4 rounded shadow-md">
                    <div className="flex justify-between">
                      <h1 className="text-gray-500 text-xl font-semibold">Start Company</h1>
                      <BsXCircleFill className='h-6 w-auto text-purple-500 cursor-pointer' onClick={headleCloseComp}/>
                    </div>
                    <hr />
                    <form method="post" onSubmit={headleCreateCom}>
                      <div className="md:grid grid-cols-2 gap-4">
                        <input type="text" name="" id="" className="bg-purple-200 placeholder-purple pl-2 rounded h-12 rounded my-2 w-full text-purple-500" required placeholder='Company Name'
                        onChange={e => SetCompanyData({...CompanyData, comName:e.target.value})}/>
                        
                        <input type="email" name="" id="" className="bg-purple-200 placeholder-purple pl-2 rounded h-12 rounded my-2 w-full text-purple-500" required placeholder='Company Email'
                        onChange={e => SetCompanyData({...CompanyData, comEmail:e.target.value})}/>
                        
                      </div>
                      <input type="text" name="" id="" className="bg-purple-200 placeholder-purple pl-2 rounded h-12 rounded my-2 w-full text-purple-500" placeholder='Company Address'
                      onChange={e => SetCompanyData({...CompanyData, comAddress:e.target.value})}/>
                      
                      <div className="md:grid grid-cols-2 gap-4">
                        <input type="text" name="" id="" className="bg-purple-200 placeholder-purple pl-2 rounded h-12 rounded my-2 w-full text-purple-500" required placeholder='Company Mobile'
                        onChange={e => SetCompanyData({...CompanyData, comMobile:e.target.value})}/>
                        
                        <button type="submit" className="bg-purple-500 text-white h-12 px-4 my-2 rounded">Start Company</button>
                      </div>
                    </form>
                  </div>
                )
              }
            })()
          }
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

export default DashHome
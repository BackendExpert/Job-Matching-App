import React, { useEffect } from 'react'
import  secureLocalStorage  from  "react-secure-storage"
import { Link, useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import { BsBackpack2, BsBagCheckFill, BsBriefcaseFill, BsBuildingFill, BsUiChecks } from 'react-icons/bs';
import JobPosterImg from '../../assets/programmer.png'

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
        <div className="md:grid grid-cols-2 gap-4">
          <div className="bg-white py-2 px-2 my-4 shadow-md rounded">
            <div className="md:flex md:text-left text-center md:pb-0 pb-4">
              <div class="md:hidden w-full flex justify-center">
                <img src={JobPosterImg} alt="" className='h-64 w-auto'/>
              </div>
              <img src={JobPosterImg} alt="" className='h-[50%] w-auto md:block hidden'/>
              <div className="">
                <h1 className="text-purple-500 text-2xl font-semibold md:pt-10 pt-2">Be a Poster</h1>
                <p className="text-purple-500">Start Your own Company here</p>
                <div className="mt-4">
                  <button className='bg-purple-500 text-white py-2 px-4 rounded '>Start Company</button>
                </div>
              </div>
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

export default DashHome
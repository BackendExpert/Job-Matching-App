import React, { useEffect } from 'react'
import  secureLocalStorage  from  "react-secure-storage"
import { Link, useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import { BsBackpack2, BsBagCheckFill, BsBriefcaseFill, BsBuildingFill, BsUiChecks } from 'react-icons/bs';

const DashHome = () => {
  const navigate = useNavigate()
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  const JobFinderDashData = [
    {id: 1, name: "Jobs", icon: <BsBriefcaseFill />, value: <CountUp end={20}/>, bgColor: 'bg-green-500'},
    {id: 2, name: "Jobs Applied", icon: <BsBagCheckFill />, value: <CountUp end={20}/>, bgColor: 'bg-orange-500'},
    {id: 3, name: "Job Match", icon: <BsUiChecks />, value: <CountUp end={20}/>, bgColor: 'bg-purple-500'},
    {id: 4, name: "Companies", icon: <BsBuildingFill />, value: <CountUp end={20}/>, bgColor: 'bg-blue-500'},
  ]
  
  if(RoleUser !== null && EmailUser !== null){
    return (
      <div className='bg-white py-4 px-6 shadow-md rounded'>
        <h1 className="text-2xl font-semibold text-gray-500 pt-2">Dashboard</h1>
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
import React, { useEffect } from 'react'
import  secureLocalStorage  from  "react-secure-storage"
import { Link, useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import { BsBackpack2 } from 'react-icons/bs';

const DashHome = () => {
  const navigate = useNavigate()
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  const JobFinderDashData = [
    {id: 1, name: "Jobs", icon: <BsBackpack2 />, value: <CountUp end={20}/>, bgColor: 'bg-green-500'},
    {id: 2, name: "Jobs", icon: <BsBackpack2 />, value: <CountUp end={20}/>, bgColor: 'bg-orange-500'},
    {id: 3, name: "Jobs", icon: <BsBackpack2 />, value: <CountUp end={20}/>, bgColor: 'bg-purple-500'},
    {id: 4, name: "Jobs", icon: <BsBackpack2 />, value: <CountUp end={20}/>, bgColor: 'bg-blue-500'},
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
                <div key={index} className={`${jobdata.bgColor} py-8 px-2 rounded text-white`}>
                  <div className="flex">
                    <div className="">
                      {jobdata.icon}
                    </div>
                    <div className="">
                      <p className="">{jobdata.value}</p>
                      <p className="">{jobdata.name}</p>
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
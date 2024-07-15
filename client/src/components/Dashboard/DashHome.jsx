import React, { useEffect } from 'react'
import  secureLocalStorage  from  "react-secure-storage"
import { Link, useNavigate } from 'react-router-dom';

const DashHome = () => {
  const navigate = useNavigate()
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");
  
  if(RoleUser === null && EmailUser === null){
    return (
      <div className='bg-white py-4 px-6 shadow-md rounded'>
  
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
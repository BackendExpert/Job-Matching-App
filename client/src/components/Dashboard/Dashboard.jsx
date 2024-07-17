import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { Outlet } from 'react-router-dom';
import DashNav from './DashNav';
import DashSide from './DashSide';
import DashFooter from './DashFooter';

const Dashboard = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className=" w-full min-h-screen md:px-[5%] px-4">
                <DashNav />        
                <div className="md:flex">
                <div className="circlePosition w-[990px] h-[700px] bg-purple-900 rounded-[100%] fixed  z-[-10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[600px]"></div>
                    <div className="">
                        <DashSide />                        
                    </div>
                    <div className="my-4 md:ml-4 w-full h-auto">                  
                        <Outlet />
                        <button className="fixed bottom-6 right-8 p-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                            Click Me
                        </button>
                    </div>                    
                </div>
                <DashFooter />                
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

export default Dashboard
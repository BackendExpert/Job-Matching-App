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
            <div className="bg-gradient-to-br from-gray-300 to-gray-200 w-full min-h-screen md:px-32 px-4">
                <DashNav />
        
                <div className="md:flex">
                    <div className="">
                        <DashSide />                        
                    </div>
                    <div className="my-4 md:ml-4 w-full h-auto">
                        <Outlet />
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
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { BsBackpack, BsBriefcase, BsClipboard2Data, BsGearFill, BsList, BsPersonGear, BsSpeedometer2, BsX } from "react-icons/bs";

const DashSide = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");


    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const SideMenu = [
        {id: 1, name: "Dashboard", link: 'Home', icon: <BsSpeedometer2 />},
        {id: 2, name: "Job Applied", link: 'Jobs', icon: <BsBriefcase />},
        {id: 3, name: "Skills", link: 'Skills', icon: <BsPersonGear />},
        {id: 4, name: "Projects", link: 'Projects', icon: <BsClipboard2Data />},
        {id: 5, name: "Settings", link: 'Settings', icon: <BsGearFill />},
        {id: 6, name: "Menu 6", link: '#', icon: <BsBackpack />},      
    ]

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className=''>
                <button className="md:hidden fixed top-4 right-4 z-50 bg-gray-600 text-white p-2 rounded font-semibold" onClick={toggleSidebar}>
                    {
                        !isOpen ? <BsList /> : <BsX />
                    }
                </button>
        
                <div className={`rounded shadow-md md:mt-4 py-4 px-4 md:min-w-64 md:max-w-64 bg-white w-full md:w-auto md:min-h-screen md:relative fixed overflow-auto top-0 left-0 h-full w-auto transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
                    <div className="">
                        <div class="w-full flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/847/847969.png" alt="" className='h-32 w-auto rounded-full' />                           
                        </div>
                        <div className="text-center text-gray-500">
                            <h1 className='mt-4 font-semibold text-xl'>Jehan Weerasuriya</h1>
                            <p className="text-sm">Full Stack Developer</p>
                        </div>
                        <hr className='my-2'/>
        
                        <div className="">
                            {
                                SideMenu.map((menu, index) => {
                                    return (
                                        <a href={menu.link}>
                                            <div className="duration-500 py-2 hover:bg-gray-200 my-2 pl-4 rounded text-blue-500 font-semibold" key={index}>
                                                <div className="flex">
                                                    <div className="text-xl pr-2">{menu.icon}</div>
                                                    <p className="">{menu.name}</p>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })
                            }
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
        }, [])
    }
}

export default DashSide
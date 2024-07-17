import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { Outlet } from 'react-router-dom';
import DashNav from './DashNav';
import DashSide from './DashSide';
import DashFooter from './DashFooter';
import { BsChatDotsFill, BsHeadset, BsXCircleFill } from 'react-icons/bs';

const Dashboard = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [chatOpen, SetchatOpen] = useState(false)

    const headleOpenChat = () => {
        SetchatOpen(true)
    }

    const headleCloseChat = () => {
        SetchatOpen(false)
    }
    
    const ChatMenu = [
        {id: 1, name: 'How to Start a Company'},
        {id: 2, name: 'How Find a Job'},
        {id: 3, name: 'How to add Skills or Project'},
    ]

    const ChatMenuData = [
        {id: 1, name: 'How to Start a Company'},
        {id: 2, name: 'How Find a Job'},
        {id: 3, name: 'How to add Skills or Project'},
    ]

    const [MenuID, SetMenuID] = useState(false)
    const headleStartChat = (id) => {
        SetMenuID(id)
    }

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
                        <button className="fixed bottom-2 right-8 p-3">
                            {
                                chatOpen === true ?
                                    <BsXCircleFill className='h-8 w-auto text-purple-500' onClick={headleCloseChat}/>
                                :
                                    <BsChatDotsFill className='h-8 w-auto text-purple-500' onClick={headleOpenChat}/>    
                            }

                            <div className={`md:max-w-[20%] max-w-[80%] fixed bottom-16 right-4 bg-purple-800 text-white p-6 rounded-lg transition-transform duration-300 ${chatOpen ? 'transform translate-x-0' : 'transform translate-x-full mr-[-20px]'}`}>
                                <div className="">
                                    <div className="pb-4 flex">
                                        <BsHeadset className='pl-4 h-6 w-auto'/>
                                        <h1 className="pl-2">Help Assistant</h1>
                                    </div>
                                </div>
                                <div className="text-purple-500 rounded shadow-md">
                                    <div className="">
                                        {
                                            ChatMenu.map((menuChat, index) => {
                                                return (
                                                    <div className="bg-white p-2 my-2 rounded w-full" key={index} onClick={headleStartChat(menuChat.id)}>
                                                        <p className="text-left text-sm">{menuChat.name}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="">
                                        {
                                            (() => {
                                                if() 
                                            })()
                                        }
                                    </div>
                                </div>
                            </div>
                            
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
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { BsList, BsX } from "react-icons/bs";




const DashSide = () => {
    const navigate = useNavigate()
    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");


    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className='bg-white mt-4 py-2 px-8 md:w-56 rounded w-full shadow-md'>
        <button className="md:hidden fixed top-4 right-4 z-50 bg-gray-600 text-white p-2 rounded font-semibold" onClick={toggleSidebar}>
            {
                !isOpen ? <BsList /> : <BsX />
            }
        </button>

        <div className={`w-full md:w-auto md:min-h-screen md:relative fixed overflow-auto top-0 left-0 h-full w-auto transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nostrum eveniet qui deserunt exercitationem dicta impedit autem fuga cum at, quod beatae enim accusamus aliquam! Distinctio illum hic nobis vitae.
        </div>
        
    </div>
  )
}

export default DashSide
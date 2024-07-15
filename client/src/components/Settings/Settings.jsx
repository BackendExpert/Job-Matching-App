import React from 'react'
import MyImg from '../../assets/file.jpg'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"

const Settings = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='bg-white py-4 px-6 shadow-md rounded'>
                <h1 className="text-2xl font-semibold text-gray-500 pt-2">Settings</h1>
                <hr  className='py-2'/>
        
                <div className="my-4">
                    <div className="flex">
                        <img src={MyImg} alt="" className="h-44 w-auto rounded-xl shadow-md" />
                        <div className="ml-4">
                            <table>
                                <tr>
                                    <th>Username</th>
                                    <td>jehan</td>
                                </tr>
                            </table>
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

export default Settings
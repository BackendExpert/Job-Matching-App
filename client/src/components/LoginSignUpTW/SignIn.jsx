import React, { useState } from 'react'
import { BsBriefcaseFill, BsMortarboardFill, BsPerson, BsPersonFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage";
import BgImg from '../../assets/Image.jpg'

const SignIn = () => {
    const navigate = useNavigate()
    // for login data
    const [LoginData, SetLoginData] = useState({
        email: '',
        password: ''
    })

    // send data to backend using axios
    const headleSubmit = async (e) => {
        e.preventDefault();

        // login to system

        try{
            const res = await axios.post('http://localhost:5000/auth/SignIn', LoginData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Login Successfull")
                    localStorage.setItem('token', res.data.Token)
                    navigate('/Dashboard/Home')
                    // login user Email 
                    secureLocalStorage.setItem('Login1', res.data.Result.email)
                    secureLocalStorage.setItem('Login2', res.data.Result.Role)                    
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    const styles = {
        background: `url(${BgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
  return (
    <div style={styles} className='bg-gradient-to-r from-violet-500 to-purple-500 min-h-screen py-24 px-8'>
        <div className="md:grid grid-cols-3 gap-2">
            <div className=""></div>
            <div className="md:mx-8">          
  
                <div className="bg-gradient-to-br from-fuchsia-50 to-pink-200 rounded-2xl shadow-md w-full py-4 md:px-0 px-4">                 
                    <center className='text-purple-500 my-4'>
                        <div className="">
                            <BsPersonFill className='h-16 w-auto rounded-full'/>
                        </div>
                        <h1 className="text-xl font-semibold pb-6">SignIn</h1>
                    </center>
                    <div className="my-4">
                        <form onSubmit={headleSubmit}>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className='text-purple-500 font-semibold'>Email : </label>
                                <input type="email" name="" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" required placeholder='Enter Email Address'
                                onChange={e => SetLoginData({...LoginData, email:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className='text-purple-500 font-semibold'>Password : </label>
                                <input type="password" name="" id="" className="w-full h-12 pl-2 rounded bg-purple-300 text-purple-800 placeholder-white" required placeholder='Enter Password' 
                                onChange={e => SetLoginData({...LoginData, password:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <button type='submit' className='mt-8 font-semibold w-full py-4 px-8 rounded bg-purple-500 text-white shadow-md duration-500 hover:bg-purple-600'>SignIn</button>
                            </div>
                        </form>
                        <Link><p className="my-2 md:mx-8 text-purple-500 font-semibold">Forget Password ? </p></Link>
                    </div>
                    <hr className='my-2'/>
                    <p className="my-4 pl-4 text-purple-500">Don't have an Account ? <Link to={'/SignUp'}><span className="text-purple-800">SignUp</span></Link></p>
                </div>  
            </div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default SignIn
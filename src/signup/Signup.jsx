import React, { useState } from "react";
import Footer from './../component/FooterVersion2'
import Navbar from "../Login/Navbar";
import About from "../Login/About";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'


const Signup = () => {
    const navigate=useNavigate()
    const [name,setname]=useState("")
    const [password,setpassword]=useState("")
    const [email,setemail]=useState("")
    const [number,setnumber]=useState("")
    

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      function validatepassword(str)
      {
         return /[a-z]/.test(str) && /[A-Z]/.test(str) && /\d/.test(str);
      }
    const handlesubmit=()=>{
        
        const data={name,email,number,password};
        console.log(data)
        if(!validateEmail(email))
           alert('please enter correct email');
        else if(password.length<6 && !validatepassword(password))
           alert('please enter password size must be greater than 8 and 1 uppercase and 1 lowercase and 1 number must be included')
        else
        {

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:5000/signup',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data)); 
            if(response.data.status===409)
                alert(response.data.message)
            else{
                Cookies.set('token',response.data.token, { expires: 7 });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('name',response.data.name)
                localStorage.setItem('email',response.data.email)
                localStorage.setItem('isAuthenticate',true)
                setname("")
                setemail("")
                setnumber("")
                setpassword("")
                navigate('/');
            }
          
          })
          .catch((error) => {
            console.log(error);
            alert(error.message)
          });
        }
    }
    return (
        <>
            <Navbar />
            <div className="flex flex-row">
                <About />
                <div className="flex flex-col">
                <div className="flex flex-col mt-10 ml-40">
                    <div className="text-[#3F4547] text-3xl font-bold text-center">
                        <h1>Create Your Account</h1>
                    </div>
                    <input
                        type="text"
                        required
                        placeholder="Enter Your Name"
                        className="mt-5 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm" value={name} onChange={(e) => {
                            setname(e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        required
                        placeholder="Enter Mobile Number"
                        className="mt-5 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm" value={number} onChange={(e) => {
                            setnumber(e.target.value);
                        }}
                    />
                    <input
                        type="email"
                        required
                        placeholder="Enter Email"
                        className="mt-5 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm" value={email} onChange={(e) => {
                            setemail(e.target.value);
                        }}
                    />
                    <input
                        type="password"
                        required
                        placeholder="Enter Your Password"
                        className="mt-5 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm"
                        value={password} 
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }}
                    />
                    <ul className="list-disc mt-5 ml-10">
                        <li>
                            6 characters minimum</li><li>
                            At least one number</li><li>
                            Upper & lowercase character
                        </li>
                    </ul>
                    <button className="text-[white] bg-[#0369a8] h-14 w-96 text rounded-md mt-10 ml-4 font-bold" onClick={handlesubmit}>
                        Create account
                    </button>
                </div>
                <div className="flex flex-row pl-20 mt-10 ml-40">
                        <div className="text-[#3F4547]">Already Registered!!?</div>
                        <Link to='/login'><div className="text-[#0369a8] pl-1 underline ">
                            Sign In
                        </div></Link>
                    </div>
                    </div>
            </div>
            <Footer />
        </>
    );
};
export default Signup;
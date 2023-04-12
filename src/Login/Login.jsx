import React, { useState } from "react";
import About from './About'
import Footer from './../component/FooterVersion2'
import Navbar from './Navbar'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate();
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handlesubmit=()=>{
        const data={email,password}
        console.log(data)
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:5000/login',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            navigate('/')
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-row">
                <About />
                <div className="flex flex-col mt-36 ml-40">
                    <div className="text-[#3F4547] text-3xl font-bold">
                        <h1>Log in to your Damyant.com account</h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        className="mt-10 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm" value={email} onChange={(e) => {
                            setemail(e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Enter Your Password"
                        className="mt-10 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm"
                        value={password} 
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }}
                    />
                    <button className="text-[white] bg-[#0369a8] h-14 w-96 text rounded-md mt-10 ml-4 font-bold" onClick={handlesubmit}>
                        Sign in
                    </button>
                    <div className="flex flex-row mt-6 pl-6">
                        <input type="checkbox" name="" id="" className="pl-3" />
                        <div className="text-[#3F4547] pl-2">Remember Me</div>
                        <div className="text-[#0369a8] pl-32">Forget Password?</div>
                    </div>
                    <div className="flex flex-row pl-14 mt-5">
                        <div className="text-[#3F4547]">Don't have an account?</div>
                        <div className="text-[#0369a8] pl-1 underline ">
                            Create free account
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
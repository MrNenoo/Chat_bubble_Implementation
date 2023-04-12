import React, { useState } from "react";
import Footer from './../component/FooterVersion2'
import Navbar from "../Login/Navbar";
import About from "../Login/About";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate=useNavigate()
    const [name,setname]=useState("")
    const [password,setpassword]=useState("")
    const [email,setemail]=useState("")
    const [number,setnumber]=useState("")

    const handlesubmit=()=>{
        const data={name,email,number,password};
        console.log(data)

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
            navigate('/');
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
                <div className="flex flex-col mt-10 ml-40">
                    <div className="text-[#3F4547] text-3xl font-bold text-center">
                        <h1>SignUp in to your Damyant.com account</h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="mt-5 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm" value={name} onChange={(e) => {
                            setname(e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Enter Mobile Number"
                        className="mt-5 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm" value={number} onChange={(e) => {
                            setnumber(e.target.value);

                        }}
                    />
                    <input
                        type="text"
                        placeholder="Enter Email"
                        className="mt-5 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm" value={email} onChange={(e) => {
                            setemail(e.target.value);

                        }}
                    />
                    <input
                        type="text"
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
                    <button className="text-[white] bg-[#0369a8] h-14 w-96 text rounded-md mt-10 ml-4 font-bold" onClick={handlesubmit
                    }>
                        Sign Up For Free
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Signup;
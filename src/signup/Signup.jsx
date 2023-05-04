import React, { useState } from "react";
import Footer from './../component/FooterVersion2'
import Navbar from "../Login/Navbar";
import About from "../Login/About";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom'
import image1 from './../ig6.jpg'
import logo from './../logo.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Signup = () => {
    const navigate = useNavigate()
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    function validatepassword(str) {
        return /[a-z]/.test(str) && /[A-Z]/.test(str) && /\d/.test(str);
    }
    const handlesubmit = () => {
        const data = { name, email, number, password };
        console.log(data)
        if (!validateEmail(email))
            alert('please enter correct email');
        else if (password.length < 6 && !validatepassword(password))
            alert('please enter password size must be greater than 8 and 1 uppercase and 1 lowercase and 1 number must be included')
        else {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://127.0.0.1:5000/signup',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    if (response.data.status === 409)
                        alert(response.data.message)
                    else {
                        Cookies.set('token', response.data.token, { expires: 7 });
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('name', response.data.name)
                        localStorage.setItem('email', response.data.email)
                        setname("")
                        setemail("")
                        setnumber("")
                        setpassword("")
                        navigate('/login');
                    }

                })
                .catch((error) => {
                    console.log(error);
                    alert(error.message)
                });
        }
    }
    return (
            <div className="h-screen w-screen flex" style={{
                backgroundImage: `url(${image1})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height:"1000px"
            }}>
                <div className="m-10 mt-5 flex flex-row font-bold"><ArrowBackIosIcon sx={{ color: 'white' }} /><p className="text-white">Back</p></div>
                <div className="flex flex-col m-10 mt-16 p-10 bg-white rounded-lg absolute shadow">
                    <div className="text-[#3F4547] text-3xl font-bold flex text-center justify-center">
                        <img src={logo} alt="logo" ></img>
                    </div>
                    <div className="text-[#000000] text-3xl mt-5 ml-4" style={{ fontWeight: "700" }}>
                        <h1>Create Account</h1>
                    </div>
                    <p className="text-[#8692A6]  ml-4 mt-1 p-1 h-18"  style={{ width: '526px' }}>
                    If you are interested in trading, you can create your account to enjoy the benefits of our platform. Our account creation process is simple and easy to follow, allowing you to get started quickly and efficiently.                    </p>
                    <hr className="m-5"></hr>
                    <div className="flex flex-col">
                        <label className="ml-5 text-[#494949]">UserName</label>
                        <div className="text-center justify-center">
                            <input
                                type="text"
                                required
                                placeholder="Enter Your Name"
                                className="mt-1 outline-0 h-14  border border-[#1565D8] pl-4 ml-4 rounded-sm" value={name} onChange={(e) => {
                                    setname(e.target.value);
                                }}
                                style={{ width: '526px' }}
                            />
                        </div>
                        <label className="mt-5 ml-5 text-[#494949]">Mobile Number</label>
                        <div className="text-center justify-center">
                            <input
                                type="text"
                                required
                                placeholder="Enter Mobile Number"
                                className="mt-1 outline-0 h-14  border border-[#1565D8] pl-4 ml-4 rounded-sm" value={number} onChange={(e) => {
                                    setnumber(e.target.value);
                                }}
                                style={{ width: '526px' }}
                            />
                        </div>
                        <label className="mt-5 ml-5 text-[#494949]">Email Address
                        </label>
                        <div className="text-center justify-center">
                            <input
                                type="email"
                                required
                                placeholder="Enter Email"
                                className="mt-1 outline-0 h-14  border border-[#1565D8] pl-4 ml-4 rounded-sm" value={email} onChange={(e) => {
                                    setemail(e.target.value);
                                }}
                                style={{ width: '526px' }}
                            />
                        </div>
                        <label className="mt-5 ml-5 text-[#494949]">Password</label>
                        <div className="text-center justify-center">
                            <input
                                type="password"
                                required
                                placeholder="Enter Your Password"
                                className="mt-1 outline-0 h-14 border border-[#1565D8] pl-4 ml-4 rounded-sm"
                                value={password}
                                onChange={(e) => {
                                    setpassword(e.target.value);
                                }}
                                style={{ width: '526px' }}
                            />
                        </div>
                        <ul className="list-disc mt-5 ml-10">
                            <li>
                                6 characters minimum</li><li>
                                At least one number</li><li>
                                Upper & lowercase character
                            </li>
                        </ul>
                        <button className="text-[white] bg-[#2C73EB] h-14 text rounded-md mt-2 ml-4 font-bold" style={{ width: '526px' }} onClick={handlesubmit}>
                            Create account
                        </button>
                    </div>
                    <div className="flex flex-row mt-2 text-center justify-center">
                        <div className="text-[#3F4547]">Already Registered!!?</div>
                        <Link to='/login'><div className="text-[#0369a8] pl-1 underline ">
                            Sign In
                        </div></Link>
                    </div>
                </div>
            </div>
    );
};
export default Signup;
import React, { useState, useEffect } from "react";
import About from './About'
import Footer from './../component/FooterVersion2'
import Navbar from './Navbar'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import image1 from './../ig6.jpg'
import logo from './../logo.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handlesubmit = () => {
        const data = { email, password }
        if (!validateEmail(email))
            alert("please enter correct email")
        else {
            console.log(data)
            const userData = { email, password }
            axios
                .post("http://localhost:5000/", userData)
                .then((response) => {
                    if (response.data.status === 401) {
                      alert(response.data.message);
                    } else {
                      console.log(JSON.stringify(response.data));
                      Cookies.set("token", response.data.token, { expires: 7 });
                      localStorage.setItem("token", response.data.token);
                      localStorage.setItem("name", response.data.name);
                      localStorage.setItem("email", response.data.email);
                      localStorage.setItem("id", response.data.id);
                      localStorage.setItem("isAuthenticate", true);
                      if (rememberMe) {
                        localStorage.setItem("password", password);
                        localStorage.setItem("rememberMe", true);
                      } else {
                        localStorage.removeItem("password");
                        localStorage.removeItem("rememberMe");
                      }
                      setemail("");
                      setpassword("");
                      navigate("/");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    alert(error)
                });
        }
    }
    useEffect(() => {
        const token = Cookies.get("token");
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        const storedRememberMe = localStorage.getItem('rememberMe');

        if (storedRememberMe === 'true' && storedEmail && storedPassword) {
            setemail(storedEmail);
            setpassword(storedPassword);
            setRememberMe(true);
        }
        const res = localStorage.getItem('isAuthenticate')
        if (token)
            navigate('/')
    }, []);
    return (
        <>
            <div className="flex" style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: 'cover',
                height: '820px'
            }}>
                <div className="m-10 mt-5 flex flex-row font-bold"><ArrowBackIosIcon sx={{ color: 'white' }} /><p className="text-white">Back</p></div>
                <div className="flex flex-col m-10 mt-16 p-5 bg-white rounded-lg absolute shadow" style={{ height: '700px' }}>
                    <div className="text-[#3F4547] text-3xl font-bold flex text-center justify-center">
                        <img src={logo} alt="logo" ></img>
                    </div>
                    <div className="text-[#000000] text-3xl mt-5 ml-4" style={{ fontWeight: "700" }}>
                        <h1>Account Login</h1>
                    </div>
                    <p className="text-[#8692A6] w-96 ml-4 mt-1 p-1 h-18">
                        If you are already a member,You can login with your email address and password.
                    </p>
                    <hr className="m-5"></hr>
                    <label className="text-[#696F79] ml-5 mt-5">Email Address</label>
                    <div className="text-center justify-center">
                        <input
                            type="text"
                            placeholder="Enter Email"
                            className="mt-1 outline-0 h-14 border border-[#1565D8] pl-4 ml-4 rounded text-[#494949]" value={email} onChange={(e) => {
                                setemail(e.target.value);
                            }}
                            style={{ width: '526px' }}
                        />
                    </div>
                    <label className="mt-5 ml-5 text-[#494949]">Password</label>
                    <div className="text-center justify-center">
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            className="mt-1 outline-0 h-14 border border-[#1565D8] pl-4 ml-4 rounded"
                            value={password}
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                            style={{ width: '526px' }}
                        />
                    </div>
                    <div className="text-center justify-center">
                        <button className="text-[white] bg-[#2C73EB] h-14 text rounded-md mt-10 ml-4 font-bold" style={{ width: '526px' }} onClick={handlesubmit} onKeyDown={(e) => {
                            if (e.keyCode === 13) { handlesubmit() }
                        }}>
                            Login
                        </button>
                    </div>
                    <div className="flex flex-row mt-6 pl-6">
                        <div className="text-center justify-center">
                            <input type="checkbox" checked={rememberMe} onChange={(e) => { setRememberMe(e.target.checked); }} />
                        </div>
                        <div className="text-[#3F4547] pl-2">Remember Me</div>
                        <Link to='/forget_password'><div className="text-[#2C73EB] pl-32">Forget Password?</div></Link>
                    </div>
                    <div className="flex flex-row ml-5 mt-5">
                        <div className="text-[#3F4547]">Don't have an account?</div>
                        <Link to='/signup'>
                            <div className="text-[#2C73EB] pl-1 underline ">
                                Sign up here
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
import React, { useState, useEffect } from "react";
import About from './About'
import Footer from './../component/FooterVersion2'
import Navbar from './Navbar'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


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
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://127.0.0.1:5000/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    if(response.data.status===401)
                      alert(response.data.message)
                    else{
                    console.log(JSON.stringify(response.data));
                    Cookies.set('token', response.data.token, { expires: 7 });
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('name', response.data.name)
                    localStorage.setItem('email', response.data.email)
                    localStorage.setItem('isAuthenticate', true)
                    if (rememberMe) {
                        localStorage.setItem('password', password);
                        localStorage.setItem('rememberMe', true);
                    } else {
                        localStorage.removeItem('password');
                        localStorage.removeItem('rememberMe');
                    }
                    setemail("")
                    setpassword("")
                    navigate('/')
                  }
                })
                .catch((error) => {
                    console.log(error);
                    alert(error)
                });
        }
    }
    useEffect(() => {
        
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        const storedRememberMe = localStorage.getItem('rememberMe');

        if (storedRememberMe === 'true' && storedEmail && storedPassword) {
            setemail(storedEmail);
            setpassword(storedPassword);
            setRememberMe(true);
        }
        const res=localStorage.getItem('isAuthenticate')
        if(res==="true")
           navigate('/')
    }, []);
    return (
        <>
            <Navbar />
            <div className="flex flex-row">
                <About />
                <div className="flex flex-col mt-36 ml-40">
                    <div className="text-[#3F4547] text-3xl font-bold text-center">
                        <h1>Login Here!!!</h1>
                    </div>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        className="mt-10 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm" value={email} onChange={(e) => {
                            setemail(e.target.value);
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        className="mt-10 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm"
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }}
                    />
                    <button className="text-[white] bg-[#0369a8] h-14 w-96 text rounded-md mt-10 ml-4 font-bold" onClick={handlesubmit} onKeyDown={(e) => {
                        if (e.keyCode === 13) { handlesubmit() }
                    }}>
                        Sign in
                    </button>
                    <div className="flex flex-row mt-6 pl-6">
                        <input type="checkbox" checked={rememberMe} onChange={(e) => { setRememberMe(e.target.checked); }} />
                        <div className="text-[#3F4547] pl-2">Remember Me</div>
                        <Link to='/forget_password'><div className="text-[#0369a8] pl-32">Forget Password?</div></Link>
                    </div>
                    <div className="flex flex-row pl-14 mt-5">
                        <div className="text-[#3F4547]">Don't have an account?</div>
                        <Link to='/signup'>
                        <div className="text-[#0369a8] pl-1 underline ">
                            Create free account
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
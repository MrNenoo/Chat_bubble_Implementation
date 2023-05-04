import React, { useState } from "react";
import Footer from './../component/FooterVersion2'
import Navbar from './../Login/Navbar'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import image1 from './../ig1.jpg'
import logo from './../logo.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const ForgetPassword = () => {
    const [email, setemail] = useState("")
    const navigate = useNavigate()

    const handlesubmit = () => {
        const data = { "email": email }
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:5000/forget_password',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                if (response.data.status === 401)
                    alert(response.data.message)
                else
                    navigate('/login')
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <div className="flex h-screen w-screen" style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: 'cover',
            }}>
                <div className="m-10 mt-5 flex flex-row font-bold"><ArrowBackIosIcon sx={{ color: 'white' }} /><p className="text-white">Back</p></div>
                <div className="flex flex-col m-10 mt-16 p-5 bg-white rounded-lg absolute shadow" style={{ height: '600px' }}>
                    <div className="text-[#3F4547] text-3xl font-bold flex text-center justify-center">
                        <img src={logo} alt="logo" ></img>
                    </div>
                    <div className="text-[#000000] text-3xl mt-5 ml-4" style={{ fontWeight: "700" }}>
                        <h1>Forget Password</h1>
                    </div>
                    <p className="text-[#8692A6] ml-4 mt-1 p-1 h-18" style={{ width: '526px' }}>
                    Forgot your password? No problem! Enter your email address below and we'll send you instructions on how to reset your password</p>           
                             <hr className="m-5"></hr>
                    <label className="text-[#696F79] ml-5 mt-5">Email Address</label>
                    <div className="text-center justify-center">
                        <div className="flex text-center justify-center">
                            <input
                                type="text"
                                placeholder="Enter Email"
                                className="mt-1 outline-0 h-14 border border-[gray] pl-4 ml-4 rounded-sm" style={{ width: '526px' }} value={email} onChange={(e) => {
                                    setemail(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="text-center justify-center">
                        <button className="text-[white] bg-[#2C73EB] h-14 text rounded-md mt-10 ml-4 font-bold" style={{ width: '526px' }} onClick={handlesubmit} onKeyDown={(e) => {
                            if (e.keyCode === 13) { handlesubmit() }
                        }}>
                            Forget Password
                        </button>
                    </div>
                    <div className="grid grid-cols-2 mt-5">
                        <Link to='/login'><div className="text-[#0369a8] text-center underline">Return to Signin</div></Link>
                        <Link to='/signup'><div className="text-[#0369a8] text-center underline "> Don't have an Account </div></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgetPassword;
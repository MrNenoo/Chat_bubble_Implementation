import React, { useState } from 'react'
import Navbar from './../Login/Navbar'
import Footer from './../component/FooterVersion2'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import image1 from './../ig7.jpg'
import logo from './../logo.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Reset_Password = () => {
  const [password, setpassword] = useState("")
  const [cpassword, setcpassword] = useState("")
  let { token } = useParams();
  const navigate = useNavigate()



  const handlesubmit = () => {
    if (password === cpassword) {
      const data = { "password": password }
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:5000/reset_password/${token}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          navigate('/login')
        })
        .catch((error) => {
          console.log(error);
        });
    } else
      alert("Enter Both Password are not equal")
  }

  return (
    <>
      <div className="flex" style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        height: '800px'
      }}>
                <div className="m-10 mt-5 flex flex-row font-bold"><ArrowBackIosIcon sx={{ color: 'white' }} /><p className="text-white">Back</p></div>
        <div className="flex flex-col m-10 mt-16 p-5 bg-white rounded-lg absolute shadow" style={{ height: '680px' }}>
          <div className="text-[#3F4547] text-3xl font-bold flex text-center justify-center">
            <img src={logo} alt="logo" ></img>
          </div>
          <div className="text-[#000000] text-3xl mt-5 ml-4" style={{ fontWeight: "700" }}>
            <h1>Reset Password</h1>
          </div>
          <p className="text-[#8692A6] ml-4 mt-1 p-1 h-18" style={{ width: '526px' }}>
            In the event of forgetting your password, you will be able to receive an email containing instructions on how to reset it. This process will enable you to regain access to your account, ensuring that your data remains secure.                    </p>
          <hr className="m-5"></hr>
          <label className="text-[#696F79] ml-5 mt-5">New Password</label>
          <div className="text-center">
            <input
              type="text"
              placeholder="New Password"
              className="mt-1 outline-0 h-14 border border-[gray] pl-4 ml-4 rounded-sm" value={password} onChange={(e) => {
                setpassword(e.target.value);
              }}
              style={{ width: '526px' }}
            />
          </div>
          <label className="text-[#696F79] ml-5 mt-5">New Confirm Password</label>
          <div className="text-center">
            <input
              type="text"
              placeholder="New Confirm Password"
              className="mt-1 outline-0 h-14  border border-[gray] pl-4 ml-4 rounded-sm"
              value={cpassword}
              onChange={(e) => {
                setcpassword(e.target.value);
              }}
              style={{ width: '526px' }}
            />
          </div>

          <div className="text-center justify-center">
            <button className="text-[white] bg-[#2C73EB] h-14 text rounded-md mt-10 ml-4 font-bold" style={{ width: '526px' }} onClick={handlesubmit} onKeyDown={(e) => {
              if (e.keyCode === 13) { handlesubmit() }
            }}>
              Reset Password
            </button>
          </div>
          <div className="grid grid-cols-2 mt-5">
            <Link to='/login'><div className="text-[#0369a8] text-center underline">Return to Signin</div></Link>
            <Link to='/signup'><div className="text-[#0369a8] text-center underline "> Don't have an Account </div></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reset_Password
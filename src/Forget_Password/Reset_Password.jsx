import React, { useState } from 'react'
import Navbar from './../Login/Navbar'
import Footer from './../component/FooterVersion2'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


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
      <Navbar />
      <div className="flex flex-col mt-20  text-center justify-center">
        <div className="text-[#3F4547] text-3xl font-bold">
          <h1>Reset Password</h1>
        </div>
        <div className="text-center">
          <input
            type="text"
            placeholder="New Password"
            className="mt-10 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm" value={password} onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <div className="text-center">
          <input
            type="text"
            placeholder="New Confirm Password"
            className="mt-10 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm"
            value={cpassword}
            onChange={(e) => {
              setcpassword(e.target.value);
            }}
          />
        </div>
        <div className="text-center">
          <button className="text-[white] bg-[#0369a8] h-14 w-96 text rounded-md mt-10 ml-4 font-bold" onClick={handlesubmit}>
            Submit It
          </button>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Reset_Password
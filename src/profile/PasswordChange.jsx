import React, { useState } from 'react'
import axios from 'axios';


const PasswordChanged = () => {
  const [password, setpassword] = useState("")
  const [cpassword, setcpassword] = useState("")

  const handlesubmit = () => {
      const data = {"current_password":cpassword, "new_password":password ,"email":localStorage.getItem('email')}
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:5000/password/update',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert(response.data.message)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="flex flex-col mt-5  text-center justify-center m-10">
        <div className="text-[#3F4547] text-3xl font-bold mt-10">
          <h1>Change Password</h1>
        </div>
        <div className="text-center">
          <input
            type="password"
            placeholder="Enter Current Password"
            className="mt-10 outline-0 h-14 w-96 border border-[#1565D8] pl-4 rounded-sm" value={cpassword} onChange={(e) => {
              setcpassword(e.target.value);
            }}
            style={{ width: '526px' }}

          />
        </div>
        <div className="text-center">
          <input
            type="password"
            placeholder="Enter New Password"
            className="mt-10 outline-0 h-14 w-96 border border-[#1565D8] pl-4 rounded-sm"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            style={{ width: '526px' }}
          />
        </div>
        <div className="text-center">
          <button className="text-[white] bg-[#2C73EB] h-14 w-96 mb-10 text rounded-md mt-10 font-bold" style={{ width: '526px' }} onClick={handlesubmit}>
            Submit It
          </button>
        </div>
      </div>
    </>
  )
}

export default PasswordChanged
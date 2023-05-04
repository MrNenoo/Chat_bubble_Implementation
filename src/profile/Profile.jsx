import React, { useState, useEffect } from 'react'
import logo from './../atul.jpg'
import { Button } from '@mui/material';
import { Dialog } from '@material-ui/core';
import PasswordChanged from './PasswordChange';
import UpdateProfile from './UpdateProfile';
import axios from 'axios';
import image1 from './../ig1.jpg'
import profile from './../profile.jpg'
import CircleChart from './CircleChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [name, setname] = useState("")
  const [address, setaddress] = useState("")
  const [broker, setbroker] = useState("")
  const [gender, setgender] = useState("")
  const [contact, setcontact] = useState("")
  const [count, setcount] = useState(0)

  useEffect(() => {
    document.title = 'profile';
  }, [])
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen1(true)
  }

  // Fetching the api to get the profile data
  useEffect(() => {
    const data = { "id": localStorage.getItem('id') }
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:5000/profile',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setname(response.data.data.name)
        setcontact(response.data.data.contact)
        setgender(response.data.data.gender)
        setaddress(response.data.data.address)
        setbroker(response.data.data.broker)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count])
  return (
    <>
      <div className="" style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        height: '1020px'
      }}>
             <Link to='/'><HomeIcon sx={{color:"white",fontSize:"60px",margin:"30px"}}/></Link> 
        <div className="grid grid-cols-2">
        <div className="m-10 p-10 bg-white rounded-lg  shadow" >
          <div className="flex text-center justify-center">
            <img src={profile} alt="logo" className="h-20 w-28 rounded m-10 text-center" style={{ borderRadius: "50%" }} />
          </div>
          <div className="grid grid-cols-2 mt-3 shadow p-3 rounded">
            <label style={{fontWeight:"500",fontSize:"24px"}}>Name</label>
            <h3 style={{fontWeight:"500",fontSize:"20px"}}>: {name}</h3>
          </div>
          <div className="grid grid-cols-2 mt-3 shadow p-3 rounded">
            <label style={{fontWeight:"500",fontSize:"24px"}}>Email Address</label>
            <h3 style={{fontWeight:"500",fontSize:"16px"}}>: {localStorage.getItem('email')}</h3>
          </div>
          <div className="grid grid-cols-2 mt-3 shadow p-3 rounded">
            <label style={{fontWeight:"500",fontSize:"24px"}}>Contact Number</label>
            <h3 style={{fontWeight:"500",fontSize:"20px"}}>: {contact}</h3>
          </div>
          <div className="grid grid-cols-2 mt-3 shadow p-3 rounded">
            <label style={{fontWeight:"500",fontSize:"24px"}}>Current Home Address</label>
            <h3 style={{fontWeight:"500",fontSize:"20px"}}>: {address}</h3>
          </div>
          <div className="grid grid-cols-2 mt-3 shadow p-3 rounded">
            <label style={{fontWeight:"500",fontSize:"24px"}}>Gender</label>
            <h3 style={{fontWeight:"500",fontSize:"20px"}}>: {gender}</h3>
          </div>
          <div className="grid grid-cols-2 mt-3 shadow p-3 rounded">
            <label style={{fontWeight:"500",fontSize:"24px"}}>Broker</label>
            <h3 style={{fontWeight:"500",fontSize:"20px"}}>: {broker}</h3>
          </div>
          <div className="grid grid-cols-2 p-3 shadow rounded mt-3">
          <Button variant="contained" sx={{ marginTop: "16px",margin:"5px"}} onClick={handleClickOpen}>Update Profile</Button>
          <Button variant="contained" sx={{ marginTop: "16px",margin:"5px"}} onClick={handleClickOpen1}>Change Password</Button>
          </div>
          <Dialog open={open} onClose={() => setOpen(false)} sx={{ "& .MuiDialog-paper": { width: "90%" } }}>
            <UpdateProfile count={count} func={setcount} />
          </Dialog>
          <Dialog open={open1} onClose={() => setOpen1(false)} sx={{ "& .MuiDialog-paper": { width: "90%" } }}>
            <PasswordChanged />
          </Dialog>
        </div>
        {/* 2nd box */}
        <div className="m-10 p-5 bg-white rounded-lg shadow grid grid-cols-1" >
          <div className="shadow rounded">
            <h1 className="text-center text-blue-400 text-xl font-bold mt-3">Running Plan Details</h1>
            <div className="grid grid-cols-1 text-center justify-center m-5 md:grid-cols-1 lg:grid-cols-1">
              <div className="font-bold border-2 shadow rounded grid grid-cols-2 p-2">
                <h2 className=" text-xl">Remaining Credit</h2>
                <h2 className=" text-xl text-red-600">150</h2>
              </div>
              <div className="font-bold border-2 rounded shadow grid grid-cols-2 p-2 border-yellow-200">
                <h2 className=" text-xl">Expiry Date Of Plan</h2>
                <h2 className=" text-xl text-yellow-300">18th,August,2023</h2>

              </div>
              <div className="font-bold border-2 rounded grid grid-cols-2 p-2 border-blue-200">
                <h2 className=" text-xl">Total Coin Collected</h2>
                <h2 className=" text-xl text-blue-800">150</h2>
              </div>
              <div className="font-bold border-2 rounded border-green-300 grid grid-cols-2 p-2">
                <h2 className=" text-xl">Broker</h2>
                <h2 className=" text-xl text-green-600">Zerodha</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 shadow m-1 rounded-lg">
          <CircleChart/>
          <CircleChart/>
          </div>
          <div className="grid grid-cols-2 shadow m-1 rounded-lg">
          <BarChart/>
          <BarChart/>
          </div>
          <div className="grid grid-cols-2 shadow m-1 rounded-lg">
          <LineChart/>
          <LineChart/>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Profile
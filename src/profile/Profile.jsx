import React, {useState,useEffect } from 'react'
import Navbar from '../Login/Navbar';
import FooterVersion2 from './../component/FooterVersion2'
import logo from './../atul.jpg'
import { Button } from '@mui/material';
import { Dialog } from '@material-ui/core';
import PasswordChanged from './PasswordChange';
import UpdateProfile from './UpdateProfile';
import axios from 'axios';

const Profile = () => {
  const [name, setname] = useState("")
  const [address, setaddress] = useState("")
  const [broker, setbroker] = useState("")
  const [gender, setgender] = useState("")
  const [contact, setcontact] = useState("")
  const [count,setcount]=useState(0)

  useEffect(() => {
    document.title = 'profile';
  }, [])
  const [open, setOpen] = useState(false);
  const [open1,setOpen1]=useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen1(true)
  }
  
  // Fetching the api to get the profile data
  useEffect(()=>{
    const data={"email":localStorage.getItem('email')}
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:5000/profile',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
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
  },[count])
  return (
    <>
      <Navbar />
      <h1 className="text-center text-blue-600 mt-10 text-4xl font-bold">My Profile</h1>
      <div className="flex flex-row m-10 text-center">
        <div className="w-96 h-screen shadow rounded flex flex-col m-3">
          <div className="flex text-center justify-center">
          <img src={logo} alt="logo" className="h-20 w-20 rounded m-10 text-center" style={{ borderRadius: "50%" }} />
          </div>
           <div className="grid grid-cols-1 mt-3">
          <label className="text-l font-bold ">Name</label>
         <h3 className="text-l font-thin">{name}</h3>
         </div>
         <div className="grid grid-cols-1 mt-3">
          <label className="text-l font-bold ">Email Address</label>
         <h3 className="text-l font-thin">{localStorage.getItem('email')}</h3>
         </div>
         <div className="grid grid-cols-1 mt-3">
          <label className="text-l font-bold ">Contact Number</label>
         <h3 className="text-l font-thin">{contact}</h3>
         </div>
         <div className="grid grid-cols-1 mt-3">
          <label className="text-l font-bold ">Current Home Address</label>
         <h3 className="text-l font-thin">{address}</h3>
         </div>
         <div className="grid grid-cols-1 mt-3">
          <label className="text-l font-bold ">Gender</label>
         <h3 className="text-l font-thin">{gender}</h3>
         </div>
         <div className="grid grid-cols-1 mt-3">
          <label className="text-l font-bold ">Broker</label>
         <h3 className="text-l font-thin">{broker}</h3>
         </div>
         <Button variant="contained" sx={{marginTop:"16px"}} onClick={handleClickOpen}>Update Profile</Button>
         <Button variant="contained" sx={{marginTop:"16px"}} onClick={handleClickOpen1}>Change Password</Button>
         <Dialog open={open} onClose={() => setOpen(false)} sx={{ "& .MuiDialog-paper": { width: "90%" } }}>
         <UpdateProfile count={count} func={setcount}/>
         </Dialog>
         <Dialog open={open1} onClose={() => setOpen1(false)} sx={{ "& .MuiDialog-paper": { width: "90%" } }}>
         <PasswordChanged/>
         </Dialog>
         
        </div>
       <div className="m-3 grid grid-cols-1 shadow border-black">
        <div className="shadow rounded">
        <h1 className="text-center text-blue-400 text-xl font-bold mt-3">Running Plan Details</h1>
      <div className="grid grid-cols-4 text-center justify-center m-10">
        <div className="p-6 m-3 font-bold border-2 rounded border-green-500">
        <h2 className=" text-xl">Remaining Credit</h2>
          <h2 className=" text-xl">150</h2>
        </div>
        <div className="p-6 m-3 font-bold border-2 rounded border-green-500">
          <h2 className=" text-xl">Expiry Date Of Plan</h2>
          <h2 className=" text-xl">18th,August,2023</h2>

        </div>
        <div className="p-6 m-3 font-bold border-2 rounded border-green-500">
        <h2 className=" text-xl">Total Coin Collected</h2>
          <h2 className=" text-xl">150</h2>
        </div>
        <div className="p-6 m-3 font-bold border-2 rounded border-green-500">
          <h2 className=" text-xl">Broker</h2>
          <h2 className=" text-xl">Zerodha</h2>
        </div>
      </div>
        </div>

        <div className="shadow rounded mt-10">
        <h1 className="text-center text-blue-400 text-xl font-bold mt-3">Premium Plan</h1>
      <div className="grid grid-cols-4 text-center justify-center m-10">
      <div className="p-6 m-3 font-bold border-2 rounded border-green-500">
          <h2 className=" text-xl">0$ for Week</h2>
          <h2 className=" text-xl">Free For One Time</h2>
        </div>
        <div className="p-6 m-3 font-bold border-2 rounded border-green-500">
          <h2 className=" text-xl">1500$ Per Month</h2>
        </div>
        <div className="p-6 m-3 font-bold border-2 rounded border-green-500">
          <h2 className=" text-xl">4000$ For 3 Month</h2>
        </div>
        <div className="p-6 m-3 font-bold border-2 rounded border-green-500">
          <h2 className=" text-xl">6000$ For 6 Month</h2>
        </div>
        <div className="p-6 m-3 font-bold border-2 rounded border-green-500">
          <h2 className=" text-xl">10000$ For 1 year</h2>
        </div>
      </div>
        </div>
        </div>
      </div>
      
      <FooterVersion2 />

    </>
  )
}

export default Profile
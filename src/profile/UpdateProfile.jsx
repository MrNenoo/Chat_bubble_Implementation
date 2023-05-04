import React, { useState,useEffect } from 'react'
import axios from 'axios'

const UpdateProfile = (props) => {
    const [name, setname] = useState("")
    const [address, setaddress] = useState("")
    const [broker, setbroker] = useState("")
    const [gender, setgender] = useState("")
    const [contact, setcontact] = useState("")

    const handlesubmit = () => {
        const data={"name":name,"address":address,"broker":broker,"gender":gender,"contact":contact,"email":localStorage.getItem('email')}
        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:5000/profile/update',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            props.func(props.count+1);
            alert("Profile Update Successfully")
          })
          .catch((error) => {
            console.log(error);
          });
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
      setcontact(response.data.data.number)
      setgender(response.data.data.gender)
      setaddress(response.data.data.address)
      setbroker(response.data.data.broker)
    })
    .catch((error) => {
      console.log(error);
    });
  },[])

    return (
      <div className="flex flex-col m-10">
      <div className="text-[#3F4547] text-3xl font-bold text-center mt-2">
                <h1>Update Profile</h1>
            </div>
            <div className="flex flex-col">
            <label className="mt-5 text-[#494949]">UserName</label>
            <input
                type="text"
                placeholder="Enter Your Name"
                className="mt-1 outline-0 h-14 w-96 border border-[#1565D8] pl-4 rounded-sm" value={name} onChange={(e) => {
                    setname(e.target.value);
                }}
                style={{ width: '526px' }}
            />
            <label className="mt-5 text-[#494949]">Contact Number</label>
            <input
                type="text"
                placeholder="Enter Mobile Number"
                className="mt-1 outline-0 h-14 w-96 border border-[#1565D8] pl-4 rounded-sm" value={contact} onChange={(e) => {
                    setcontact(e.target.value);
                }}
                style={{ width: '526px' }}
            />
            <label className="mt-5 text-[#494949]">Current Address</label>
            <input
                type="text"
                placeholder="Enter Your Current Location Address"
                className="mt-1 outline-0 h-14 w-96 border border-[#1565D8] pl-4 rounded-sm" value={address} onChange={(e) => {
                    setaddress(e.target.value);
                }}
                style={{ width: '526px' }}
            />
            <label className="mt-1 text-[#494949]">Gender</label>
            <input
                type="text"
                placeholder="Enter Your Gender"
                className="mt-1 outline-0 h-14 w-96 border border-[#1565D8] pl-4 rounded-sm"
                value={gender}
                onChange={(e) => {
                    setgender(e.target.value);
                }}
                style={{ width: '526px' }}
            />
            <label className="mt-5 text-[#494949]">Broker Name</label>

            <input
                type="text"
                placeholder="Enter Your Broker Name"
                className="mt-1 outline-0 h-14 w-96 border border-[#1565D8] pl-4 rounded-sm"
                value={broker}
                onChange={(e) => {
                    setbroker(e.target.value);
                }}
                style={{ width: '526px' }}
            />
            <button className="text-[white] bg-[#2C73EB] h-14 text rounded-md mt-4  font-bold" style={{ width: '526px' }} onClick={handlesubmit
            }>
                Update Profile
            </button>
            </div>
        </div>
    )
}

export default UpdateProfile
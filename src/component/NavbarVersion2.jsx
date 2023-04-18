import React, { useEffect, useState } from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import avatar from './../atul.jpg'
import { Link } from 'react-router-dom';

const NavbarVersion2 = () => {
  const name = localStorage.getItem('name')

  return (
    <>
      <div className="flex flex-row mt-5">
        <div className="text-xl font-bold ml-20 text-black mt-3">Hello, {name}</div>
        <div className="float-right flex flex-row" style={{ marginLeft: "30%" }} >
          <div className="border-2 rounded-xl border-solid flex flex-row mt-3 max-md:w-36" style={{ backgroundColor: "#F7F6F9", color: "#A49F9F", borderColor: "#DDD7D7" }}>
            <SearchIcon sx={{ height: "30px", textAlign: "center", marginTop: "10px", marginLeft: "15px" }} />
            <input type="text" className="text-center justify-center h-12 w-80 text-l border-0 outline-none overflow-hidden font-normal mr-5" style={{ backgroundColor: "#F7F6F9", color: "#A49F9F" }} placeholder="Search For Stocks and More..." />
          </div>
          <NotificationsNoneIcon sx={{ margin: "10px", marginTop: "14px", marginLeft: "20px", color: "white", fontSize: "40px" }} />
          <Link to='/profile'><abbr title="Profile"><img className="w-10 h-10 ml-5 mt-3 rounded-full max-md:ml-2" src={avatar} alt="Rounded avatar" /></abbr></Link>
        </div>
      </div>
    </>

  )
}

export default NavbarVersion2
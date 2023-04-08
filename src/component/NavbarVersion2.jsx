import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import avatar from './../atul.jpg'

const NavbarVersion2 = () => {
  return (
    <>
     <div className="flex flex-row mt-5">
    <div className="text-xl font-bold ml-20 text-black">Hello, Hemen</div>
    <div className="float-right flex flex-row" style={{marginLeft:"30%"}} >
    <div className="border-2 border-solid rounded flex flex-row max-md:w-36" style={{backgroundColor:"#F7F6F9",color:"#A49F9F",borderColor:"#DDD7D7"}}>
        <SearchIcon sx={{height:"30px",textAlign:"center",marginTop:"10px",marginLeft:"15px"}} />
        <input type="text" className="text-center h-12 w-96 text-l border-0 outline-none overflow-hidden font-normal" style={{backgroundColor:"#F7F6F9",color:"#A49F9F"}} placeholder="Search For Stocks and More..."/>
        </div>
       <NotificationsNoneIcon sx={{margin:"10px",marginLeft:"20px"}}/>
        <img class="w-10 h-10 ml-10 rounded-full max-md:ml-2" src={avatar} alt="Rounded avatar"/>
    </div>
    </div>
    </>

  )
}

export default NavbarVersion2
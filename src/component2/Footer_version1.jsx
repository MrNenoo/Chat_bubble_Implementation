import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import CallIcon from '@mui/icons-material/Call';

function Footer_version1() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="bg-gradient-to-b from-slate-100 to-slate-200" style={{color:"black"}}>
        <div className="m-10 flex flex-col">
        <div className="grid grid-cols-4 mb-4 max-md:grid-cols-1">
        {/* ###### 1st Box ##### */}
        <div className="flex flex-row">
         <div className="">
         <div className="font-bold">ABOUT US</div>
         <p className="">Damyant Software was incorporated in August, 2010. The company is headquartered in New Delhi, India</p>
         </div>
         <div className="border-2 h-48 ml-4 w-0 mr-8 border-white max-md:hidden"></div>
         </div>

         
        {/* ###### 2nd Box ##### */}
         <div className="flex flex-row">
         <div>
         <div className="font-bold">CONTACT INFO</div>
         <p className="mr-8">Address : 4285, Murray Park Drive, Cumming, GA 30040, USA</p>
         <div className=""><CallIcon/> +1 404 426 2458</div>
         <div className=""><EmailIcon/>info@damyant.com</div>
         </div>
         <div>
         <div className="border-2 h-48 w-0 mr-8 border-white max-md:hidden"></div>
         </div>
         </div>
         

          {/* ###### 3rd Box ##### */}
          <div className="flex flex-row">
         <div className="mr-16">
         <div className="font-bold">IMPORTANT LINK</div>
         <div className="">Home</div>
         <div className="">About</div>
         <div className="">Product & Solution</div>
         <div className="">Services</div>
         <div className="">Industries</div>
         <div className="">Contact Us</div>
         </div>
         <div className="border-2 h-48 w-0 mr-8 border-white max-md:hidden"></div>
         </div>

          {/* ###### 4th Box ##### */}
         <div className="flex flex-col">
         <div className="mb-2 font-bold">NEWS LETTER</div>
         <input type="text" placeholder="Enter Email Address" className="border-2 pl-8 border-white rounded"></input>
         </div>
         </div>

          <hr className=""></hr>
          {/* ###### 4th Box ##### */}
         <div className="flex flex-row">
         <div className="ml-8">2010-2023 Copyright © All rights reserved </div>
         <div className="float-right ml-96 pl-6 max-md:ml-0"><FacebookIcon className="mr-4"/><LinkedInIcon className="mr-4"/><TwitterIcon className="mr-4"/><GoogleIcon/></div>
         </div>
         </div>
      </Container>
    </AppBar>
  );
}
export default Footer_version1;
import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import image from './../logo.png'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [open,setopen]=useState(false)

  return (
    <AppBar position="sticky">
     <Container maxWidth="xl" className="bg-gradient-to-b from-zinc-900 to-zinc-400">
     <div className="grid grid-cols-2">
     <div className="ml-32"><CallIcon/>+1 404 426 2458</div>
     <div className="ml-32 max-md:ml-4"><EmailIcon/>info@damyant.com</div>
     </div>
     </Container>
      <Container maxWidth="xl" sx={{display:"flex",flexDirection:"row",justifyItems:"center",alignItems:"center"}} className="bg-gradient-to-b from-zinc-900 to-zinc-400">
        <img src={image} alt="logo" className="good"/>
        <div className="hidden max-md:flex max-md:ml-44" >
          <MenuIcon onClick={(e)=>open?setopen(false):setopen(true)}/>
        </div>
        <div className='flex flex-row max-md:hidden'>
        <div className="ml-32 font-bold text-xl max-md:ml-8 max-md:font-normal">Home</div>
        <div className="ml-8 font-bold text-xl max-md:ml-2 max-md:font-normal">About</div>
        <div className="ml-8 font-bold text-xl max-md:ml-2 max-md:font-normal">Product & Solution</div>
        <div className="ml-8 font-bold text-xl max-md:ml-2 max-md:font-normal">Services</div>
        <div className="ml-8 font-bold text-xl max-md:ml-2 max-md:font-normal">Industries</div>
        <div className="ml-8 font-bold text-xl max-md:ml-2 max-md:font-normal">Contact Us</div>
        </div>
      </Container>
        {
            open && <div className='flex flex-col mb-5 mt-5 text-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-400'>
                <div className="ml-32 font-bold text-xl max-md:ml-8 max-md:font-normal">Home</div>
               <div className="ml-8 font-bold text-xl max-md:ml-2 max-md:font-normal">About</div>
                <div className="ml-8 font-bold text-xl max-md:ml-2 max-md:font-normal">Product & Solution</div>
               <div className="ml-8 font-bold text-xl max-md:ml-2 max-md:font-normal">Services</div>
              <div className="ml-8 font-bold text-xl max-md:ml-2 max-md:font-normal">Industries</div>
             <div className="ml-8 font-bold text-xl max-md:ml-2 max-md:font-normal">Contact Us</div>
            </div>
        }
    </AppBar>
  );
}
export default Navbar;
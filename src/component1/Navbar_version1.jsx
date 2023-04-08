import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import image from './../logo.png'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function Navbar_version1() {

  return (
    <AppBar position="sticky" className="sticky text-black bg-gradient-to-b from-zinc-900 to-zinc-400">
     <Container maxWidth="xl" className="bg-gradient-to-b from-slate-100 to-slate-200" style={{backgroundColor:"white"}}>
     <div className="grid grid-cols-2 border-b-2">
     <div className="ml-32 text-black"><CallIcon/>+1 404 426 2458</div>
     <div className="ml-32 max-md:ml-4 text-black"><EmailIcon/>info@damyant.com</div>
     </div>
     </Container>
      <Container maxWidth="xl" className="bg-gradient-to-b from-slate-100 to-slate-200" sx={{display:"flex",flexDirection:"row",justifyItems:"center",alignItems:"center"}} style={{backgroundColor:"#D9D9D9"}}>
        <img src={image} alt="logo" className="good"/>
      </Container>
    </AppBar>
  );
}
export default Navbar_version1;
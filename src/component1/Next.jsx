import React,{useEffect} from 'react'
import Navbar_version2 from './Navbar_version2';
import Footer_version2 from './Footer_version2';

const Next = () => {
  useEffect(()=>{
    document.title='next';
  },[])
  return (
    <>
      <Navbar_version2/>
      <div className="text-red-600 h-16 mt-44 mb-44 text-center justify-center">Backtesting Completed Successfully .................</div>
      <Footer_version2/>
    </>
  )
}

export default Next
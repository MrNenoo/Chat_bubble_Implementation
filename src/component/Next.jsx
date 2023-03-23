import React,{useEffect} from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Next = () => {
  useEffect(()=>{
    document.title='next';
  },[])
  return (
    <>
      <Navbar/>
      <div className="text-red-600 h-16 mt-44 mb-44 text-center justify-center">Backtesting Completed Successfully .................</div>
      <Footer/>
    </>
  )
}

export default Next
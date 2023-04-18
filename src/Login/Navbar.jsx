import React from 'react'
import logo from './../logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Link to='/'><div className="bg-[#e9effa]">
            <img src={logo} alt="logo" />
        </div></Link>
    )
}

export default Navbar
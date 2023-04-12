import React, { useState } from "react";
import Footer from './../component/FooterVersion2'
import Navbar from './../Login/Navbar'

const ForgetPassword = () => {
    const [email,setemail]=useState("")

    const handlesubmit=()=>{
        const data={email}
        console.log(data)
    }
    return (
        <>
            <Navbar />
                <div className="flex flex-col m-20 text-center justify-center">
                    <div className="text-[#3F4547] text-3xl font-bold">
                        <h1>Forgot Password ?</h1>
                    </div>
                    <div className="flex text-center justify-center">
                    <input
                        type="text"
                        placeholder="Enter Email"
                        className="mt-10 outline-0 h-14 w-96 border border-[gray] pl-4 ml-4 rounded-sm" value={email} onChange={(e) => {
                            setemail(e.target.value);
                        }}
                    />
                    </div>
                    <div className="flex text-center justify-center">
                    <button className="text-[white] bg-[#0369a8] h-14 w-96 text rounded-md mt-10 ml-4 font-bold" onClick={handlesubmit}>
                        Resend Password
                    </button>
                    </div>
                
                    <div className="flex flex-col pl-14 mt-5">
                        <div className="text-[#0369a8] text-center underline">Return to Signin</div>
                        <div className="text-[#0369a8] text-center underline "> Don't have an Account </div>
                    </div>
                </div>
            <Footer />
        </>
    );
};

export default ForgetPassword;
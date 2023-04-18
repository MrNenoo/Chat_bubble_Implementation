import React from 'react'

const About = () => {
    return (
        <>
            <div className="ml-72 mb-10 p-5 shadow-2xl mt-5" style={{
                height: "614px",
                width: "430px"
            }}>
                <div className="grid grid-rows-1 grid-cols-4 text-center justify-center pb-5">
                    <div className="bg-blue-400 h-5" style={{ borderRadius: "50%" }}></div>
                    <div className="bg-blue-400 h-5" style={{ borderRadius: "50%" }}></div>
                    <div className="bg-blue-400 h-5" style={{ borderRadius: "50%" }}></div>
                    <div className="bg-blue-400 h-5" style={{ borderRadius: "50%" }}></div>
                </div>
                <div className="text-[#0369a8] text-2xl font-normal">What's We Actually Do</div>
                <p className="text-[#3F4547] hover:underline font-bold text-l pt-3">We are Fintech company that help to you to make your trading Easy and Flexible</p>
                <div className="text-[#0369a8] text-2xl font-normal pt-3">What We Actually do on Trading?</div><br />
                <p className=" text-[#3F4547] hover:underline font-bold text-l pt-1">We have a lot of historical data from which we find the best strategy for you that make you to choice a better strategies.</p><br /><hr />
                <p className="text-[#3F4547] hover:underline font-bold text-xl pt-1">From a lot of Big Trader Review,It's find that our Software is working with 99% Accuracy with No loss.</p>
                <div className="text-[#3F4547] hover:underline font-bold text-l pt-3">About Strategies</div>
                <div className="pt-2 text-sm">There is a lot of predefined Strategies where we get profit on using some predefined strategies that makes our decision to earn more money on trading market.We can play with without fear of loss.</div>
                <div className="pt-2 text-[#0369a8] underline text-sm">Learn More</div>
            </div>
        </>
    )
}

export default About
import React, { useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios'
import { Button } from '@mui/material';
import logo from './../logo.png'
import NavbarVersion2 from './NavbarVersion2';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Result from './Result';
import GamepadIcon from '@mui/icons-material/Gamepad';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { ArrowLeftOutlined } from '@mui/icons-material';
import PixIcon from '@mui/icons-material/Pix';



const BacktestVersion3 = () => {
    const [leg, setleg] = useState("1")
    const [lotarray, setlotarray] = useState([])
    const [legarray, setlegarray] = useState([])
    const [darray, setdarray] = useState([])
    const [dIncrement, setdincrement] = useState("1")
    const [dIncrementarray, setdincrementarray] = useState([])
    const [t, sett] = useState("1")
    const [tarray, settarray] = useState([])
    const [intraday, setintraday] = useState("Yes")
    const [tradesymbol, settradesymbol] = useState(['NIFTY'])
    const [gap, setgap] = useState(100)
    const [stoplosslower, setstoplosslower] = useState(1000)
    const [stoplossupper, setstoplossupper] = useState(1000)
    const [stoplosssteps, setstoplosssteps] = useState(1000)
    const [maxprofitupper, setmaxprofitupper] = useState(1000)
    const [maxprofitlower, setmaxprofitlower] = useState(1000)
    const [maxprofitsteps, setmaxprofitsteps] = useState(1000)
    const [halt, sethalt] = useState("Yes")
    const [investment, setinvestment] = useState(1000000)
    const [starttime, setStartTime] = useState("09:30")
    const [endtime, setEndTime] = useState("15:25")
    const [startdate, setstartdate] = useState("2020-01-06")
    const [enddate, setEndDate] = useState("2020-01-09")
    const [firstexpirydate, setfirstexpirydate] = useState([])
    const [expiryFixed, setExpiryfixed] = useState([])
    const [incrementexpiry, setincrementexpriy] = useState([])
    const [fixedRate, setFixedRate] = useState("Yes")
    const [rate, setRate] = useState(0.1)
    const [timeGroups, setTimeGroups] = useState("1")
    const [startTimeArray, setStartTimeArray] = useState([])
    const [endTimeArray, setEndTimeArray] = useState([])
    const [foldername, setFolderName] = useState("Atul Kesharwani");
    const [symboldata, setsymboldata] = useState(['NIFTY'])
    const [loader, setloader] = useState(false)
    const [lot, setlot] = useState(1)
    const [expirytype, setexpirytype] = useState("Weekly")
    const [color, setcolor] = useState("black")
    const [color1, setcolor1] = useState("")
    const [intracolory, setintracolory] = useState("black")
    const [intracolorn, setintracolorn] = useState("")
    const [fixedratey, setfixedratey] = useState('black')
    const [fixedraten, setfixedraten] = useState('')
    const [expiryfixedy, setexpiryfixedy] = useState('black')
    const [expiryfixedn, setexpiryfixedn] = useState('')
    const [traden, settraden] = useState('black')
    const [tradeb, settradeb] = useState('')
    const [halty, sethalty] = useState('black')
    const [haltn, sethaltn] = useState("")
    const [atm, setatm] = useState([])
    const [strategies, setStrategies] = useState("")
    const [lotarray1, setlotarray1] = useState([])
    const [point, setpoint] = useState([])
    const pointarray = ["ATM-600","ATM-500","ATM-400","ATM-300", "ATM-200", "ATM-100", "ATM", "ATM+100", "ATM+200", "ATM+300", "ATM+400","ATM+500","ATM+600"];
    const percentarray = ["ATM-5%","ATM-4%","ATM-3%", "ATM-2%", "ATM-1%","ATM-0.5%","ATM+0%","ATM+0.5%" ,"ATM+1%", "ATM+2%", "ATM+3%", "ATM+4%","ATM+5%"]
    // const [response,setresponse]=useState(false)
    const [a,seta]=useState([])
    const [b,setb]=useState([])
    const [c,setc]=useState([])
    const [d,setd]=useState([])
    const [e,sete]=useState([])
    const [f,setf]=useState([])
    const [g,setg]=useState([])
    const [h,seth]=useState([])
    const [i,seti]=useState([])
    const [atmtype,setatmtype]=useState("point")

    function onhandlesubmit(e) {
        e.preventDefault();
        setloader(true)
        if (tradesymbol[0] === 'NIFTY') {
            const array = lotarray.map((item, key) => {
                return item * 50;
            })
            console.log(array)
            setlotarray1(array);
        } else {
            const array = lotarray.map((item, key) => {
                return item * 25;
            })
            console.log(array)
            setlotarray1(array);
        }
        const inputdata = []
        atm.map((item, key) => {
            let s1 = item.substr(3, item.length);
            if (s1 === '')
                s1 = '0';
            inputdata.push(s1);
            return (
                item.substr(3, item.length)
            )
        })
        setdarray(inputdata);

        const data = {
            leg, lotarray1, legarray, darray, dIncrement, dIncrementarray, t, tarray, intraday,
            tradesymbol, gap, stoplosslower, stoplossupper, stoplosssteps,
            maxprofitupper, maxprofitlower, maxprofitsteps,
            halt, investment, starttime, endtime, startdate, enddate, firstexpirydate,
            expiryFixed, incrementexpiry, fixedRate, rate,
            timeGroups, startTimeArray, endTimeArray, foldername,point
        };

        console.log(data);

        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:5000/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (res) {
                const response=res.data;
                console.log("result",response)
                if(response)
                {
                    seta(JSON.parse(response.a))
                    setb(JSON.parse(response.b))
                    setc(JSON.parse(response.c))
                    setd(JSON.parse(response.e))
                    sete(JSON.parse(response.f))
                    setf(JSON.parse(response.g))
                    setg(JSON.parse(response.h))
                    seth(JSON.parse(response.i))
                    seti(JSON.parse(response.j))
                    // setresponse(true)
                }
                setloader(false);
                // navigate('/success');
            })
            .catch(function (error) {
                console.log(error)
                setloader(false)
            });

    }

    useEffect(() => {
        if (leg === "") {

        } else {
            setlegarray(Array(parseInt(leg)).fill("SC"));
            setlotarray(Array(parseInt(leg)).fill(1));
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            setExpiryfixed(Array(parseInt(leg)).fill("No"))
            setincrementexpriy(Array(parseInt(leg)).fill("7"))
            setatm(Array(parseInt(leg)).fill("ATM"))
            setpoint(Array(parseInt(leg)).fill(true))
            setdincrementarray(Array(parseInt(leg)).fill("100"))
            setdarray(Array(parseInt(leg)).fill("100"))
            setlotarray1(Array(parseInt(leg)).fill(100));   
        }
    }, [leg]);
   
    useEffect(() => {
        if (t === "") {

        } else {
            settarray(Array(parseInt(t)).fill(100))
        }
    }, [t])

    useEffect(() => {
        if (timeGroups === "") {

        } else {
            setStartTimeArray(Array(parseInt(timeGroups)).fill("09:30"))
            setEndTimeArray(Array(parseInt(timeGroups)).fill("15:25"))
        }
    }, [timeGroups])

    const handleSymbol = async () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:5000/symbol',
        };
        try {
            const response = await axios(config);
            if (response.data)
                setsymboldata(response.data)


        } catch (error) {
            console.log("error" + error);
        }
    }
    useEffect(() => {
        handleSymbol();
    }, [])
   
    useEffect(() => {
        if (strategies === 'shortstraddle') {
            setlegarray(["SP", "SC"]);
            setlot([1, 1])
            setatm(["ATM", "ATM"])
            setincrementexpriy(['7', '7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            setdarray(["100","100"]);
            setlotarray1(["100","100"]);
        } else if (strategies === 'longstraddle') {
            setlot([1, 1])
            setlegarray(["BP", "BC"]);
            setatm(["ATM", "ATM"])
            setincrementexpriy(['7', '7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            setdarray(["100","100"]);
            setlotarray1(["100","100"]);
        } else if (strategies === 'shortstrangle') {
            setlot([1, 1])
            setlegarray(["SP", "SC"]);
            setatm(["ATM-200", "ATM+200"])
            setincrementexpriy(['7', '7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            setdarray(["100","100"]);
            setlotarray1(["100","100"]);
        } else if (strategies === 'longstrangle') {
            setlot([1, 1])
            const input_data = ["BC", "BP"]
            setlegarray(input_data);
            setatm(["ATM-200", "ATM+200"])
            setincrementexpriy(['7', '7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            setdarray(["100","100"]);
            setlotarray1(["100","100"]);
        } else if (strategies === 'ironbutterfly') {
            setlot([1, 1, 1, 1])
            const input_data = ['BP', 'SC', 'SP', 'BC']
            console.log(input_data)
            setlegarray(input_data);
            setincrementexpriy(['7', '7', '7', '7'])
            setatm(["ATM-200", "ATM", "ATM", "ATM+200"])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            setdarray(["100","100","100","100"]);
            setlotarray1(["100","100","100","100"]);
        } else if (strategies === 'ironcondors') {
            setlot([1, 1, 1, 1])
            setlegarray(["BP", "SP", "SC", "BC"]);
            setatm(["ATM-200", "ATM-100", "ATM+100", "ATM+200"])
            setincrementexpriy(['7', '7', '7', '7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            setdarray(["100","100","100","100"]);
            setlotarray1(["100","100","100","100"]);
        } else {
            setlot([1])
            setlegarray(["BP"]);
            setatm(["ATM-200"])
            setincrementexpriy(['7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            setdarray(["100"]);
            setlotarray1(["100"]);
        }
    }, [strategies])
    
    return (
        <div className='flex flex-row mb-10 text-black'>
                <div className="" style={{backgroundColor: "white",width:"16%"}}>
                <img src={logo} alt="logo" className="p-3"/>
                <div className="p-6 mt-10 hover:bg-[#e9effa] rounded" onClick={() => { setleg(2); setStrategies("shortstraddle") }}><ArrowRightAltIcon/> Short Straddle</div>
                <div className="p-6  hover:bg-[#e9effa] rounded" onClick={() => { setleg(2); setStrategies("longstraddle") }}><ArrowRightAltIcon/>  Long Straddle</div>
                <div className="p-6  hover:bg-[#e9effa] rounded" onClick={() => { setleg(2); setStrategies("shortstrangle") }}><ArrowRightAltIcon/>  Short Strangle</div>
                <div className="p-6  hover:bg-[#e9effa] rounded" onClick={() => { setleg(2); setStrategies("longstrangle") }}><ArrowLeftOutlined/>  Long Strangle</div>
                <div className="p-6  hover:bg-[#e9effa] rounded" onClick={() => { setleg(4); setStrategies("ironbutterfly") }}><GamepadIcon/> Iron Butterfly</div>
                <div className="p-6  hover:bg-[#e9effa] rounded" onClick={() => { setleg(4); setStrategies("ironcondors") }}><AcUnitIcon/>  Iron Condor</div>
                <div className="p-6 hover:bg-[#e9effa] rounded" onClick={() => { setleg(4); setStrategies("shortatm") }}><GamepadIcon/>  Short ATM +/-1%</div>
                <div className="p-6  hover:bg-[#e9effa] rounded" onClick={() => { setleg(4); setStrategies("shortcp") }}><PixIcon/>  Short CP 100</div>
                <div className="p-6  hover:bg-[#e9effa] rounded" onClick={() => { setleg(4); setStrategies("shortcpsp") }}><GamepadIcon/>  Short CP As 25%SP</div>
                <div className="p-6  hover:bg-[#e9effa] rounded" onClick={() => { setleg(4); setStrategies("expirydaystrategies") }}><AcUnitIcon/>  Expiry Day Strategy</div>
                <div className="p-6  hover:bg-[#e9effa] rounded mt-60" ><LogoutIcon/>Logout</div>
            </div>
            <div className="font-bold" style={{ backgroundColor:"#e9effa",color:"#98979b",width:"84%"}}>
                <NavbarVersion2/>
                <div className="grid grid-cols-6 mt-10 bg-white rounded-xl mr-5 ml-5 pb-5 max-md:grid-cols-3" style={{color:"#98979b"}}>
                    <div className="flex flex-col">
                        <div className="mt-3  text-center font-normal">
                            Trade Symbols
                        </div>
                        <div className="grid grid-cols-2 text-center justify-center mt-2 ml-10 mr-10 w-36  rounded-xl">
                            <div style={{ color: traden , borderColor : traden}} className="rounded-l-xl h-8  border-solid border-2" onClick={() => { settradeb(""); settraden("black"); settradesymbol(["NIFTY"]) }}>
                                Nifty
                            </div>
                            <div style={{ color: tradeb , borderColor : tradeb}} className="rounded-r-xl h-8 border-solid border-2" onClick={() => { settraden(""); settradeb("black"); settradesymbol(["BANKNIFTY"]) }}>
                                BankNifty
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-3 text-center font-normal">
                            Expiry Type
                        </div>
                        <div className="grid grid-cols-2 text-center justify-center mt-2 ml-10 mr-10 w-36  rounded-xl">
                            <div style={{ color: color,borderColor:color }} className="rounded-l-xl h-8 border-solid border-2" onClick={()=>{setcolor1(""); setcolor("black");color==='black'?setexpirytype("Weekly"):setexpirytype("Monthly")}}>
                                Weekly
                            </div>
                            <div style={{ color: color1,borderColor:color1 }} className="rounded-r-xl h-8 border-solid border-2" onClick={()=>{setcolor1("black"); setcolor("");color==='black'?setexpirytype("Weekly"):setexpirytype("Monthly")}}>
                                Monthly
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-3 text-center font-normal">
                            Intraday
                        </div>
                        <div className="grid grid-cols-2 text-center justify-center mt-2 ml-10 mr-10 w-36  rounded-xl">
                            <div style={{ color: intracolory,borderColor:intracolory }} className="rounded-l-xl h-8 border-solid border-2 " onClick={() => { setintracolorn(""); setintracolory("black"); intracolory==='black'?setintraday("Yes"):setintraday("No") }}>
                                Yes
                            </div>
                            <div style={{ color: intracolorn,borderColor:intracolorn }} className="rounded-r-xl h-8 border-solid border-2 " onClick={() => { setintracolory(""); setintracolorn("black"); intracolory==='black'?setintraday("Yes"):setintraday("No") }}>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-3 text-center font-normal">
                            halt
                        </div>
                        <div className="grid grid-cols-2 text-center justify-center mt-2 ml-10 mr-10 w-36  rounded-xl">
                            <div style={{ color: halty,borderColor:halty}} className="rounded-l-xl h-8 border-solid border-2" onClick={() => { sethalty("black"); sethaltn(""); halty==='black'?sethalt("Yes"):sethalt("No") }}>
                                Yes
                            </div>
                            <div style={{ color: haltn,borderColor:haltn }} className="rounded-r-xl h-8 border-solid border-2" onClick={() => { sethaltn("black"); sethalty(""); halty==='black'?sethalt("Yes"):sethalt("No") }}>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-3 text-center font-normal">
                            Fixed Rate
                        </div>
                        <div className="grid grid-cols-2 text-center justify-center mt-2 ml-10 mr-10 w-36  rounded-xl">
                            <div style={{ color: fixedratey,borderColor:fixedratey }} className="rounded-l-xl h-8 border-solid border-2" onClick={() => { setfixedraten(""); setfixedratey("black"); fixedratey==="black"?setFixedRate("Yes"):setFixedRate("No") }}>
                                Yes
                            </div>
                            <div style={{ color: fixedraten,borderColor:fixedraten}} className="rounded-r-xl h-8 border-solid border-2" onClick={() => { setfixedratey(""); setfixedraten("black"); fixedratey==="black"?setFixedRate("Yes"):setFixedRate("No") }}>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-3 text-center font-normal">
                            Expiry Fixed
                        </div>
                        <div className="grid grid-cols-2 text-center justify-center mt-2 ml-10 mr-10 w-36  rounded-xl">
                            <div style={{ color: expiryfixedy,borderColor:expiryfixedy }} className="rounded-l-xl h-8 border-solid border-2" onClick={() => { setexpiryfixedn(""); setexpiryfixedy("black"); expiryfixedy==='black'?setExpiryfixed("Yes"):setExpiryfixed("No") }}>
                                Yes
                            </div>
                            <div style={{ color: expiryfixedn,borderColor:expiryfixedn }} className="rounded-r-xl h-8 border-solid border-2" onClick={() => { setexpiryfixedy(""); setexpiryfixedn("black"); expiryfixedy==='black'?setExpiryfixed("Yes"):setExpiryfixed("No") }}>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  bg-inherit">
                        <div className="mt-3 text-center font-normal">
                            value of T
                        </div>
                        <input type="text" className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2 " value={t} onChange={(e) => { sett(e.target.value); }}></input>

                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 text-center font-normal">
                            Investment
                        </div>
                        <input type="text" className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2 " value={investment} onChange={(e) => { setinvestment(e.target.value); }}></input>

                    </div>

                    <div className="flex flex-col ">
                        <div className="mt-3 text-center font-normal">
                            Dincrement
                        </div>
                        <input type="number" className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2 " value={dIncrement} onChange={(e) => {
                            setdincrement(e.target.value);
                        }}></input>

                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 text-center font-normal">
                            Leg
                        </div>
                        <input type="text" className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2 " value={leg} onChange={(e) => {
                            setleg(e.target.value);
                        }}></input>
                    </div>
                    
                    <div className="flex flex-col ">
                        <div className="mt-3 text-center font-normal">
                            Gaps
                        </div>
                        <input type="text" value={gap} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setgap(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 text-center font-normal">
                            Rate
                        </div>
                        <input type="text" value={rate} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setRate(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 text-center font-normal">
                            Start Time
                        </div>
                        <input type="time" value={starttime} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setStartTime(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 text-center font-normal">
                            End Time
                        </div>
                        <input type="time" value={endtime} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setEndTime(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 text-center font-normal">
                            Start Date
                        </div>
                        <input type="date" value={startdate} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setstartdate(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 text-center font-normal">
                            End Date
                        </div>
                        <input type="date" value={enddate} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setEndDate(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 text-center font-normal">
                            No. Of Time Groups
                        </div>
                        <input type="text" value={timeGroups} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setTimeGroups(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 text-center font-normal">
                            Folder Name
                        </div>
                        <input type="text" className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2 " value={foldername} onChange={(e) => { setFolderName(e.target.value); }}></input>
                    </div>
                </div>
                {/* Now to handle the maximum profit loss and maximum profit upper*/}
                <div className="ml-5 mt-10 bg-white p-5 rounded-xl mr-5">
                    <div className="grid grid-cols-6 mb-2 max-md:grid-cols-2 max-md:mb-2">
                        <label className=" inline-block mr-10 font-normal" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>StopLoss lower limit:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-black w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1" value={stoplosslower} onChange={(e) => { setstoplosslower(e.target.value) }} ></input>
                        <label className=" inline-block mr-10 font-normal" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>StopLoss upper limit:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-black w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1 " value={stoplossupper} onChange={(e) => { setstoplossupper(e.target.value) }} ></input>
                        <label className=" inline-block mr-10 font-normal" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>StopLoss Steps size:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2 " value={stoplosssteps} onChange={(e) => { setstoplosssteps(e.target.value) }} ></input>
                    </div>
                    <hr className="bg-white mb-2"></hr>
                    <div className="grid grid-cols-6 max-md:grid-cols-2 max-md:mb-2">
                        <label className=" inline-block mr-10 font-normal" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>MaxProfit lower limit:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-black w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1" value={maxprofitupper} onChange={(e) => { setmaxprofitupper(e.target.value) }} ></input>
                        <label className=" inline-block mr-10 font-normal" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>MaxProfit upper limit:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-black w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1" value={maxprofitlower} onChange={(e) => { setmaxprofitlower(e.target.value) }} ></input>
                        <label className=" inline-block mr-10 font-normal" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>MaxProfit Steps size:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2 " value={maxprofitsteps} onChange={(e) => { setmaxprofitsteps(e.target.value) }}  ></input>
                    </div>
                </div>
                {/* No. of turn to  handle array of T that is threshold */}
                <h3 className="text-center mt-2
                 text-black">Threshold Array</h3>
                <div className="ml-5 mt-2 bg-white  p-5 rounded-xl mr-5 flex flex-row">
                    {
                        tarray.map((item, key) => {
                            return (
                                <div className="flex flex-row">
                                    <div className="font-normal mr-5">{key + 1}.</div>
                                    <input type="text" className="h-8  bg-inherit outline-0 border-black w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1" value={maxprofitupper} onChange={(e) => {
                                        const inputdata = [...tarray]
                                        inputdata[key] = e.target.value;
                                        settarray(inputdata);
                                    }} ></input>
                                </div>)
                        })
                    }
                </div>
                {/* Here,We will handle the Strategy Data*/}
                <h3 className="text-center mt-2 text-black">No. Of Times You want to iterate over D</h3>
                <div className="ml-5 mt-2  bg-white p-5 rounded-xl mr-5 flex flex-row">
                    {
                        dIncrementarray.map((item, key) => {
                            return (
                                <div className="flex flex-row">
                                    <div className="font-normal mr-5">{key + 1}.</div>
                                    <input type="text" className="h-8  bg-inherit outline-0 border-black w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1" value={item} onChange={(e) => {
                                        const inputdata = [...dIncrement];
                                        inputdata[key] = e.target.value;
                                        setdincrementarray(inputdata);
                                    }} ></input>
                                </div>
                            )
                        })
                    }
                </div>
                {/* Now turn of handle Legs */}
                <h3 className="text-center mt-5 text-black">{strategies}</h3>
                {
                    legarray.map((item, key) => {
                        return (
                            <div className="flex flex-col bg-white rounded-xl ml-5 mt-2 mb-5 mr-5">
                                <div className=" flex flex-row pb-5 ml-5 mr-5 mb-5 overflow-x-auto bg-inherit">
                                    <div className="flex flex-row ">
                                        <div className="mt-12  text-center font-bold">
                                            Leg {key + 1}.
                                        </div>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="mt-5 ml-5 text-center font-normal">
                                            Lot
                                        </div>
                                        <input type="number" value={lotarray[key]} className="h-8 mt-2 ml-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2" onChange={(e) => {
                                            const inputdata = [...lotarray]
                                            inputdata[key] = e.target.value;
                                            setlotarray(inputdata)
                                        }}></input>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="mt-5 ml-5 text-center font-normal">
                                            Option
                                        </div>
                                        <Select
                                            value={legarray[key]}
                                            className="h-8  bg-inherit text-white border-spacing-7 w-36 mt-2 ml-5 border-solid border-black  border-2 rounded-xl"
                                            style={{ borderRadius: "0.75rem" }}
                                            onChange={(e) => {
                                                const inputdata = [...legarray]
                                                inputdata[key] = e.target.value;
                                                setlegarray(inputdata)
                                            }}
                                        >
                                            <MenuItem className="text-black" value="SC">SC</MenuItem>
                                            <MenuItem className="text-black" value="SP">SP</MenuItem>
                                            <MenuItem className="text-black" value="BC">BC</MenuItem>
                                            <MenuItem className="text-black" value="BP">BP</MenuItem>
                                        </Select>                   </div>
                                        <div className="flex flex-col ">
                                        <div className="mt-5 ml-5 text-center font-normal">
                                            ATM 
                                        </div>
                                        <div className="flex flex-row">
                                        <Select
                                            value={atmtype}
                                            className="h-8 mt-2 ml-10 outline-0 border-black  text-center border-solid rounded-l-xl border-2 bg-inherit border-spacing-7 w-28"
                                            style={{ borderRadius: "0.75rem" }}
                                            onChange={(e) => {
                                                setatmtype(e.target.value)
                                            }}
                                        >
                                          <MenuItem className="text-black" value="percent">ATM %</MenuItem>
                                          <MenuItem className="text-black" value="point">ATM </MenuItem>
                                        </Select>
                                        <Select
                                            value={atm[key]}
                                            className="h-8 mt-2 outline-0 border-black  text-center border-solid rounded-r-xl border-2 bg-inherit border-spacing-7 w-28"
                                            style={{ borderRadius: "0.75rem" }}
                                            onChange={(e) => {
                                                const inputdata = [...atm]
                                                inputdata[key] = e.target.value;
                                                setatm(inputdata)
                                                console.log(atm);
                                            }}
                                        >
                                            {
                                                atmtype==='point' && pointarray.map((item, key) => {
                                                    return (<MenuItem className="text-black" value={item}>{item}</MenuItem>)
                                                })

                                            }
                                            {
                                                atmtype==='percent' && percentarray.map((item,key)=>{
                                                    return (<MenuItem className="text-black" value={item}>{item}</MenuItem>)
                                                }) 
                                            }
                                        </Select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="mt-5 ml-5 text-center font-normal">
                                            Expiry Time
                                        </div>
                                        <input type="date" value={firstexpirydate[key]} className="h-8 mt-2 ml-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2" onChange={(e) => {
                                            const inputdata = [...firstexpirydate]
                                            inputdata[key] = e.target.value;
                                            setfirstexpirydate(inputdata)
                                        }}></input>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="mt-5 ml-5 text-center font-normal">
                                            Increment Expiry

                                        </div>
                                        <Select
                                            value={incrementexpiry[key]}
                                            label=""
                                            className=
                                            "h-8 mt-2 ml-10 outline-0 border-black  text-center border-solid rounded-xl border-2 bg-inherit border-spacing-7 w-36"
                                            onChange={(e) => {
                                                const inputdata = [...incrementexpiry]
                                                inputdata[key] = e.target.value;
                                                setincrementexpriy(inputdata)
                                            }}
                                            style={{ borderRadius: "0.75rem" }}
                                        >
                                            <MenuItem className="text-black" value="7">7</MenuItem>
                                            <MenuItem className="text-black" value="14">14</MenuItem>
                                            <MenuItem className="text-black" value="21">21</MenuItem>
                                            <MenuItem className="text-black" value="28">28</MenuItem>
                                        </Select>                        </div>
                                </div>
                            </div>
                        )
                    })
                }
                <h3 className="text-center text-black">No. of Time Groups</h3>
                <div className="ml-5 mt-2 mb-10 bg-white p-5 rounded-xl mr-5 grid grid-cols-2">

                    <div className="grid grid-cols-1 gap-1 overflow-x-hidden overflow-y-auto h-10 mr-4 max-md:mb-1">
                        {
                            startTimeArray.map((item, key) => {
                                return (
                                    <div className="flex flex-row max-md:grid max-md:grid-cols-2">
                                        <h3 className="font-bold mr-10 mt-2">{key + 1}.</h3>
                                        <label className=" inline-block mr-24 mt-2 font-normal" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>Start Time:</label>
                                        <input type="time" placeholder="Start Time" className="h-8 mt-2 ml-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2 " required value={item} sx={{ marginRight: "10px" }} variant="outlined" onChange={(e) => {
                                            const inputdata = [...startTimeArray];
                                            inputdata[key] = e.target.value;
                                            setStartTimeArray(inputdata);
                                        }} ></input>
                                    </div>
                                )
                            })

                        }
                    </div>
                    <div className="grid grid-cols-1 gap-1 overflow-x-hidden overflow-y-auto h-10 mr-4  max-md:mb-1 ">
                        {
                            endTimeArray.map((item, key) => {
                                return (
                                    <div className="flex flex-row max-md:grid max-md:grid-cols-2">
                                        <h3 className="font-bold mr-10 mt-2">{key + 1}.</h3>
                                        <label className=" inline-block mr-24 mt-2 font-normal" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>End Time:</label>
                                        <input type="time" className="h-8 mt-2 ml-10 bg-inherit outline-0 border-black w-36 text-center border-solid rounded-xl border-2 max-md:mb-1" required value={item} variant="outlined" onChange={(e) => {
                                            const inputdata = [...endTimeArray]
                                            inputdata[key] = e.target.value;
                                            setEndTimeArray(inputdata)
                                        }} ></input>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Button variant="contained" value="Backtest" sx={{ marginLeft: "500px", marginBottom: "20px" }} onClick={onhandlesubmit}>Backtest</Button>
                <Result a={a} b={b} c={c} d={d} e={e} f={f} g={g} h={h} i={i}/>
         </div>
        </div>
    )
}
export default BacktestVersion3

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios'
import { Button } from '@mui/material';


const Backtest_version2 = () => {
    const navigate = useNavigate()
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
    const [strikeprice, setstrikeprice] = useState("ATM")
    const [expirytype, setexpirytype] = useState("Weekly")
    const [color, setcolor] = useState("#6BA0EE")
    const [color1, setcolor1] = useState("")
    const [intracolory, setintracolory] = useState("#6BA0EE")
    const [intracolorn, setintracolorn] = useState("")
    const [fixedratey, setfixedratey] = useState('#6BA0EE')
    const [fixedraten, setfixedraten] = useState('')
    const [expiryfixedy, setexpiryfixedy] = useState('#6BA0EE')
    const [expiryfixedn, setexpiryfixedn] = useState('')
    const [traden, settraden] = useState('#6BA0EE')
    const [tradeb, settradeb] = useState('')
    const [halty, sethalty] = useState('#6BA0EE')
    const [haltn, sethaltn] = useState("")
    const [scolor, setscolor] = useState("")
    const [scolor1, setscolor1] = useState("white")
    const [atm, setatm] = useState([])
    const [strategies, setStrategies] = useState("")
    const [lotarray1, setlotarray1] = useState([])
    const [point, setpoint] = useState([])
    const pointarray = ["ATM-300", "ATM-200", "ATM-100", "ATM", "ATM+100", "ATM+200", "ATM+300", "ATM+400"];
    const percentarray = ["ATM+3%", "ATM+2%", "ATM+2%", "ATM+0%", "ATM+1%", "ATM+2%", "ATM+3%", "ATM+4%"]


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
        setdarray(Array(parseInt(leg)).fill(100));
        atm.map((item, key) => {
            let s1 = item.substr(3, item.length);
            if (s1 === '')
                s1 = '0';
            inputdata.push(s1);
            return (
                item.substr(3, item.length)
            )
        })
        console.log(atm);
        setdarray(inputdata);
        const data = {
            leg, lotarray1, legarray, darray, dIncrement, dIncrementarray, t, tarray, intraday,
            tradesymbol, gap, stoplosslower, stoplossupper, stoplosssteps,
            maxprofitupper, maxprofitlower, maxprofitsteps,
            halt, investment, starttime, endtime, startdate, enddate, firstexpirydate,
            expiryFixed, incrementexpiry, fixedRate, rate,
            timeGroups, startTimeArray, endTimeArray, foldername
        };
        console.log(data);
        console.log(strikeprice, lot, expirytype)

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
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setloader(false);
                navigate('/success');
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
        }
    }, [leg]);

    useEffect(() => {
        if (dIncrement === "") {

        } else {
            setdincrementarray(Array(parseInt(dIncrement)).fill(100))
        }
    }, [dIncrement]);

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
            console.log(legarray)
            setincrementexpriy(['7', '7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
        } else if (strategies === 'longstraddle') {
            setlot([1, 1])
            setlegarray(["BP", "BC"]);
            setatm(["ATM", "ATM"])
            setincrementexpriy(['7', '7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
        } else if (strategies === 'shortstrangle') {
            setlot([1, 1])
            setlegarray(["SP", "SC"]);
            setatm(["ATM-200", "ATM+200"])
            setincrementexpriy(['7', '7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
        } else if (strategies === 'longstrangle') {
            setlot([1, 1])
            const input_data = ["BC", "BP"]
            setlegarray(input_data);
            setatm(["ATM-200", "ATM+200"])
            setincrementexpriy(['7', '7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))

        } else if (strategies === 'ironbutterfly') {
            setlot([1, 1, 1, 1])
            const input_data = ['BP', 'BC', 'SP', 'SC']
            console.log(input_data)
            setlegarray(input_data);
            setincrementexpriy(['7', '7', '7', '7'])
            setatm(["ATM-200", "ATM", "ATM", "ATM+200"])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            console.log(legarray)
        } else if (strategies === 'ironcondors') {
            setlot([1, 1, 1, 1])
            setlegarray(["BP", "SP", "SC", "BC"]);
            setatm(["ATM-200", "ATM-100", "ATM+100", "ATM+200"])
            setincrementexpriy(['7', '7', '7', '7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            console.log(legarray)
        } else {
            setlot([1])
            setlegarray(["BP"]);
            setatm(["ATM-200"])
            setincrementexpriy(['7'])
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            console.log(legarray)
        }
    }, [strategies])


    useEffect(() => {

    }, [color])
    const handlenifty = () => {
        setcolor1(""); setcolor("#6BA0EE");
        console.log(color);
        console.log(color1)
    }
    const handlebanknifty = () => {
        setcolor(""); setcolor1("#6BA0EE");
        console.log(color);
        console.log(color1)
    }

    return (
        <div className='flex flex-row w-screen mt-2 mb-10 text-black'>
            <div className="ml-10 w-1/6 mt-10  border-r-2 " style={{ backgroundColor: "white" }}>
                <div className="p-4 mt-10 hover:bg-sky-700" onClick={() => { setleg(2); setStrategies("shortstraddle") }}>Short Straddle</div>
                <div className="p-4  hover:bg-sky-700" onClick={() => { setleg(2); setStrategies("longstraddle") }}>Long Straddle</div>
                <div className="p-4  hover:bg-sky-700" onClick={() => { setleg(2); setStrategies("shortstrangle") }}>Short Strangle</div>
                <div className="p-4  hover:bg-sky-700" onClick={() => { setleg(2); setStrategies("longstrangle") }}>Long Strangle</div>
                <div className="p-4  hover:bg-sky-700" onClick={() => { setleg(4); setStrategies("ironbutterfly") }}>Iron Butterfly</div>
                <div className="p-4  hover:bg-sky-700" onClick={() => { setleg(4); setStrategies("ironcondors") }}> Iron Condor</div>
                <div className="p-4 hover:bg-sky-700" onClick={() => { setleg(4); setStrategies("shortatm") }}>Short ATM +/-1%</div>
                <div className="p-4  hover:bg-sky-700" onClick={() => { setleg(4); setStrategies("shortcp") }}>Short CP 100</div>
                <div className="p-4  hover:bg-sky-700" onClick={() => { setleg(4); setStrategies("shortcpsp") }}>Short CP As 25%SP</div>
                <div className="p-4  hover:bg-sky-700" onClick={() => { setleg(4); setStrategies("expirydaystrategies") }}>Expiry Day Strategy</div>
            </div>
            <div className="mt-10 mr-10 w-5/6" style={{ backgroundColor: "white" }}>
                <h1 className="text-center mt-5 text-3xl">Backtesting Strategy</h1>
                <div className="grid grid-cols-6 mt-2 border-4 border-solid rounded-xl mr-5 ml-5 pb-5">
                    <div className="flex flex-col">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Trade Symbols
                        </div>
                        <div className="grid grid-cols-2 text-center justify-center mt-2 ml-10 mr-10 w-36 border-solid border-2 rounded-xl border-slate-500">
                            <div style={{ backgroundColor: traden }} className="rounded-l-xl h-8" onClick={() => { settradeb(""); settraden("#6BA0EE"); settradesymbol(["NIFTY"]) }}>
                                Nifty
                            </div>
                            <div style={{ backgroundColor: tradeb }} className="rounded-r-xl h-8" onClick={() => { settraden(""); settradeb("#6BA0EE"); settradesymbol(["BANKNIFTY"]) }}>
                                BankNifty
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Expiry Type
                        </div>
                        <div className="grid grid-cols-2 mt-2 ml-10 mr-10 w-36 border-solid border-2 rounded-xl border-slate-500 text-center justify-center">
                            <div style={{ backgroundColor: color }} className="rounded-l-xl h-8" onClick={handlenifty}>
                                Weekly
                            </div>
                            <div style={{ backgroundColor: color1 }} className="rounded-r-xl h-8" onClick={handlebanknifty}>
                                Monthly
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Intraday
                        </div>
                        <div className="grid grid-cols-2 mt-2 ml-10 mr-10 w-36 border-solid rounded-xl border-2 border-slate-500 text-center justify-center">
                            <div style={{ backgroundColor: intracolory }} className="rounded-l-xl h-8" onClick={() => { setintracolorn(""); setintracolory("#6BA0EE"); setintraday("Yes") }}>
                                Yes
                            </div>
                            <div style={{ backgroundColor: intracolorn }} className="rounded-r-xl h-8" onClick={() => { setintracolory(""); setintracolorn("#6BA0EE"); setintraday("Yes") }}>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            halt
                        </div>
                        <div className="grid grid-cols-2 mt-2 ml-10 mr-10 w-36 border-solid rounded-xl border-2 border-slate-500 text-center justify-center">
                            <div style={{ backgroundColor: halty }} className="rounded-l-xl h-8" onClick={() => { sethalty("#6BA0EE"); sethaltn(""); sethalt("Yes") }}>
                                Yes
                            </div>
                            <div style={{ backgroundColor: haltn }} className="rounded-r-xl h-8" onClick={() => { sethaltn("#6BA0EE"); sethalty(""); sethalt("Yes") }}>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Fixed Rate
                        </div>
                        <div className="grid grid-cols-2 mt-2 ml-10 mr-10 w-36 border-solid rounded-xl border-2 border-slate-500 text-center justify-center">
                            <div style={{ backgroundColor: fixedratey }} className="rounded-l-xl h-8" onClick={() => { setfixedraten(""); setfixedratey("#6BA0EE"); setFixedRate("Yes") }}>
                                Yes
                            </div>
                            <div style={{ backgroundColor: fixedraten }} className="rounded-r-xl h-8" onClick={() => { setfixedratey(""); setfixedraten("#6BA0EE"); setFixedRate("Yes") }}>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Expiry Fixed
                        </div>
                        <div className="grid grid-cols-2 mt-2 ml-10 mr-10 w-36 border-solid rounded-xl border-2 border-slate-500 text-center justify-center">
                            <div style={{ backgroundColor: expiryfixedy }} className="rounded-l-xl h-8" onClick={() => { setexpiryfixedn(""); setexpiryfixedy("#6BA0EE"); setExpiryfixed("Yes") }}>
                                Yes
                            </div>
                            <div style={{ backgroundColor: expiryfixedn }} className="rounded-r-xl h-8" onClick={() => { setexpiryfixedy(""); setexpiryfixedn("#6BA0EE"); setExpiryfixed("Yes") }}>
                                No
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  bg-inherit">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            value of T
                        </div>
                        <input type="text" className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2 " value={t} onChange={(e) => { sett(e.target.value); }}></input>

                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Investment
                        </div>
                        <input type="text" className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2 " value={investment} onChange={(e) => { setinvestment(e.target.value); }}></input>

                    </div>

                    <div className="flex flex-col ">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Dincrement
                        </div>
                        <input type="number" className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2 " value={dIncrement} onChange={(e) => {
                            setdincrement(e.target.value);
                        }}></input>

                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Leg
                        </div>
                        <input type="text" className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2 " value={leg} onChange={(e) => {
                            setleg(e.target.value);
                        }}></input>
                    </div>
                    
                    <div className="flex flex-col ">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Gaps
                        </div>
                        <input type="text" value={gap} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setgap(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Rate
                        </div>
                        <input type="text" value={rate} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setRate(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Start Time
                        </div>
                        <input type="time" value={starttime} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setStartTime(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            End Time
                        </div>
                        <input type="time" value={endtime} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setEndTime(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Start Date
                        </div>
                        <input type="date" value={startdate} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setstartdate(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            End Date
                        </div>
                        <input type="date" value={enddate} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setEndDate(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            No. Of Time Groups
                        </div>
                        <input type="text" value={timeGroups} className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2" onChange={(e) => { setTimeGroups(e.target.value); }}></input>
                    </div>
                    <div className="flex flex-col ">
                        <div className="mt-3 ml-3 mr-10 text-l text-center">
                            Folder Name
                        </div>
                        <input type="text" className="h-8 mt-2 ml-10 mr-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2 " value={foldername} onChange={(e) => { setFolderName(e.target.value); }}></input>
                    </div>
                </div>
                {/* Now to handle the maximum profit loss and maximum profit upper*/}
                <div className="ml-5 mt-10 bg-inherit border-4 p-5 rounded-xl mr-5">
                    <div className="grid grid-cols-6 mb-2 max-md:grid-cols-2 max-md:mb-2">
                        <label className=" inline-block mr-10" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>StopLoss lower limit:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-slate-500 w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1" value={stoplosslower} onChange={(e) => { setstoplosslower(e.target.value) }} ></input>
                        <label className=" inline-block mr-12" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>StopLoss upper limit:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-slate-500 w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1 " value={stoplossupper} onChange={(e) => { setstoplossupper(e.target.value) }} ></input>
                        <label className=" inline-block mr-10" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>StopLoss Steps size:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2 " value={stoplosssteps} onChange={(e) => { setstoplosssteps(e.target.value) }} ></input>
                    </div>
                    <hr className="bg-white mb-2"></hr>
                    <div className="grid grid-cols-6 max-md:grid-cols-2 max-md:mb-2">
                        <label className=" inline-block mr-10" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>MaxProfit lower limit:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-slate-500 w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1" value={maxprofitupper} onChange={(e) => { setmaxprofitupper(e.target.value) }} ></input>
                        <label className=" inline-block mr-12" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>MaxProfit upper limit:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-slate-500 w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1" value={maxprofitlower} onChange={(e) => { setmaxprofitlower(e.target.value) }} ></input>
                        <label className=" inline-block mr-10" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>MaxProfit Steps size:</label>
                        <input type="text" className="h-8  bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2 " value={maxprofitsteps} onChange={(e) => { setmaxprofitsteps(e.target.value) }}  ></input>
                    </div>
                </div>
                {/* No. of turn to  handle array of T that is threshold */}
                <h1 className="text-center text-xl mt-2
                 text-black">Threshold Array</h1>
                <div className="ml-5 mt-2 bg-inherit border-4 p-5 rounded-xl mr-5 flex flex-row">
                    {
                        tarray.map((item, key) => {
                            return (
                                <div className="flex flex-row">
                                    <div className="font-bold mr-5">{key + 1}.</div>
                                    <input type="text" className="h-8  bg-inherit outline-0 border-slate-500 w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1" value={maxprofitupper} onChange={(e) => {
                                        const inputdata = [...tarray]
                                        inputdata[key] = e.target.value;
                                        settarray(inputdata);
                                    }} ></input>
                                </div>)
                        })
                    }
                </div>
                {/* Here,We will handle the Strategy Data*/}
                <h1 className="text-center text-xl mt-2 text-black">No. Of Times You want to iterate over D</h1>
                <div className="ml-5 mt-2 bg-inherit border-4 p-5 rounded-xl mr-5 flex flex-row">
                    {
                        dIncrementarray.map((item, key) => {
                            return (
                                <div className="flex flex-row">
                                    <div className="font-bold mr-5">{key + 1}.</div>
                                    <input type="text" className="h-8  bg-inherit outline-0 border-slate-500 w-36 mr-3 text-center border-solid rounded-xl border-2 max-md:mb-1" value={item} onChange={(e) => {
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
                <h1 className="text-center text-xl mt-5 text-black">Short Straddle Strategies</h1>
                {
                    legarray.map((item, key) => {
                        return (
                            <div className="flex flex-col shadow border-4 rounded-xl m-2">
                                <div className=" flex flex-row pb-5 ml-5 mr-5 mb-5 overflow-x-auto bg-inherit">
                                    <div className="flex flex-row ">
                                        <div className="mt-12 text-l text-center font-bold">
                                            Leg {key + 1}.
                                        </div>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="mt-5 ml-5 text-l text-center">
                                            Lot
                                        </div>
                                        <input type="number" value={lotarray[key]} className="h-8 mt-2 ml-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2" onChange={(e) => {
                                            const inputdata = [...lotarray]
                                            inputdata[key] = e.target.value;
                                            setlotarray(inputdata)
                                        }}></input>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="mt-5 ml-5 text-l text-center">
                                            Option
                                        </div>
                                        <Select
                                            value={legarray[key]}
                                            className="h-8  bg-inherit text-white border-spacing-7 w-36 mt-2 ml-5 border-solid border-slate-500  border-2 rounded-xl"
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
                                        <div className="mt-5 ml-5 text-l text-center">
                                            <input type="checkbox" checked={point} className="" onChange={() => {
                                                point ? setpoint(false) : setpoint(true);
                                            }} /> ATM Point
                                        </div>
                                        <Select
                                            value={atm[key]}
                                            label=""
                                            className="h-8 mt-2 ml-10 outline-0 border-slate-500  text-center border-solid rounded-xl border-2 bg-inherit border-spacing-7 w-36"
                                            style={{ borderRadius: "0.75rem" }}
                                            onChange={(e) => {
                                                const inputdata = [...atm]
                                                inputdata[key] = e.target.value;
                                                setatm(inputdata)

                                            }}
                                        >
                                            {
                                                pointarray.map((item, key) => {
                                                    return (<MenuItem className="text-black" value={item}>{item}</MenuItem>
                                                    )
                                                })

                                            }
                                        </Select>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="mt-5 ml-5 text-l text-center">
                                            <input type="checkbox" className="ml-5" checked={!point} onChange={() => {
                                                point === false ? setpoint(true) : setpoint(false);
                                            }} /> ATM Percent
                                        </div>
                                        <Select
                                            value={atm[key]}
                                            label=""
                                            className="h-8 mt-2 ml-10 outline-0 border-slate-500  text-center border-solid rounded-xl border-2 bg-inherit border-spacing-7 w-36"
                                            style={{ borderRadius: "0.75rem" }}
                                            onChange={(e) => {
                                                const inputdata = [...atm]
                                                inputdata[key] = e.target.value;
                                                setatm(inputdata)

                                            }}
                                        >
                                            {
                                                percentarray.map((item, key) => {
                                                    return (<MenuItem className="text-black" value={item}>{item}</MenuItem>)
                                                })
                                            }
                                        </Select>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="mt-5 ml-5 text-l text-center">
                                            Expiry Time
                                        </div>
                                        <input type="date" value={firstexpirydate[key]} className="h-8 mt-2 ml-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2" onChange={(e) => {
                                            const inputdata = [...firstexpirydate]
                                            inputdata[key] = e.target.value;
                                            setfirstexpirydate(inputdata)
                                        }}></input>
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="mt-5 ml-5 text-l text-center">
                                            Increment Expiry

                                        </div>
                                        <Select
                                            value={incrementexpiry[key]}
                                            label=""
                                            className=
                                            "h-8 mt-2 ml-10 outline-0 border-slate-500  text-center border-solid rounded-xl border-2 bg-inherit border-spacing-7 w-36"
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
                <h1 className="text-center text-xl mt-2">No. of Time Groups</h1>
                <div className="ml-5 mt-2 mb-10 bg-inherit border-4 p-5 rounded-xl mr-5 grid grid-cols-2">

                    <div className="grid grid-cols-1 gap-1 overflow-x-hidden overflow-y-auto h-10 mr-4 max-md:mb-1">
                        {
                            startTimeArray.map((item, key) => {
                                return (
                                    <div className="flex flex-row max-md:grid max-md:grid-cols-2">
                                        <h1 className="font-bold mr-10 mt-2">{key + 1}.</h1>
                                        <label className=" inline-block mr-24 mt-2" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>Start Time:</label>
                                        <input type="time" placeholder="Start Time" className="h-8 mt-2 ml-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2 " required value={item} sx={{ marginRight: "10px" }} variant="outlined" onChange={(e) => {
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
                                        <h1 className="font-bold mr-10 mt-2">{key + 1}.</h1>
                                        <label className=" inline-block mr-24 mt-2" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>End Time:</label>
                                        <input type="time" className="h-8 mt-2 ml-10 bg-inherit outline-0 border-slate-500 w-36 text-center border-solid rounded-xl border-2 max-md:mb-1" required value={item} variant="outlined" onChange={(e) => {
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
            </div>
        </div>
    )
}

export default Backtest_version2

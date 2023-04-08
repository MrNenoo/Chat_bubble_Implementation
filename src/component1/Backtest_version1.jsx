import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Backtest_version1 = () => {

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
    const [tradesymbol, settradesymbol] = useState([])
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
    const [foldername, setFolderName] = useState("");
    const [symboldata, setsymboldata] = useState(['NIFTY'])
    const [loader, setloader] = useState(false)


    // {
    //     "leg":5,
    //     "lotarray":[100,100,100,100,100],
    //     "legarray":["SC","SC","SC","SC","SC"],
    //     "darray":[100,100,100,100,100],
    //     "dIncrement":"5",
    //     "dIncrementarray":[0,0,0,0,0],
    //     "t":"4",
    //     "tarray":[10,10,10,10],
    //     "intraday":"Yes",
    //     "gap":"10",
    //     "rate":5,
    //     "fixedRate":"5",
    //     "tradesymbol":"{",
    //     "stoplosslower":"10000",
    //     "stoplossupper":"10000",
    //     "stoplosssteps":"10000",
    //     "maxprofitlower":"10000",
    //     "maxprofitupper":"10000",
    //     "maxprofitsteps":"10000",
    //     "halt":"Yes",
    //     "investment":"10000",
    //     "starttime":"09:15",
    //     "endtime":"03:25",
    //     "startdate":"2003-04-04",
    //     "enddate":"2003-04-04",
    //     "firstexpirydate":["2003-04-04","2003-04-04","2003-04-04","2003-04-04","2003-04-04"],
    //     "expiryFixed":["Yes","Yes","Yes","Yes","Yes"],
    //     "incrementexpiry":[7,7,7,7,7],
    //     "timeGroups":"1",
    //     "tgstarttimes":["09:25"],
    //     "tgendtimes":["03:25"],
    //     "foldername":"Atul Kesharwani"
    // }

    function onhandlesubmit(e) {
        e.preventDefault();
        setloader(true)
        const data = {
            leg, lotarray, legarray, darray, dIncrement, dIncrementarray, t, tarray, intraday,
            tradesymbol, gap, stoplosslower, stoplossupper, stoplosssteps,
            maxprofitupper, maxprofitlower, maxprofitsteps,
            halt, investment, starttime, endtime, startdate, enddate, firstexpirydate,
            expiryFixed, incrementexpiry, fixedRate, rate,
            timeGroups, startTimeArray, endTimeArray, foldername
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
            setlotarray(Array(parseInt(leg)).fill("100"));
            setdarray(Array(parseInt(leg)).fill(100));
            setfirstexpirydate(Array(parseInt(leg)).fill("2020-01-09"))
            setExpiryfixed(Array(parseInt(leg)).fill("No"))
            setincrementexpriy(Array(parseInt(leg)).fill("7"))
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
            if(response.data)
               setsymboldata(response.data)
            

        } catch (error) {
            console.log("error" + error);
        }
    }
    useEffect(() => {
        handleSymbol();
    }, [])


    return (
        <>
        
            <div className="shadow-lg m-10">
                <h2 className="text-center justify-center text-3xl text-white font-bold bg-gradient-to-r from-zinc-500  to-zinc-900   rounded-t-lg pt-3 pb-3">Backtest_version1 Portal</h2>
               
                <div className="p-10 bg-gradient-to-b from-zinc-900 via-slate-600 to-zinc-400 rounded-b-lg" >
                    {/* ###### 1st Box #### */}
                    <div className="flex flex-row mb-2 max-md:grid max-md:grid-cols-2">
                        <div className="flex flex-row max-md:grid max-md:grid-cols-2 max-md:mb-1">
                            <label className=" inline text-white mr-4" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>No. of legs:</label>
                            <input type="text" required placeholder="legs" className="h-8 w-36 mr-4 bg-inherit text-white outline-0 border-b-slate-50 text-center border-solid rounded border-2 max-md:mb-1" value={leg} onChange={(e) => { setleg(e.target.value); }}></input>
                            <label className=" inline text-white mr-4" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>Lot sizes:</label>
                            <div className="grid grid-cols-3 gap-1 overflow-x-hidden overflow-y-auto h-8 mr-4 max-sm:grid-cols-1 max-md:grid-cols-1">
                                {
                                
                                    lotarray.map((item, key) => {
                                        return (
                                            <div className="flex flex-row">
                                                <input type="text" placeholder="legs" className="h-8 w-16 bg-inherit text-white outline-0 border-b-slate-50 text-center border-solid rounded border-2 " value={lotarray[key]} onChange={(e) => {
                                                    const inputdata = [...lotarray]
                                                    inputdata[key] = e.target.value;
                                                    setlotarray(inputdata)
                                                }}></input>
                                            </div>
                                        )
                                    })

                                }
                            </div>
                        </div>
                        <div className="flex flex-row ml-2 max-md:grid max-md:grid-cols-1 max-md:mb-1">
                            <label className=" inline-block text-white mr-8" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>Type of Legs:</label>
                            <div className="grid grid-cols-3 gap-1 overflow-x-hidden overflow-y-auto h-8 mr-4 max-sm:grid-cols-1 max-md:grid-cols-1">
                                {

                                    legarray.map((item, key) => {
                                        return (
                                            <Select
                                                value={legarray[key]}
                                                label=""
                                                className="h-8  bg-inherit text-white border-spacing-7 w-20 border-solid border-2 rounded"
                                                onChange={(e) => {
                                                    const inputdata = [...legarray]
                                                    inputdata[key] = e.target.value;
                                                    setlegarray(inputdata)
                                                }}
                                                style={{ color: "white" }}
                                            >
                                                <MenuItem className="text-black" value="SC">SC</MenuItem>
                                                <MenuItem className="text-black" value="SP">SP</MenuItem>
                                                <MenuItem className="text-black" value="BC">BC</MenuItem>
                                                <MenuItem className="text-black" value="BP">BP</MenuItem>
                                            </Select>
                                        )
                                    })

                                }
                            </div>
                        </div>
                        <div className="flex flex-row max-md:grid max-md:grid-cols-2">
                            <label className=" inline-block text-white mr-8" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>D:</label>
                            <div className="grid grid-cols-3 gap-1 overflow-x-hidden overflow-y-auto h-8 mr-4 max-sm:grid-cols-1 max-md:grid-cols-1">
                                {

                                    darray.map((item, key) => {
                                        return (

                                            <input type="text" placeholder="legs" className="h-8 w-16 bg-inherit text-white outline-0 border-b-slate-50 text-center border-solid rounded border-2 " value={item} onChange={(e) => {
                                                const inputdata = [...darray]
                                                inputdata[key] = e.target.value;
                                                setdarray(inputdata)
                                            }}></input>

                                        )
                                    })

                                }
                            </div>
                        </div>
                    </div>
                    <hr className="bg-white mb-2"></hr>

                    {/* ###### 3rd Box #### */}
                    <div className="grid grid-cols-2 mb-2">
                        <div className="flex flex-row mb-2" id="d_times">
                            <label className=" inline-block text-white mr-4" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>No. of times you want to iterate over D(Won't increment on 1):</label>
                            <input type="text" placeholder="No. Of Times You want to Iterate" className="h-8  w-36 bg-inherit text-white outline-0 border-b-slate-50 text-center border-solid rounded border-2 mr-2" value={dIncrement} onChange={(e) => { setdincrement(e.target.value) }}></input>
                        </div>
                        <div className="flex flex-row mb-2" id="d_times">
                            <label className=" inline-block text-white mr-8" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>D_Increment:</label>
                            <div className="grid grid-cols-8 gap-px overflow-x-hidden overflow-y-auto h-8 max-sm:grid-cols-2 max-md:grid-cols-2">
                                {
                                    dIncrementarray.map((item, key) => {
                                        return (
                                            <div className="box">
                                                <input type="text" placeholder="legs" className="h-8 w-16 bg-inherit text-white outline-0 border-b-slate-50 text-center border-solid rounded border-2 " value={item} onChange={(e) => {
                                                    const inputdata = [...dIncrementarray]
                                                    inputdata[key] = e.target.value;
                                                    setdincrementarray(inputdata)
                                                }}></input>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <hr className="bg-white mb-2"></hr>

                    {/* ###### 4th Box #### */}
                    <div className="flex flex-row">
                        <label className=" inline-block mr-4 text-white" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>No. of values of T:</label>
                        <input type="text" placeholder="legs" className="h-8 mr-20 bg-inherit text-white outline-0 border-b-slate-50 w-36 ml-24 text-center border-solid rounded border-2 " value={t} onChange={(e) => { sett(e.target.value); }}></input>
                        <label className=" inline-block text-white mr-16 " style={{ fontSize: "15px", float: "right", fontFamily: "Arial, Helvetica, sans-serif" }}>T:</label>
                        <div className="grid grid-cols-12 gap-1 overflow-x-hidden overflow-y-auto h-8 mb-2 max-sm:grid-cols-3 max-md:grid-cols-6">
                            {

                                tarray.map((item, key) => {
                                    return (
                                        <div className="box">
                                            <input type="text" placeholder="legs" className="h-8 w-16 bg-inherit text-white outline-0 border-b-slate-50 text-center border-solid rounded border-2 " value={tarray[key]} onChange={(e) => {
                                                const inputdata = [...tarray]
                                                inputdata[key] = e.target.value;
                                                settarray(inputdata)
                                            }} ></input>
                                        </div>
                                    )
                                })

                            }
                        </div>
                    </div>
                    <hr className="bg-white mb-2"></hr>



                    {/* ###### 5th Box #### */}
                    <div className="grid grid-cols-6 mb-2 max-md:grid-cols-2 max-md:mb-2" id="intraday">
                        <label className=" inline-block text-white mr-16" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>INTRADAY:</label>

                        <Select
                            value={intraday}
                            label="Intraday"
                            className="h-8  bg-inherit text-white outline-0 border-b-slate-50 w-36 border-solid border-2 rounded max-md:mb-1"
                            onChange={(e) => { setintraday(e.target.value) }}
                            style={{ color: "white" }}

                        >
                            <MenuItem className="text-black" value={"Yes"}>Yes</MenuItem>
                            <MenuItem className="text-black" value={"No"}>No</MenuItem>
                        </Select>

                        <label className=" inline-block text-white" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>Gap in Strike Price:</label>
                        <input type="text" placeholder="legs" className="h-8  bg-inherit text-white outline-0 border-b-slate-50 mr-2 w-36 text-center border-solid rounded border-2 max-md:mb-1 " value={gap} onChange={(e) => { setgap(e.target.value) }} ></input>
                        <label className=" inline-block text-white" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>Trade Symbol:</label>
                        <Select
                            value={tradesymbol}
                            label="Halt"
                            style={{ color: "white" }}
                            multiple={true}
                            className="h-8 bg-inherit text-white border-white w-36 border-solid border-2 rounded float-right"
                            onChange={(e) => { settradesymbol(e.target.value); console.log(tradesymbol) }}
                        >
                            {
                                symboldata.map((item, key) => {
                                    return (
                                        <MenuItem className="text-black" value={item}>{item}</MenuItem>
                                    )
                                })
                            }
                        </Select>

                    </div>
                    <hr className="bg-white mb-2"></hr>


                    {/* ##### 6th box #### */}
                    <div className="grid grid-cols-6 mb-2 max-md:grid-cols-2 max-md:mb-2">
                        <label className=" inline-block text-white mr-10" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>StopLoss lower limit:</label>
                        <input type="text" placeholder="legs" className="h-8  bg-inherit text-white outline-0 border-b-slate-50 w-36 mr-3 text-center border-solid rounded border-2 max-md:mb-1" value={stoplosslower} onChange={(e) => { setstoplosslower(e.target.value) }} ></input>
                        <label className=" inline-block text-white mr-12" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>StopLoss upper limit:</label>
                        <input type="text" placeholder="legs" className="h-8  bg-inherit text-white outline-0 border-b-slate-50 w-36 mr-3 text-center border-solid rounded border-2 max-md:mb-1 " value={stoplossupper} onChange={(e) => { setstoplossupper(e.target.value) }} ></input>
                        <label className=" inline-block text-white mr-10" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>StopLoss Steps size:</label>
                        <input type="text" placeholder="legs" className="h-8  bg-inherit text-white outline-0 border-b-slate-50 w-36 text-center border-solid rounded border-2 " value={stoplosssteps} onChange={(e) => { setstoplosssteps(e.target.value) }} ></input>
                    </div>
                    <hr className="bg-white mb-2"></hr>
                    <div className="grid grid-cols-6 mb-2 max-md:grid-cols-2 max-md:mb-2">
                        <label className=" inline-block text-white mr-10" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>MaxProfit lower limit:</label>
                        <input type="text" placeholder="legs" className="h-8  bg-inherit text-white outline-0 border-b-slate-50 w-36 mr-3 text-center border-solid rounded border-2 max-md:mb-1" value={maxprofitupper} onChange={(e) => { setmaxprofitupper(e.target.value) }} ></input>
                        <label className=" inline-block text-white mr-12" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>MaxProfit upper limit:</label>
                        <input type="text" placeholder="legs" className="h-8  bg-inherit text-white outline-0 border-b-slate-50 w-36 mr-3 text-center border-solid rounded border-2 max-md:mb-1" value={maxprofitlower} onChange={(e) => { setmaxprofitlower(e.target.value) }} ></input>
                        <label className=" inline-block text-white mr-10" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>MaxProfit Steps size:</label>
                        <input type="text" placeholder="legs" className="h-8  bg-inherit text-white outline-0 border-b-slate-50 w-36 text-center border-solid rounded border-2 " value={maxprofitsteps} onChange={(e) => { setmaxprofitsteps(e.target.value) }}  ></input>
                    </div>
                    <hr className="bg-white mb-2"></hr>

                    {/* ##### 7th box #### */}
                    <div className="grid grid-cols-2 mb-2 max-md:grid-cols-1">
                        <div className="grid grid-cols-2 max-md:mb-1">
                            <label className=" inline-block text-white mr-3" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>HALT FOR THE DAY ON REACHING LIMIT:</label>

                            <Select
                                value={halt}
                                label="Halt"
                                style={{ color: "white" }}
                                className="h-8 bg-inherit text-white border-white w-36 border-solid border-2 rounded float-right"
                                onChange={(e) => { sethalt(e.target.value) }}
                            >
                                <MenuItem className="text-black" value={"Yes"}>Yes</MenuItem>
                                <MenuItem className="text-black" value={"No"}>No</MenuItem>
                            </Select>
                        </div>
                        <div className="grid grid-cols-2">
                            <label className=" inline-block text-white  mr-16">Initial Investment:</label>
                            <input type="text" placeholder="Initail Investment" className="h-8  bg-inherit text-white outline-0 border-b-slate-50 w-36 text-center border-solid rounded border-2 " value={investment} variant="outlined" onChange={(e) => { setinvestment(e.target.value) }}  ></input>                    </div>
                    </div>
                    <hr className="bg-white mb-2"></hr>


                    {/* ##### 8th box ##### */}
                    <div className="grid grid-cols-8 mb-2 max-md:grid max-md:grid-cols-2">
                        <label htmlFor="DAY_START_TIME" className=" inline-block text-white mr-4">Start time:</label>
                        <input placeholder="Start Time" className="h-8 mr-4 bg-inherit text-white outline-0 border-b-slate-50 w-36 text-center border-solid rounded border-2 max-md:mb-1" required variant="outlined" type="time" value={starttime} sx={{ marginRight: "25px" }} onChange={(e) => { setStartTime(e.target.value) }} ></input>
                        <label htmlFor="DAY_END_TIME" className=" inline-block text-white mr-4">End time:</label>
                        <input placeholder="End Time" className="h-8 mr-4 bg-inherit text-white outline-0 border-b-slate-50 w-36 text-center border-solid rounded border-2 max-md:mb-1" required variant="outlined" type="time" value={endtime} sx={{ marginRight: "25px" }} onChange={(e) => { setEndTime(e.target.value) }} ></input>
                        <label htmlFor="START_DT" className=" inline-block text-white mr-4">Start date:</label>
                        <input placeholder="Start Date" data-date-format="DD MM YYYY" className="h-8  mr-4 bg-inherit text-white outline-0 border-b-slate-50 w-36 text-center border-solid rounded border-2 max-md:mb-1" required type="date" value={startdate} sx={{ marginRight: "25px" }} variant="outlined" onChange={(e) => { setstartdate(e.target.value) }}></input>
                        <label htmlFor="END_DT" className=" inline-block text-white mr-4">End date:</label>
                        <input placeholder="End Date" data-date-format="DD MM YYYY" className="h-8 bg-inherit text-white outline-0 border-b-slate-50 w-36 text-center border-solid rounded border-2 " required type="date" value={enddate} sx={{ marginRight: "25px" }} variant="outlined" onChange={(e) => { setEndDate(e.target.value) }}></input>
                    </div>
                    <hr className="bg-white mb-2"></hr>


                    {/* ###### 8th boxx ### */}
                    <div className="grid grid-cols-6 mb-2 max-md:grid max-md:grid-cols-2">
                        <label htmlFor="EXPIREY_DT" className=" inline-block text-white mr-10">First expirey date:</label>
                        <div className="grid grid-cols-1 gap-1 overflow-x-hidden overflow-y-auto h-8 mr-4">
                            {
                                firstexpirydate.map((item, key) => {
                                    return (
                                        <input placeholder="Expiry Date" className="h-8  bg-inherit text-white outline-0 border-b-slate-50 text-center border-solid rounded border-2 max-md:mb-1" required type="date" value={item} variant="outlined" onChange={(e) => {
                                            const inputdata = [...firstexpirydate]
                                            inputdata[key] = e.target.value;
                                            setfirstexpirydate(inputdata)
                                        }}></input>
                                    )
                                })
                            }
                        </div>
                        <label className=" inline-block text-white mr-4">Is Expiry Fixed?:</label>
                        <div className="grid grid-cols-1 h-8 overflow-x-hidden overflow-y-auto mr-4 max-md:mb-1">
                            {
                                expiryFixed.map((item, key) => {
                                    return (

                                        <Select
                                            value={item}
                                            label="Is Expiry Fixed"
                                            className="h-8  bg-inherit text-white outline-0 border-solid border-2 rounded border-b-slate-50  max-md:mb-1"
                                            onChange={(e) => {
                                                const inputdata = [...expiryFixed]
                                                inputdata[key] = e.target.value;
                                                setExpiryfixed(inputdata)
                                            }}
                                            style={{ color: "white" }}
                                        >
                                            <MenuItem className="text-black" value={"No"}>No</MenuItem>
                                            <MenuItem className="text-black" value={"Yes"}>Yes</MenuItem>
                                        </Select>

                                    )
                                })
                            }
                        </div>
                        <label className=" inline-block text-white">Increment Expiry by(days):</label>
                        <div className="grid grid-cols-1 overflow-x-hidden overflow-y-auto h-8 ml-4 mr-4">
                            {
                                incrementexpiry.map((item, key) => {
                                    return (

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={item}
                                            className="h-8  border-solid border-2 rounded bg-inherit text-white outline-0 border-b-slate-50  max-md:mb-1"
                                            style={{ color: "white" }}
                                            label="ExpiryInc"
                                            onChange={(e) => {
                                                const inputdata = [...incrementexpiry]
                                                inputdata[key] = e.target.value;
                                                setincrementexpriy(inputdata)
                                            }}
                                        >
                                            <MenuItem className="text-black" value={"7"}>7</MenuItem>
                                            <MenuItem className="text-black" value={"14"}>14</MenuItem>
                                            <MenuItem className="text-black" value={"21"}>21</MenuItem>
                                            <MenuItem className="text-black" value={"28"}>28</MenuItem>
                                        </Select>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <hr className="bg-white mb-2"></hr>



                    {/* ### 9th box ### */}
                    <div className="grid grid-cols-6 mb-2 max-md:grid-cols-2" id="expiryinc">
                        <label className=" inline-block text-white" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>FIXED RATE:</label>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={fixedRate}
                            className="h-8  border-solid border-2 rounded bg-inherit mr-4 max-md:mb-1"
                            style={{ color: "white", borderColor: "white" }}
                            label="fixedRate"
                            onChange={(e) => { setFixedRate(e.target.value) }}
                        >
                            <MenuItem value={"Yes"}>Yes</MenuItem>
                            <MenuItem value={"No"}>No</MenuItem>
                        </Select>
                        <label className=" inline-block text-white" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>Rate:</label>
                        <input placeholder="Rate" className="h-8 mr-4 bg-inherit text-white outline-0 border-b-slate-50  text-center border-solid rounded border-2 max-md:mb-1" required value={rate} variant="outlined" onChange={(e) => { setRate(e.target.value) }} ></input>
                        <label className=" inline-block text-white ">No. of Time Groups:</label>
                        <input placeholder="Time Groups" className="h-8  mr-4 bg-inherit text-white outline-0 border-b-slate-50  text-center border-solid rounded border-2 max-md:mb-1" required value={timeGroups} variant="outlined" onChange={(e) => { setTimeGroups(e.target.value) }}></input>
                    </div>
                    <hr className="bg-white mb-2"></hr>


                    {/* ##### 10th box ##### */}
                    <div className="flex flex-row mb-2 max-md:grid max-md:grid-cols-1" id="tgval">
                        <div className="grid grid-cols-1 gap-1 overflow-x-hidden overflow-y-auto h-8 mr-4 max-md:mb-1">
                            {
                                startTimeArray.map((item, key) => {
                                    return (
                                        <div className="flex flex-row max-md:grid max-md:grid-cols-2">
                                            <label className=" inline-block text-white mr-24" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>Start Time:</label>
                                            <input placeholder="Start Time" className="h-8  bg-inherit w-44 text-white outline-0 border-b-slate-50 text-center border-solid rounded border-2 max-md:mb-1 " required value={startTimeArray[key]} sx={{ marginRight: "10px" }} variant="outlined" type="time" onChange={(e) => {
                                                const inputdata = [...startTimeArray];
                                                inputdata[key] = e.target.value;
                                                setStartTimeArray(inputdata);
                                            }} ></input>
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <div className="grid grid-cols-1 gap-1 overflow-x-hidden overflow-y-auto h-8 mr-4 max-md:mb-1">
                            {
                                endTimeArray.map((item, key) => {
                                    return (
                                        <div className="flex flex-row max-md:grid max-md:grid-cols-2">
                                            <label className=" inline-block text-white mr-24" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>End Time:</label>
                                            <input placeholder="End Time" className="h-8 bg-inherit w-44 text-white outline-0 border-b-slate-50  text-center border-solid rounded border-2 max-md:mb-1" required value={endTimeArray[key]} variant="outlined" type="time" onChange={(e) => {
                                                const inputdata = [...endTimeArray]
                                                inputdata[key] = e.target.value;
                                                setEndTimeArray(inputdata)
                                            }} ></input>
                                        </div>
                                    )
                                })

                            }
                        </div>
                        <div className="flex flex-row max-md:grid max-md:grid-cols-2">
                            <label className=" inline-block text-white mr-8" style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>OUTPUT FOLDER NAME:</label>
                            <input type="text" placeholder="Folder Name" className="h-8 bg-inherit lg:w-80 text-white outline-0 border-b-slate-50 text-center border-solid rounded border-2 max-md:mb-1" required value={foldername} onChange={(e) => { setFolderName(e.target.value) }}   ></input>
                        </div>
                    </div>
                    <hr className="bg-white mb-2"></hr>

                    {/* ##### 11th box ##### */}
                    <div className="mt-5 text-center">
                    { loader && <div className="flex items-center justify-center">
                    <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                    </div>
                </div>
                }
                        {!loader &&  <Button variant="contained" sx={{ width: "50%"}} onClick={onhandlesubmit} >Submit</Button>}
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Backtest_version1
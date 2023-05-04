import React from 'react'
import { Button } from '@mui/material'
import Graph from '../Graph/Graph'
import Graph1 from '../Graph/Graph1'
import Excel from '../pdf/Excel'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'


const Result = (props) => {

    const a = props.a;
    const b = props.b;
    const c = props.c;
    const d = props.d;
    const e = props.e;
    const f = props.f;
    const g = props.g;
    const h = props.h;
    const i = props.i;

    function ConvertJsonDateString(jsonDate) {
        var shortDate = null;
        if (jsonDate) {
            var regex = /-?\d+/;
            var matches = regex.exec(jsonDate);
            var dt = new Date(parseInt(matches[0]));
            var month = dt.getMonth() + 1;
            var monthString = month > 9 ? month : '0' + month;
            var day = dt.getDate();
            var dayString = day > 9 ? day : '0' + day;
            var year = dt.getFullYear();
            shortDate = monthString + '-' + dayString + '-' + year;
        }
        return shortDate;
    };
    let x = g.map((item, key) => {
        return ConvertJsonDateString(item.dt)
    })
    let y = h.map((item, key) => {
        return item.Cumulative
    })
    let z = i.map((item, key) => {
        return item['Drawdown%']
    })

    const handleDownload = () => {
        const pdfElement = document.getElementById('screenshot')
        html2canvas(pdfElement).then(canvas => {
            const pdf = new jsPDF()
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight())
            pdf.save('backtest.pdf')
        })
    }
    
    function getRandomColor() {
        // Generate a random number between 0 and 255 for each RGB component
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        
        // Return the RGB color code in the format "rgb(red, green, blue)"
        return `rgb(${red}, ${green}, ${blue})`;
      }
      
    return (
        <>
            {/* Box of Main Answer of Every Value */}

            <hr className="bg-white h-2 m-5"></hr>
            <hr className="bg-white h-2 m-5"></hr>

            <div className="grid grid-cols-3 mt-10 bg-blue-300 rounded ml-10 mr-10 overflow-auto">
            </div>
            <div className="flex flex-row float-right mr-10 ">
                <button className="bg-blue-600 text-white p-2 rounded mr-5" onClick={handleDownload}>Download PDF</button>
                <Excel a={a} b={c} c={c} d={d} e={e} f={f} g={g} />
            </div>
            <div className="float-left grid grid-cols-6 ml-10">
                <Button variant="outlined">Mon</Button>
                <Button variant="outlined">Tue</Button>
                <Button variant="outlined">Wed</Button>
                <Button variant="outlined">Thu</Button>
                <Button variant="outlined">Fri</Button>
                <Button variant="outlined">All</Button>
            </div>
            <div id="screenshot">
                <div className="grid grid-cols-5 gap-5 m-10 mt-20">
                    {
                        d.map((item, key) => {
                            return (
                                <div className="shadow pt-3 pb-3 rounded bg-white">
                                    <h1 className="text-center justify-center text-black" style={{fontWeight:400,fontSize:"16px"}}>
                                        {item.a}
                                    </h1>
                                    <hr className="text-white m-2"></hr>
                                    <h1 className="text-center justify-center text-blue-600" style={{color:item.b>0?"green":"red"}}>
                                        {item.b}
                                    </h1>
                                </div>
                            )
                        })
                    }
                </div>
                {/* inputs analysis */}
                <div className="bg-white p-3 rounded-lg mt-10 overflow-y-none overflow-x-auto justify-center ml-10 mr-10">
                    <h3 className="text-black" style={{fontWeight:"400",fontSize:"24px"}}>Input Data Format</h3>
                    <hr></hr>
                    <table className=" overflow-y-none overflow-x-auto">
                        <thead className="text-black">
                            <td className="p-2">Trade Symbol</td>
                            <td className="p-2">Legs_info</td>
                            <td className="p-2">T</td>
                            <td className="p-2">D</td>
                            <td className="p-2">D_Range</td>
                            <td className="p-2">D_Incr</td>
                            <td className="p-2">Quantity</td>
                            <td className="p-2">StopLoss</td>
                            <td className="p-2">Max_Profit</td>
                            <td className="p-2">Start Date</td>
                            <td className="p-2">Day_start_time</td>
                            <td className="p-2">End_date</td>
                            <td className="p-2">Day_End_Time</td>
                            <td className="p-2">Intraday</td>
                            <td className="p-2">Halt_on</td>
                        </thead>
                        <tbody>
                            <tr className=" bg-white">
                                <td className="p-2" style={{color:a[0]<0?"red":"green"}}>{a[0]}</td>
                                <td className="p-2" style={{color:a[1]<0?"red":"green"}}>{a[1]}</td>
                                <td className="p-2" style={{color:a[2]<0?"red":"green"}}>{a[2]}</td>
                                <td className="p-2" style={{color:a[3]<0?"red":"green"}}>{a[3]}</td>
                                <td className="p-2" style={{color:a[4]<0?"red":"green"}}>{a[4]}</td>
                                <td className="p-2" style={{color:a[5]<0?"red":"green"}}>{a[5]}</td>
                                <td className="p-2" style={{color:a[6]<0?"red":"green"}}>{a[6]}</td>
                                <td className="p-2" style={{color:a[7]<0?"red":"green"}}>{a[7]}</td>
                                <td className="p-2" style={{color:a[8]<0?"red":"green"}}>{a[8]}</td>
                                <td className="p-2" style={{color:a[9]<0?"red":"green"}}>{a[9]}</td>
                                <td className="p-2" style={{color:a[10]<0?"red":"green"}}>{a[10]}</td>
                                <td className="p-2" style={{color:a[11]<0?"red":"green"}}>{a[11]}</td>
                                <td className="p-2" style={{color:a[12]<0?"red":"green"}}>{a[12]}</td>
                                <td className="p-2" style={{color:a[13]<0?"red":"green"}}>{a[13] ? "true" : "false"}</td>
                                <td className="p-2" style={{color:a[14]<0?"red":"green"}}>{a[14] ? "true" : "false"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* timeGroup Profitability */}
                <div className="bg-white p-3 rounded-lg mt-10 overflow-y-none overflow-x-auto justify-center ml-10 mr-10">
                    <h3 className="text-black" style={{fontWeight:"400",fontSize:"24px"}}>TimeGroup profitability</h3>
                    <hr></hr>
                    <table className="w-screen">
                        <thead className=" text-black">
                            <td className="p-2">start_times</td>
                            <td className="p-2">end_times</td>
                            <td className="p-2">p&l</td>
                            <td className="p-2">total_gross</td>
                            <td className="p-2">trade_cnt</td>
                            <td className="p-2">bull_trades</td>
                            <td className="p-2">bull_gross</td>
                            <td className="p-2">bull_p&l</td>
                            <td className="p-2">bear_trades</td>
                            <td className="p-2">bear_gross</td>
                            <td className="p-2">bear_p&l</td>
                        </thead>
                        {
                            Array.isArray(c) && c.map((item, key) => {
                                return (
                                    <tbody>
                                        <tr className=" bg-white">
                                            <td className="p-2" style={{color:item['start_times']<0?"red":"green"}}>{item['start_times']}</td>
                                            <td className="p-2" style={{color:item.end_times<0?"red":"green"}}>{item.end_times}</td>
                                            <td className="p-2" style={{color:item['p&l']<0?"red":"green"}}>{item['p&l']}</td>
                                            <td className="p-2" style={{color:item.total_gross<0?"red":"green"}}>{item.total_gross}</td>
                                            <td className="p-2" style={{color:item.trade_cnt<0?"red":"green"}}>{item.trade_cnt}</td>
                                            <td className="p-2" style={{color:item.bull_trades<0?"red":"green"}}>{item.bull_trades}</td>
                                            <td className="p-2" style={{color:item.bull_gros<0?"red":"green"}}>{item.bull_gross}</td>
                                            <td className="p-2" style={{color:item['bull_p&l']<0?"red":"green"}}>{item['bull_p&l']}</td>
                                            <td className="p-2" style={{color:item.bear_trades<0?"red":"green"}}>{item.bear_trades}</td>
                                            <td className="p-2" style={{color:item.bear_gross<0?"red":"green"}}>{item.bear_gross}</td>
                                            <td className="p-2" style={{color:item['bear_p&l']<0?"red":"green"}}>{item['bear_p&l']}</td>
                                        </tr>
                                    </tbody>

                                )

                            })
                        }

                    </table>
                </div>
                {/* Graph make */}
                <div className="grid grid-cols-2 mt-10">
                   <div className="bg-white shadow rounded-lg mt-0 m-10 flex flex-col">
                    <label className="text-blue-500 mt-5 ml-5">Cumulative Graph</label>
                    <Graph a={x} b={y} />
                    </div>
                    <div className="bg-white shadow rounded-lg mt-0 m-10 flex flex-col">
                    <label className="text-blue-500 mt-5 ml-5">Drawdown Graph</label>
                    <Graph1 a={x} b={z} />
                    </div>
                </div>
                {/*Week Wise Profitability */}
                <div className="bg-white p-3 rounded-lg mt-10 ml-10 mr-10  overflow-auto">
                    <h3 className="text-black" style={{fontWeight:"400",fontSize:"24px"}}>Week Wise Profitability</h3>
                    <hr></hr>
                    <table className="">
                        <thead className="text-black">
                            <td className="p-2">Week_No</td>
                            <td className="p-2">bull_days</td>
                            <td className="p-2">profit_bull_days</td>
                            <td className="p-2">loss_bull_days</td>
                            <td className="p-2">bull_gross_profit</td>
                            <td className="p-2">bull_gross_loss</td>
                            <td className="p-2">bull_net_profit</td>
                            <td className="p-2">bull_net_loss</td>
                            <td className="p-2">bull_pnl</td>
                            <td className="p-2">bear_days</td>
                            <td className="p-2">profit_bear_days</td>
                            <td className="p-2">loss_bear_days</td>
                            <td className="p-2">bear_gross_profit</td>
                            <td className="p-2">bear_gross_loss</td>
                            <td className="p-2">bear_net_profit</td>
                            <td className="p-2">bear_net_loss</td>
                            <td className="p-2">bear_pnl</td>
                        </thead>
                        {
                            Array.isArray(b) && b.map((item, key) => {
                                return (
                                    <tr className=" bg-white">
                                        <td className="p-2" style={{color:item.week_no<0?"red":"green"}}>{item.week_no}</td>
                                        <td className="p-2" style={{color:item.bull_days<0?"red":"green"}}>{item.bull_days}</td>
                                        <td className="p-2" style={{color:item.profit_bull_days<0?"red":"green"}}>{item.profit_bull_days}</td>
                                        <td className="p-2" style={{color:item.loss_bull_days<0?"red":"green"}}>{item.loss_bull_days}</td>
                                        <td className="p-2" style={{color:item.bull_gross_profit<0?"red":"green"}}>{item.bull_gross_profit}</td>
                                        <td className="p-2" style={{color:item.bull_gross_loss<0?"red":"green"}}>{item.bull_gross_loss}</td>
                                        <td className="p-2" style={{color:item.bull_net_profit<0?"red":"green"}}>{item.bull_net_profit}</td>
                                        <td className="p-2" style={{color:item.bull_net_loss<0?"red":"green"}}>{item.bull_net_loss}</td>
                                        <td className="p-2" style={{color:item.bull_pnl<0?"red":"green"}}>{item.bull_pnl}</td>
                                        <td className="p-2" style={{color:item.bear_days<0?"red":"green"}}>{item.bear_days}</td>
                                        <td className="p-2" style={{color:item.profit_bear_days<0?"red":"green"}}>{item.profit_bear_days}</td>
                                        <td className="p-2" style={{color:item.loss_bear_days<0?"red":"green"}}>{item.loss_bear_days}</td>
                                        <td className="p-2" style={{color:item.bear_gross_profit<0?"red":"green"}}>{item.bear_gross_profit}</td>
                                        <td className="p-2" style={{color:item.bear_gross_loss<0?"red":"green"}}>{item.bear_gross_loss}</td>
                                        <td className="p-2" style={{color:item.bear_net_profit<0?"red":"green"}}>{item.bear_net_profit}</td>
                                        <td className="p-2" style={{color:item.bear_net_loss<0?"red":"green"}}>{item.bear_net_loss}</td>
                                        <td className="p-2" style={{color:item.bear_pnl<0?"red":"green"}}>{item.bear_pnl}</td>
                                    </tr>
                                )
                            })
                        }


                    </table>
                </div>
                {/* Daily Period Analysis */}
                <div className="bg-white p-3 rounded mt-10 overflow-y-none overflow-x-auto  justify-center ml-10 mr-10">
                    <h3 className="text-black" style={{fontWeight:"400",fontSize:"24px"}}>Daily Period Analysis</h3>
                    <hr></hr>
                    <table className=" w-screen">
                        <thead className="text-black">
                            <td className="p-2">Day</td>
                            <td className="p-2">index</td>
                            <td className="p-2">Net_Diff</td>
                            <td className="p-2">Trade No</td>
                            <td className="p-2">Count</td>

                        </thead>
                        {
                            Array.isArray(e) && e.map((item, key) => {
                                return (
                                    <tr className=" bg-white">
                                        <td className="p-2" style={{color:item.Day<0?"red":"green"}}>{item.Day}</td>
                                        <td className="p-2" style={{color:item.index<0?"red":"green"}}>{item.index}</td>
                                        <td className="p-2" style={{color:item['Net_diff']<0?"red":"green"}}>{item['Net_diff']}</td>
                                        <td className="p-2" style={{color:item['Trade No.']<0?"red":"green"}}>{item['Trade No.']}</td>
                                        <td className="p-2" style={{color:item['Count']<0?"red":"green"}}>{item['Count']}</td>
                                    </tr>

                                )
                            })
                        }
                    </table>
                </div>
                {/* List of trades */}
                <div className="bg-white p-3 mt-10 rounded-lg overflow-y-none overflow-x-auto justify-center ml-10 mr-10 mb-10">
                    <h1 className="text-black" style={{fontWeight:"400",fontSize:"24px"}}>List Of Trades</h1>
                    <hr></hr>
                    <table className=" overflow-y-none overflow-x-auto">
                        {

                            <thead className="text-black" key={f[0]}>
                                {Object.keys(f[0]).map(key => (
                                    <td className="p-2" key={key}>{key}</td>
                                ))}
                            </thead>
                        }

                        {
                            Array.isArray(f) && f.map((item, index) => {
                                return (
                                    <tr className=" bg-white" key={item}>
                                        {Object.keys(item).map(key => (
                                            <td className="p-2" key={key} style={{color:item[key]<0?"red":"green"}}>{item[key]}</td>
                                        ))}
                                     
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>

        </>
    )
}

export default Result
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
                                <div className="border-4 border-black bg-white rounded">
                                    <h1 className="text-center justify-center text-black">
                                        {item.a}
                                    </h1>
                                    <hr className="text-white m-2"></hr>
                                    <h1 className="text-center justify-center text-blue-600">
                                        {item.b}
                                    </h1>
                                </div>
                            )
                        })
                    }
                </div>
                {/* inputs analysis */}
                <div className="bg-[#e9effa] mt-10 overflow-y-none overflow-x-auto text-center justify-center ml-10 mr-10">
                    <h3 className="text-center">Input Data Format</h3>
                    <table className="border-4 border-solid border-black overflow-y-none overflow-x-auto">
                        <thead className="border-4 border-solid border-black bg-zinc-600">
                            <td className="border-2 border-solid border-collapse border-black p-2">Trade Symbol</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">Legs_info</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">T</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">D</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">D_Range</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">D_Incr</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">Quantity</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">StopLoss</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">Max_Profit</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">Start Date</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">Day_start_time</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">End_date</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">Day_End_Time</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">Intraday</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">Halt_on</td>
                        </thead>
                        <tbody>
                            <tr className="border-4 border-solid border-black bg-white">
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[0]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[1]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[2]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[3]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[4]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[5]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[6]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[7]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[8]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[9]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[10]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[11]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[12]}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[13] ? "true" : "false"}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{a[14] ? "true" : "false"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>



                {/* timeGroup Profitability */}
                <div className="bg-[#e9effa] mt-10 overflow-y-none overflow-x-auto text-center justify-center ml-10 mr-10">
                    <h3 className="text-center">TimeGroup profitability</h3>
                    <table className="border-4 border-solid border-black w-screen">
                        <thead className="border-4 border-solid border-black bg-zinc-600">
                            <td className="border-2 border-solid border-collapse border-black p-2">start_times</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">end_times</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">p&l</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">total_gross</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">trade_cnt</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bull_trades</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bull_gross</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bull_p&l</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bear_trades</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bear_gross</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bear_p&l</td>
                        </thead>
                        {
                            Array.isArray(c) && c.map((item, key) => {
                                return (
                                    <tbody>
                                        <tr className="border-4 border-solid border-black bg-white">
                                            <td className="border-2 border-solid border-collapse border-black p-2">{item['start_times']}</td>
                                            <td className="border-2 border-solid border-collapse border-black p-2">{item.end_times}</td>
                                            <td className="border-2 border-solid border-collapse border-black p-2">{item['p&l']}</td>
                                            <td className="border-2 border-solid border-collapse border-black p-2">{item.total_gross}</td>
                                            <td className="border-2 border-solid border-collapse border-black p-2">{item.trade_cnt}</td>
                                            <td className="border-2 border-solid border-collapse border-black p-2">{item.bull_trades}</td>
                                            <td className="border-2 border-solid border-collapse border-black p-2">{item.bull_gross}</td>
                                            <td className="border-2 border-solid border-collapse border-black p-2">{item['bull_p&l']}</td>
                                            <td className="border-2 border-solid border-collapse border-black p-2">{item.bear_trades}</td>
                                            <td className="border-2 border-solid border-collapse border-black p-2">{item.bear_gross}</td>
                                            <td className="border-2 border-solid border-collapse border-black p-2">{item['bear_p&l']}</td>
                                        </tr>
                                    </tbody>

                                )

                            })
                        }

                    </table>
                </div>
                <h1 className="text-center mt-20">Graph</h1>
                {/* Graph make */}
                <div className="grid grid-cols-2">
                    <Graph a={x} b={y} />
                    <Graph1 a={x} b={z} />
                </div>
                {/*Week Wise Profitability */}
                <div className="bg-[#e9effa] mt-10 overflow-auto ml-10 mr-10">
                    <h3 className="text-center">Week Wise Profitability</h3>
                    <table className="border-4 border-solid border-black">
                        <thead className="border-4 border-solid border-black bg-zinc-600">
                            <td className="border-2 border-solid border-collapse border-black p-2">Week_No</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bull_days</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">profit_bull_days</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">loss_bull_days</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bull_gross_profit</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bull_gross_loss</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bull_net_profit</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bull_net_loss</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bull_pnl</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bear_days</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">profit_bear_days</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">loss_bear_days</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bear_gross_profit</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bear_gross_loss</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bear_net_profit</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bear_net_loss</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">bear_pnl</td>
                        </thead>
                        {
                            Array.isArray(b) && b.map((item, key) => {
                                return (
                                    <tr className="border-4 border-solid border-black bg-white">
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.week_no}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bull_days}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.profit_bull_days}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.loss_bull_days}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bull_gross_profit}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bull_gross_loss}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bull_net_profit}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bull_net_loss}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bull_pnl}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bear_days}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2" >{item.profit_bear_days}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.loss_bear_days}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bear_gross_profit}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bear_gross_loss}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bear_net_profit}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bear_net_loss}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.bear_pnl}</td>
                                    </tr>
                                )
                            })
                        }


                    </table>
                </div>
                {/* Daily Period Analysis */}
                <div className="bg-[#e9effa] mt-10 overflow-y-none overflow-x-auto text-center justify-center ml-10 mr-10">
                    <h3 className="text-center">Daily Period Analysis</h3>
                    <table className="border-4 border-solid border-black w-screen">
                        <thead className="border-4 border-solid border-black bg-gray-600">
                            <td className="border-2 border-solid border-collapse border-black p-2">Day</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">index</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">Net_Diff</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">Trade No</td>
                            <td className="border-2 border-solid border-collapse border-black p-2">Count</td>

                        </thead>
                        {
                            Array.isArray(e) && e.map((item, key) => {
                                return (
                                    <tr className="border-4 border-solid border-black bg-white">
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.Day}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item.index}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item['Net_diff']}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item['Trade No.']}</td>
                                        <td className="border-2 border-solid border-collapse border-black p-2">{item['Count']}</td>
                                    </tr>

                                )
                            })
                        }
                    </table>
                </div>
                {/* List of trades */}
                <div className="overflow-y-none overflow-x-auto text-center justify-center ml-10 mr-10 mb-10">
                    <h1 className="text-center">List Of Trades</h1>
                    <table className="border-4 border-solid border-black overflow-y-none overflow-x-auto">
                        {

                            <thead className="border-2 border-solid border-black bg-gray-600" key={f[0]}>
                                {Object.keys(f[0]).map(key => (
                                    <td className="border-2 border-solid border-collapse border-black p-2" key={key}>{key}</td>
                                ))}
                            </thead>
                        }

                        {
                            Array.isArray(f) && f.map((item, index) => {
                                return (
                                    <tr className="border-2 border-solid border-black bg-white" key={item}>
                                        {Object.keys(item).map(key => (
                                            <td className="border-2 border-solid border-collapse border-black p-2" key={key}>{item[key]}</td>
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
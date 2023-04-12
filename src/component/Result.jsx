import React from 'react'
import cumulative from './../cumulative.jpeg'
import drawdown from './../drawdown.jpeg'
import { Button } from '@mui/material'
import Graph from '../Graph/Graph'
import Graph1 from '../Graph/Graph1'


const Result = (props) => {
    // const a = ["NIFTY", ["BP"], [100], [-200], 1, [0], [50], [1000], [1000], "2020-01-06 09:30", "09:30", "2020-01-09 15:25", "15:25", true, true]

    // const b = [{ "week_no": "week_1", "bull_days": 0, "profit_bull_days": 0, "loss_bull_days": 0, "bull_gross_profit": 0.0, "bull_gross_loss": 0.0, "bull_net_profit": 0.0, "bull_net_loss": 0.0, "bull_pnl": 0.0, "bear_days": 0, "profit_bear_days": 0, "loss_bear_days": 0, "bear_gross_profit": 0, "bear_gross_loss": 0.0, "bear_net_profit": 0, "bear_net_loss": 0.0, "bear_pnl": 0.0 }, { "week_no": "week_2", "bull_days": 1, "profit_bull_days": 1, "loss_bull_days": 0, "bull_gross_profit": 1127.5, "bull_gross_loss": 0.0, "bull_net_profit": 1117.5, "bull_net_loss": 0.0, "bull_pnl": 1117.5, "bear_days": 2, "profit_bear_days": 0, "loss_bear_days": 2, "bear_gross_profit": 0, "bear_gross_loss": -640.0, "bear_net_profit": 0, "bear_net_loss": -660.0, "bear_pnl": -660.0 }, { "week_no": "week_3", "bull_days": 1, "profit_bull_days": 0, "loss_bull_days": 1, "bull_gross_profit": 0.0, "bull_gross_loss": -42.5, "bull_net_profit": 0.0, "bull_net_loss": -52.5, "bull_pnl": -52.5, "bear_days": 0, "profit_bear_days": 0, "loss_bear_days": 0, "bear_gross_profit": 0, "bear_gross_loss": 0.0, "bear_net_profit": 0, "bear_net_loss": 0.0, "bear_pnl": 0.0 }, { "week_no": "week_4", "bull_days": 0, "profit_bull_days": 0, "loss_bull_days": 0, "bull_gross_profit": 0.0, "bull_gross_loss": 0.0, "bull_net_profit": 0.0, "bull_net_loss": 0.0, "bull_pnl": 0.0, "bear_days": 0, "profit_bear_days": 0, "loss_bear_days": 0, "bear_gross_profit": 0, "bear_gross_loss": 0.0, "bear_net_profit": 0, "bear_net_loss": 0.0, "bear_pnl": 0.0 }, { "week_no": "last_week", "bull_days": 0, "profit_bull_days": 0, "loss_bull_days": 0, "bull_gross_profit": 0.0, "bull_gross_loss": 0.0, "bull_net_profit": 0.0, "bull_net_loss": 0.0, "bull_pnl": 0.0, "bear_days": 0, "profit_bear_days": 0, "loss_bear_days": 0, "bear_gross_profit": 0, "bear_gross_loss": 0.0, "bear_net_profit": 0, "bear_net_loss": 0.0, "bear_pnl": 0.0 }, { "week_no": "total(All Days)", "bull_days": 2, "profit_bull_days": 1, "loss_bull_days": 1, "bull_gross_profit": 1127.5, "bull_gross_loss": -42.5, "bull_net_profit": 1117.5, "bull_net_loss": -52.5, "bull_pnl": 1065.0, "bear_days": 2, "profit_bear_days": 0, "loss_bear_days": 2, "bear_gross_profit": 0, "bear_gross_loss": -640.0, "bear_net_profit": 0, "bear_net_loss": -660.0, "bear_pnl": -660.0 }]

    // const c = [{ "start_times": "09:30:00", "end_times": "15:25:00", "p&l": 405.0, "total_gross": 445.0, "trade_cnt": 4, "bull_trades": 2, "bull_gross": 1085.0, "bull_p&l": 1065.0, "bear_trades": 2, "bear_gross": -640.0, "bear_p&l": -660.0 }]

    // const d = [{ "Day": "Mon", "log_t=100_d=[-200]_stoploss=1000_maxprofit=1000": -240.0 }, { "Day": "Thu", "log_t=100_d=[-200]_stoploss=1000_maxprofit=1000": -52.5 }, { "Day": "Tue", "log_t=100_d=[-200]_stoploss=1000_maxprofit=1000": 1117.5 }, { "Day": "Wed", "log_t=100_d=[-200]_stoploss=1000_maxprofit=1000": -420.0 }]

    // const e = [{ "Datetime": "NIFTY_20200106_20200109_log_t=100_d=[-200]_stoploss=-1000_maxprofit=1000.csv", "Day": null, "FuturePrice": null, "StrikePrice": null, "Strike1": null, "Start1": null, "End1": null, "Diff1": null, "Gross_diff": null, "Max Profit": null, "Max Loss": null, "Expense1": null, "Total Expense": null, "Net_diff": null }, { "Datetime": null, "Day": null, "FuturePrice": null, "StrikePrice": null, "Strike1": null, "Start1": null, "End1": null, "Diff1": null, "Gross_diff": null, "Max Profit": null, "Max Loss": null, "Expense1": null, "Total Expense": null, "Net_diff": null }, { "Datetime": "01\/06\/2020 15:25", "Day": "Mon", "FuturePrice": 12047.4502, "StrikePrice": 12100.0, "Strike1": 11900.0, "Start1": 35.8, "End1": 31.2, "Diff1": -230.0, "Gross_diff": -230.0, "Max Profit": 60.0, "Max Loss": -800.0, "Expense1": 10.0, "Total Expense": 10.0, "Net_diff": -240.0 }, { "Datetime": "01\/07\/2020 11:11", "Day": "Tue", "FuturePrice": 12095.25, "StrikePrice": 12200.0, "Strike1": 12000.0, "Start1": 13.05, "End1": 35.6, "Diff1": 1127.5, "Gross_diff": 1127.5, "Max Profit": 1127.5, "Max Loss": -155.0, "Expense1": 10.0, "Total Expense": 10.0, "Net_diff": 1117.5 }, { "Datetime": "01\/08\/2020 15:25", "Day": "Wed", "FuturePrice": 12060.7002, "StrikePrice": 12000.0, "Strike1": 11800.0, "Start1": 17.55, "End1": 9.35, "Diff1": -410.0, "Gross_diff": -410.0, "Max Profit": 67.5, "Max Loss": -545.0, "Expense1": 10.0, "Total Expense": 10.0, "Net_diff": -420.0 }, { "Datetime": "01\/09\/2020 15:25", "Day": "Thu", "FuturePrice": 12271.0996, "StrikePrice": 12200.0, "Strike1": 12000.0, "Start1": 0.9, "End1": 0.05, "Diff1": -42.5, "Gross_diff": -42.5, "Max Profit": 15.0, "Max Loss": -42.5, "Expense1": 10.0, "Total Expense": 10.0, "Net_diff": -52.5 }, { "Datetime": null, "Day": null, "FuturePrice": null, "StrikePrice": null, "Strike1": null, "Start1": null, "End1": null, "Diff1": null, "Gross_diff": null, "Max Profit": null, "Max Loss": null, "Expense1": null, "Total Expense": null, "Net_diff": null }]
    
    const a = props.a;
    const b = props.b;
    const c = props.c;
    const d = props.d;
    const e = props.e;
    const f = props.f;
    const g = props.g;
    const h = props.h;
    const i = props.i;

    console.log("g",g)
    console.log("h",h)
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
    let x=g.map((item,key)=>{
        return ConvertJsonDateString(item.dt)
    })
    let y=h.map((item,key)=>{
        return item.Cumulative
    })
    let z=i.map((item,key)=>{
        return item['Drawdown%']
    })
    console.log("x",x)
    console.log("y",y)
    return (
        <>
           {/* Box of Main Answer of Every Value */}
         <div className="grid grid-cols-3 mt-10 bg-blue-300 rounded ml-10 mr-10">
         <h1 className="text-black ml-10 text-l">Backtesting result</h1>
         <Button variant="contained" className="w-72" >Download Result as Excel</Button>
         <Button variant="contained" className="w-72">Download Result as PDF</Button>
         </div>
           <div className="grid grid-cols-5 gap-5 m-10">
           {
            d.map((item,key)=>{
                return(
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
                        <td className="border-2 border-solid border-collapse border-black p-2">{a[8]}</td>
                        <td className="border-2 border-solid border-collapse border-black p-2">{a[10]}</td>
                        <td className="border-2 border-solid border-collapse border-black p-2">{a[11]}</td>
                        <td className="border-2 border-solid border-collapse border-black p-2">{a[12]}</td>
                        <td className="border-2 border-solid border-collapse border-black p-2">{a[13]}</td>
                        <td className="border-2 border-solid border-collapse border-black p-2">{a[14]}</td>
                    </tr>
                </table>
            </div>
      

            
            {/* timeGroup Profitability */}
            <div className="bg-[#e9effa] mt-10 overflow-y-none overflow-x-auto text-center justify-center ml-10 mr-10">
                <h3 className="text-center">TimeGroup profitability</h3>
                <table className="border-4 border-solid border-black">
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
                                <tr className="border-4 border-solid border-black bg-white">
                                    <td className="border-2 border-solid border-collapse border-black p-2">{item.Start1}</td>
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

                            )

                        })
                    }

                </table>
            </div>
            <h1 className="text-center mt-20">Graph</h1>
          {/* Graph make */}
          <Graph a={x} b={y}/>
          <Graph1 a={x} b={z}/>
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
                <table className="border-4 border-solid border-black">
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
              <div className="overflow-y-none overflow-x-auto text-center justify-center ml-10 mr-10">
            <h1 className="text-center">List Of Trades</h1>
            <table className="border-4 border-solid border-black overflow-y-none overflow-x-auto">
                <thead className="border-4 border-solid border-black bg-gray-600">
                <td className="border-2 border-solid border-collapse border-black p-2">Datetime</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">Day</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">FuturePrice</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">StrikePrice</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">Strike1</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">Start1</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">Start1</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">End1</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">Diff1</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">Gross_diff</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">Max_Profit</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">MaxLoss</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">Expense1</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">TotalExpense</td>
                    <td className="border-2 border-solid border-collapse border-black p-2">Net_Diff</td>
                </thead>
                {
                    Array.isArray(f) && f.map((item, key) => {
                        return (
                            <tr className="border-2 border-solid border-black bg-white">
                               <td className="border-2 border-solid border-collapse border-black p-2">{item.Datetime}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item.Day}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item.FuturePrice}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item.StrikePrice}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item.Strike1}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item.Start1}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item.End1}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item.Diff1}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item['Gross_diff']}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item['Max Profit']}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item['Max Loss']}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item['Expense1']}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item['Total expense']}</td>
                                <td className="border-2 border-solid border-collapse border-black p-2">{item.Net_diff}</td>
                            </tr>
                        )
                    })
                }
            </table>
            </div>


        </>
    )
}

export default Result
import React from 'react'


const Result = (props) => {
    //    const a = ["NIFTY", ["BP"], [100], [-200], 1, [0], [50], [1000], [1000], "2020-01-06 09:30", "09:30", "2020-01-09 15:25", "15:25", true, true]

    //    const b= [{"week_no":"week_1","bull_days":0,"profit_bull_days":0,"loss_bull_days":0,"bull_gross_profit":0.0,"bull_gross_loss":0.0,"bull_net_profit":0.0,"bull_net_loss":0.0,"bull_pnl":0.0,"bear_days":0,"profit_bear_days":0,"loss_bear_days":0,"bear_gross_profit":0,"bear_gross_loss":0.0,"bear_net_profit":0,"bear_net_loss":0.0,"bear_pnl":0.0},{"week_no":"week_2","bull_days":1,"profit_bull_days":1,"loss_bull_days":0,"bull_gross_profit":1127.5,"bull_gross_loss":0.0,"bull_net_profit":1117.5,"bull_net_loss":0.0,"bull_pnl":1117.5,"bear_days":2,"profit_bear_days":0,"loss_bear_days":2,"bear_gross_profit":0,"bear_gross_loss":-640.0,"bear_net_profit":0,"bear_net_loss":-660.0,"bear_pnl":-660.0},{"week_no":"week_3","bull_days":1,"profit_bull_days":0,"loss_bull_days":1,"bull_gross_profit":0.0,"bull_gross_loss":-42.5,"bull_net_profit":0.0,"bull_net_loss":-52.5,"bull_pnl":-52.5,"bear_days":0,"profit_bear_days":0,"loss_bear_days":0,"bear_gross_profit":0,"bear_gross_loss":0.0,"bear_net_profit":0,"bear_net_loss":0.0,"bear_pnl":0.0},{"week_no":"week_4","bull_days":0,"profit_bull_days":0,"loss_bull_days":0,"bull_gross_profit":0.0,"bull_gross_loss":0.0,"bull_net_profit":0.0,"bull_net_loss":0.0,"bull_pnl":0.0,"bear_days":0,"profit_bear_days":0,"loss_bear_days":0,"bear_gross_profit":0,"bear_gross_loss":0.0,"bear_net_profit":0,"bear_net_loss":0.0,"bear_pnl":0.0},{"week_no":"last_week","bull_days":0,"profit_bull_days":0,"loss_bull_days":0,"bull_gross_profit":0.0,"bull_gross_loss":0.0,"bull_net_profit":0.0,"bull_net_loss":0.0,"bull_pnl":0.0,"bear_days":0,"profit_bear_days":0,"loss_bear_days":0,"bear_gross_profit":0,"bear_gross_loss":0.0,"bear_net_profit":0,"bear_net_loss":0.0,"bear_pnl":0.0},{"week_no":"total(All Days)","bull_days":2,"profit_bull_days":1,"loss_bull_days":1,"bull_gross_profit":1127.5,"bull_gross_loss":-42.5,"bull_net_profit":1117.5,"bull_net_loss":-52.5,"bull_pnl":1065.0,"bear_days":2,"profit_bear_days":0,"loss_bear_days":2,"bear_gross_profit":0,"bear_gross_loss":-640.0,"bear_net_profit":0,"bear_net_loss":-660.0,"bear_pnl":-660.0}]

    //    const c=[{"start_times":"09:30:00","end_times":"15:25:00","p&l":405.0,"total_gross":445.0,"trade_cnt":4,"bull_trades":2,"bull_gross":1085.0,"bull_p&l":1065.0,"bear_trades":2,"bear_gross":-640.0,"bear_p&l":-660.0}]

    //   const d=[{"Day":"Mon","log_t=100_d=[-200]_stoploss=1000_maxprofit=1000":-240.0},{"Day":"Thu","log_t=100_d=[-200]_stoploss=1000_maxprofit=1000":-52.5},{"Day":"Tue","log_t=100_d=[-200]_stoploss=1000_maxprofit=1000":1117.5},{"Day":"Wed","log_t=100_d=[-200]_stoploss=1000_maxprofit=1000":-420.0}]

    //   const e=[{"Datetime":"NIFTY_20200106_20200109_log_t=100_d=[-200]_stoploss=-1000_maxprofit=1000.csv","Day":null,"FuturePrice":null,"StrikePrice":null,"Strike1":null,"Start1":null,"End1":null,"Diff1":null,"Gross_diff":null,"Max Profit":null,"Max Loss":null,"Expense1":null,"Total Expense":null,"Net_diff":null},{"Datetime":null,"Day":null,"FuturePrice":null,"StrikePrice":null,"Strike1":null,"Start1":null,"End1":null,"Diff1":null,"Gross_diff":null,"Max Profit":null,"Max Loss":null,"Expense1":null,"Total Expense":null,"Net_diff":null},{"Datetime":"01\/06\/2020 15:25","Day":"Mon","FuturePrice":12047.4502,"StrikePrice":12100.0,"Strike1":11900.0,"Start1":35.8,"End1":31.2,"Diff1":-230.0,"Gross_diff":-230.0,"Max Profit":60.0,"Max Loss":-800.0,"Expense1":10.0,"Total Expense":10.0,"Net_diff":-240.0},{"Datetime":"01\/07\/2020 11:11","Day":"Tue","FuturePrice":12095.25,"StrikePrice":12200.0,"Strike1":12000.0,"Start1":13.05,"End1":35.6,"Diff1":1127.5,"Gross_diff":1127.5,"Max Profit":1127.5,"Max Loss":-155.0,"Expense1":10.0,"Total Expense":10.0,"Net_diff":1117.5},{"Datetime":"01\/08\/2020 15:25","Day":"Wed","FuturePrice":12060.7002,"StrikePrice":12000.0,"Strike1":11800.0,"Start1":17.55,"End1":9.35,"Diff1":-410.0,"Gross_diff":-410.0,"Max Profit":67.5,"Max Loss":-545.0,"Expense1":10.0,"Total Expense":10.0,"Net_diff":-420.0},{"Datetime":"01\/09\/2020 15:25","Day":"Thu","FuturePrice":12271.0996,"StrikePrice":12200.0,"Strike1":12000.0,"Start1":0.9,"End1":0.05,"Diff1":-42.5,"Gross_diff":-42.5,"Max Profit":15.0,"Max Loss":-42.5,"Expense1":10.0,"Total Expense":10.0,"Net_diff":-52.5},{"Datetime":null,"Day":null,"FuturePrice":null,"StrikePrice":null,"Strike1":null,"Start1":null,"End1":null,"Diff1":null,"Gross_diff":null,"Max Profit":null,"Max Loss":null,"Expense1":null,"Total Expense":null,"Net_diff":null}]
   
    const a = (props.a);
    const b = (props.b);
    const c = (props.c);
    const d = (props.d);
    const e = (props.e);

    return (
        <>
            {/* inputs analysis */}
            <div className="bg-[#e9effa] mt-10">
                <h3 className="text-center">Input Data Format</h3>
                <table className="border-4 border-solid border-black" style={{ width: "100%" }}>
                    <thead className="border-4 border-solid border-black">
                        <td className="border-2 border-solid border-collapse border-black">Trade Symbol</td>
                        <td className="border-2 border-solid border-collapse border-black">Legs_info</td>
                        <td className="border-2 border-solid border-collapse border-black">T</td>
                        <td className="border-2 border-solid border-collapse border-black">D</td>
                        <td className="border-2 border-solid border-collapse border-black">D_Range</td>
                        <td className="border-2 border-solid border-collapse border-black">D_Incr</td>
                        <td className="border-2 border-solid border-collapse border-black">Quantity</td>
                        <td className="border-2 border-solid border-collapse border-black">StopLoss</td>
                        <td className="border-2 border-solid border-collapse border-black">Max_Profit</td>
                        <td className="border-2 border-solid border-collapse border-black">Start Date</td>
                        <td className="border-2 border-solid border-collapse border-black">Day_start_time</td>
                        <td className="border-2 border-solid border-collapse border-black">End_date</td>
                        <td className="border-2 border-solid border-collapse border-black">Day_End_Time</td>
                        <td className="border-2 border-solid border-collapse border-black">Intraday</td>
                        <td className="border-2 border-solid border-collapse border-black">Halt_on</td>
                    </thead>
                    <tr className="border-4 border-solid border-black">
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                       <td className="border-2 border-solid border-collapse border-black"></td>
                    </tr>
                </table>
            </div>
            {/* List of trades */}
            <h1 className="text-center">List Of Trades</h1>
            <table className="border-4 border-solid border-black" style={{ width: "100%" }}>
                <thead className="border-4 border-solid border-black">
                    <td className="border-2 border-solid border-collapse border-black">Day</td>
                    <td className="border-2 border-solid border-collapse border-black">FuturePrice</td>
                    <td className="border-2 border-solid border-collapse border-black">StrikePrice</td>
                    <td className="border-2 border-solid border-collapse border-black">Strike1</td>
                    <td className="border-2 border-solid border-collapse border-black">Start1</td>
                    <td className="border-2 border-solid border-collapse border-black">Start1</td>
                    <td className="border-2 border-solid border-collapse border-black">End1</td>
                    <td className="border-2 border-solid border-collapse border-black">Diff1</td>
                    <td className="border-2 border-solid border-collapse border-black">Gross_diff</td>
                    <td className="border-2 border-solid border-collapse border-black">Max_Profit</td>
                    <td className="border-2 border-solid border-collapse border-black">MaxLoss</td>
                    <td className="border-2 border-solid border-collapse border-black">Expense1</td>
                    <td className="border-2 border-solid border-collapse border-black">TotalExpense</td>
                    <td className="border-2 border-solid border-collapse border-black">Net_Diff</td>
                </thead>
                {
                    Array.isArray(e) && e.map((item, key) => {
                        return (
                                <tr className="border-2 border-solid border-black">
                                    <td className="border-2 border-solid border-collapse border-black">{item.Day}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.FuturePrice}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.StdikePrice}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.Stdike1}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.Start1}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.End1}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.Diff1}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.Gross_diff}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.MaxProfit}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.MaxLoss}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.Expense1}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.TotalExpense}</td>
                                    <td className="border-2 border-solid border-collapse border-black">{item.Net_Diff}</td>
                                </tr>
                        )
                    })
                }
            </table>

            {/* Daily Period Analysis */}
            <div className="bg-[#e9effa] mt-10">
                <h3 className="text-center">Daily Period Analysis</h3>
                <table className="border-4 border-solid border-black" style={{ width: "100%" }}>
                    <thead className="border-4 border-solid border-black">
                        <td className="border-2 border-solid border-collapse border-black">Day</td>
                        <td className="border-2 border-solid border-collapse border-black">log_t=100_d=[-200]_stoploss=1000_maxprofit=1000</td>
                    </thead>
                    {
                        Array.isArray(d) && d.map((item, key) => {
                            return (
                                    <tr className="border-4 border-solid border-black">
                                        <td className="border-2 border-solid border-collapse border-black">{item.Day}</td>
                                        <td className="border-2 border-solid border-collapse border-black">{item['log_t=100_d=[-200]_stoploss=1000_maxprofit=1000']}</td>  
                                    </tr>
                                
                            )
                        })
                    }
                </table>
            </div>
            {/* timeGroup Profitability */}
            <div className="bg-[#e9effa] mt-10">
                <h3 className="text-center">TimeGroup profitability</h3>
                <table className="border-4 border-solid border-black" style={{ width: "100%" }}>
                    <thead className="border-4 border-solid border-black">
                       <td className="border-2 border-solid border-collapse border-black">start_times</td>
                       <td className="border-2 border-solid border-collapse border-black">end_times</td>
                       <td className="border-2 border-solid border-collapse border-black">p&l</td>
                       <td className="border-2 border-solid border-collapse border-black">total_gross</td>
                       <td className="border-2 border-solid border-collapse border-black">trade_cnt</td>
                       <td className="border-2 border-solid border-collapse border-black">bull_trades</td>
                       <td className="border-2 border-solid border-collapse border-black">bull_gross</td>
                       <td className="border-2 border-solid border-collapse border-black">bull_p&l</td>
                       <td className="border-2 border-solid border-collapse border-black">bear_trades</td>
                       <td className="border-2 border-solid border-collapse border-black">bear_gross</td>
                       <td className="border-2 border-solid border-collapse border-black">bear_p&l</td>
                    </thead>
                    {
                        Array.isArray(c) && c.map((item, key) => {
                            return (
                                    <tr className="border-4 border-solid border-black">
                                       <td className="border-2 border-solid border-collapse border-black">{item.Start1}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.end_times}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item['p&l']}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.total_gross}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.trade_cnt}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bull_trades}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bull_gross}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item['bull_p&l']}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bear_trades}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bear_gross}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item['bear_p&l']}</td>
                                    </tr>
                                
                            )

                        })
                    }

                </table>
            </div>
            {/* Graph of strategies */}


            {/*Week Wise Profitability */}
            <div className="bg-[#e9effa] mt-10">
                <h3 className="text-center">Week Wise Profitability</h3>
                <table className="border-4 border-solid border-black" style={{ width: "100%" }}>
                    <thead className="border-4 border-solid border-black">
                       <td className="border-2 border-solid border-collapse border-black">Week_No</td>
                       <td className="border-2 border-solid border-collapse border-black">bull_days</td>
                       <td className="border-2 border-solid border-collapse border-black">profit_bull_days</td>
                       <td className="border-2 border-solid border-collapse border-black">loss_bull_days</td>
                       <td className="border-2 border-solid border-collapse border-black">bull_gross_profit</td>
                       <td className="border-2 border-solid border-collapse border-black">bull_gross_loss</td>
                       <td className="border-2 border-solid border-collapse border-black">bull_net_profit</td>
                       <td className="border-2 border-solid border-collapse border-black">bull_net_loss</td>
                       <td className="border-2 border-solid border-collapse border-black">bull_pnl</td>
                       <td className="border-2 border-solid border-collapse border-black">bear_days</td>
                       <td className="border-2 border-solid border-collapse border-black">profit_bear_days</td>
                       <td className="border-2 border-solid border-collapse border-black">loss_bear_days</td>
                       <td className="border-2 border-solid border-collapse border-black">bear_gross_profit</td>
                       <td className="border-2 border-solid border-collapse border-black">bear_gross_loss</td>
                       <td className="border-2 border-solid border-collapse border-black">bear_net_profit</td>
                       <td className="border-2 border-solid border-collapse border-black">bear_net_loss</td>
                       <td className="border-2 border-solid border-collapse border-black">bear_pnl</td>
                    </thead>
                    {
                        Array.isArray(b) && b.map((item, key) => {
                            return (
                                <tr className="border-4 border-solid border-black">
                                       <td className="border-2 border-solid border-collapse border-black">{item.Week_No}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bull_days}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.profit_bull_days}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.loss_bull_days}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bull_gross_profit}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bull_gross_loss}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bull_net_profit}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bull_net_loss}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bull_pnl}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bear_days}</td>
                                       <td className="border-2 border-solid border-collapse border-black" >{item.profit_bear_days}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.loss_bear_days}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bear_gross_profit}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bear_gross_loss}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bear_net_profit}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bear_net_loss}</td>
                                       <td className="border-2 border-solid border-collapse border-black">{item.bear_pnl}</td>
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
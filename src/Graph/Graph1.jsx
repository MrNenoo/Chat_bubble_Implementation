import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

const Graph1 = (props) => {
    const data = {
        labels: props.a,
        datasets: [
          {
            label: 'DrawDown Graph',
            data: props.b,
            color:"black",
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      };
      console.log(props.b)
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false
              }
            }
          ]
        }
      };
  return (
    <div className="m-10">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph1;

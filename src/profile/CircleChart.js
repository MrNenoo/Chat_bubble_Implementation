import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

function CircleChart() {

  const data = {
    labels: ['Red', 'Green', 'Blue'],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 70,
    legend: {
      display: true,
      position: 'bottom'
    },
    tooltips: {
      enabled: true,
      callbacks: {
        label: (tooltipItem, data) => {
          const label = data.labels[tooltipItem.index];
          const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return `${label}: ${value}`;
        }
      }
    }
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default CircleChart

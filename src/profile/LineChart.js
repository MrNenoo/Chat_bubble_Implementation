import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Expenses',
        data: [5, 10, 12, 7, 4],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Profit',
        data: [7, 9, 5, 8, 11],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  });

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;

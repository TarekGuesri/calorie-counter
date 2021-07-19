import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: [
    'Walking: 5.6 kmh',
    'Running: 8 kmh',
    'Weight Lifting',
    'Bicycling: 20 khm',
    'Swimming',
    'Rope Jumping (Slow)',
  ],
  datasets: [
    {
      label: 'Calories',
      data: [133, 288, 108, 288, 216, 281],
      backgroundColor: '#55973f',
      borderRadius: 25,
      barPercentage: 0.4,
    },
  ],
};
const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  scales: {
    yAxis: {
      lineWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Calories burned (30 minutes)',
    },
  },
};

const ActivityChart = () => {
  return <Bar data={data} options={options} />;
};

export default ActivityChart;

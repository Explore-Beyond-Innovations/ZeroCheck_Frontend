"use client"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    
  function generateData(numPoints: number) {
    const data = [];
    let currentValue = 50;

    for (let i = 0; i < numPoints; i++) {
      const randomChange = Math.random() * 20 - 10; 
      currentValue += randomChange;
      data.push(currentValue);
    }

    return data;
  }

  const labels = Array.from({ length: 120 }, (_, i) => `Week ${i + 1}`);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        data: [...generateData(120)],
        borderColor: "#6366F1",
        borderWidth: 1,
        tension: 0.2,
        fill: true,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1.5,
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false, 
        ticks: {
          display: false, 
        },
        grid: {
          display: false, 
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="p-6 w-full mx-auto h-full">
      <Line data={data} options={options} style={{ width: '100%', height: '100%' }}  /> 
    </div>
  );
};

export default LineChart;
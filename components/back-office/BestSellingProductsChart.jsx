'use client';
import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';


export default function BestSellingProductsChart() {
    const [chart, setChart] = useState(null);

  const chartData = {
    labels: ['Watermelon', 'Cabbage', 'Pumpkin'],
    datasets: [
      {
        label: 'Weekly Sales',
        data: [30, 50, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
    },
  };

  useEffect(() => {
    if (!chart) {
      setChart(
        new Chart('weeklySalesChart', {
          type: 'pie',
          data: chartData,
          options: chartOptions,
        })
      );
    }

    return () => {
        if (chart) {
          chart.destroy();
        }
      };
    }, [chart, chartData, chartOptions]);

  return (
    <div className='bg-slate-700 p-8 rounded-lg '>
        <h2 className='text-xl font-bold'>Best Selling Products</h2>

        {/* Chart */}
        <canvas id="weeklySalesChart"></canvas>

    </div>
  )
}

"use client";

import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import { faker } from "@faker-js/faker";

export default function WeeklySalesChart() {
  const tabs = [
    { title: "Sales", type: "sales" },
    { title: "Orders", type: "orders" },
  ];
  
  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const generateRandomData = () => {
    return Array.from({ length: 7 }, () => faker.number.int({ min: 50, max: 500 }));
  };

  const getChartData = () => {
    return {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
        {
          label: chartToDisplay === "sales" ? "Sales (in $)" : "Orders",
          data: generateRandomData(),
          borderColor: chartToDisplay === "sales" ? "rgba(75, 192, 192, 1)" : "rgba(255, 99, 132, 1)",
          backgroundColor: chartToDisplay === "sales" ? "rgba(75, 192, 192, 0.2)" : "rgba(255, 99, 132, 0.2)",
          borderWidth: 2,
          tension: 0.4, // Smooth curve
        },
      ],
    };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#fff" } },
    },
    scales: {
      x: { ticks: { color: "#fff" } },
      y: { ticks: { color: "#fff", beginAtZero: true } },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: "line",
        data: getChartData(),
        options: chartOptions,
      });
    }
  }, [chartToDisplay]); // Re-render the chart when the tab changes

  return (
    <div className="bg-slate-700 p-8 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Weekly {chartToDisplay === "sales" ? "Sales" : "Orders"}</h2>

      {/* Tabs */}
      <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-400">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab, i) => (
            <li className="me-2" key={i}>
              <button
                onClick={() => setChartToDisplay(tab.type)}
                className={
                  chartToDisplay === tab.type
                    ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active"
                    : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-100"
                }
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Chart Canvas */}
      <div className="mt-4">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
}
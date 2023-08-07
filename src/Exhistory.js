import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import './Exhistory.css'
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const Exhistory = () => {
  const [data, setData] = useState([]);
  const ref1 = useRef();
  const ref2 = useRef();
  let a, b;
  useEffect(() => {
    fetchData(a,b);
  }, []);
  const handle = (e) => {
    e.preventDefault();
    if (ref1.current.value !== "" && ref2.current.value !== "") {
      a = ref1.current.value;
        b = ref2.current.value;
      }
    fetchData(a, b);
  }
const chartRef = useRef(); // Reference to the Chart instance
const fetchData = async (a="2023-08-01", b="2023-08-03") => {
  let c=a;
  let d=b;
  try {
    const response = await axios.get(
      `https://api.exchangerate.host/fluctuation?start_date=${c}&end_date=${d}&symbols=AUD,CAD,CHF,EUR,GBP,JPY,USD`
    );

    const currenciesData = response.data.rates;
    const currencies = Object.keys(currenciesData);

    const chartData = currencies.map((currency) => ({
      currency,
      change: currenciesData[currency].change,
    }));

    setData(chartData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

useEffect(() => {
  // Destroy the old Chart instance before creating a new one
  if (chartRef.current) {
    chartRef.current.destroy();
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  // Create the new Chart instance
  if (data.length > 0) {
    chartRef.current = new Chart(document.getElementById("exhistory-chart"), {
      type: "line",
      data: {
        labels: data.map((item) => item.currency),
        datasets: [
          {
            label: "Change",
            data: data.map((item) => item.change),
            backgroundColor: "red",
          },
        ],
      },
      options: {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false, // Disable maintaining aspect ratio
        scales: {
          x: {
            type: "category",
          },
          y: {
            beginAtZero: true,
            type: "linear",
          },
        },
      },
    });
  }
}, [data]);

return (
  <div className="History">
        <h1>Currency Value Difference</h1>
  <div className="HistoryData">
    <div className="HistoryData--Canvas">
      <canvas id="exhistory-chart" className="historychart"></canvas>
    </div>
    <div className="HistoryData--Form">
      <form onSubmit={handle} style={{width:"100%"}}>
        <label>FROM:</label>
        <input type='date' ref={ref1} />
        <label>TO:</label>
        <input type='date' ref={ref2} />
        <button>Submit</button>
      </form>
    </div>
  </div>
  </div>
);
};

export default Exhistory;


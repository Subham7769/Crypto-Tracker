import React,{useContext} from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this
import { convertNumber } from "../../../functions/convertNumber";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import {CoinsContext} from "../../../Context/CoinsProvider.jsx"



function LineChart({ chartData, priceType, multiAxis }) {
  const {currencySymbol} = useContext(CoinsContext)
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y1: {
        type: "linear",
        display: true,
        position: "left",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumber(value);
            } else if (priceType == "market_caps") {
              return currencySymbol + convertNumber(value);
            } else {
              return currencySymbol + value.toLocaleString();
            }
          },
        },
      },
      y2: {
        type: "linear",
        display: multiAxis ? true : false,
        position: "right",
        ticks: {
          callback: function (value) {
            if (priceType == "total_volumes") {
              return convertNumber(value);
            } else if (priceType == "market_caps") {
              return currencySymbol + convertNumber(value);
            } else {
              return currencySymbol + value.toLocaleString();
            }
          },
        },
      },
    },
  };

  return <div><Line data={chartData} options={options} /></div>
}

export default LineChart;

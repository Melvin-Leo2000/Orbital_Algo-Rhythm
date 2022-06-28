import React, {useState, useEffect} from 'react'
import axios from 'axios'
import LineChart from "./LineChart";


import {Line} from "react-chartjs-2"


export default function Chart() {


  const [bigdata, setData] = useState(null)
  const [chartData, setChartData] = useState({});



  const chart = () =>{
    const date = []
    const price = []
    const API_CALL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=${56HRM54CT7DAHQDM}'
    axios.get(API_CALL).then((response) => {
      setData(response.data)

      for (const key in bigdata['Time Series (Daily)']) {
        date.push(key);
        price.push(bigdata['Time Series (Daily)'][key]['1. open']);
      }

      setChartData({
        labels: date,
        datasets: [
          {
            label: "Stock Price Chart",
            data: price,
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 4
          }
        ]
      });
    })
    .catch(err => {
      console.log(err);
    });
    console.log(date, price)
}




  return (
    <div>
      <div style={{ width: 700 }}>
        <LineChart chartData={chartData} />
      </div>
        <button type="submit" onClick={chart}>Click me</button>
    </div>
  )
}
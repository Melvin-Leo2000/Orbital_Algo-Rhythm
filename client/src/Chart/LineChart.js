import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Plot from 'react-plotlyjs';


import {Line} from "react-chartjs-2"


export default function Chart() {


  const [bigdata, setData] = useState(null)
  const [chartData, setChartData] = useState({});
  
  const initialState = {
    xvalue: [],
    yvalue: []
  }
  const [state, Setstate] = useState(initialState)


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

      console.log(date)

      Setstate({
        xvalue: date,
        yvalue: price
      })
    })
    .catch(err => {
      console.log(err);
    });
    console.log(date, price)
}

useEffect(() => {
  chart();
}, []);




  return (
    <div>
        <Plot
          data={[
            {
              x: state.xvalue,
              y: state.yvalue,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
        />

    </div>
  )
}
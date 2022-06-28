import React from 'react';
import Plot from 'react-plotly.js';


class RSI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rsixvalues: [],
      rsiyvalues: []
    }
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = '56HRM54CT7DAHQDM';
    const StockSymbol = this.props.stockname.toUpperCase();


    //RSI indicator
    let RSI_Call = 'https://www.alphavantage.co/query?function=RSI&symbol=' + StockSymbol + '&interval=weekly&time_period=10&series_type=open&apikey=${API_KEY}'
    let rsixvaluefunction = [];
    let rsiyvaluefunction = [];

      fetch(RSI_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {


          for (var key in data['Technical Analysis: RSI']) {
            rsixvaluefunction.push(key);
            rsiyvaluefunction.push(data['Technical Analysis: RSI'][key]['RSI']);
          }

          pointerToThis.setState({
            rsixvalues: rsixvaluefunction,
            rsiyvalues: rsiyvaluefunction
          });
        }
      )

    
  }

  render() {
    const selectorOptions = {
        buttons: [{
            step: 'month',
            stepmode: 'backward',
            count: 1,
            label: '1m'
        }, {
            step: 'month',
            stepmode: 'backward',
            count: 6,
            label: '6m'
        }, {
            step: 'year',
            stepmode: 'todate',
            count: 1,
            label: 'YTD'
        }, {
            step: 'year',
            stepmode: 'backward',
            count: 1,
            label: '1y'
        }, {
            step: 'all',
        }],
    };
    return (
      <div>

        <Plot
          data={[
            {
              x: this.state.rsixvalues,
              y: this.state.rsiyvalues,
              type: 'scatter',
              mode: 'lines',
              marker: {color: 'black'},
            }

          ]}
          layout={{width: 1200, height: 500, title: 'RSI Analysis', xaxis: { title: {text: 'Date', font: {family: 'Courier New, monospace', size: 18,color: '#7f7f7f'}},  rangeselector: selectorOptions,
            rangeslider: {}}, yaxis: {title: {
          text: "RSI Technical Analysis", font: { family: "Courier New, monospace", size: 18,color: "#7f7f7f"}}, fixedrange: true}}}
        />
        
      </div>
    )
  }
}

export default RSI;
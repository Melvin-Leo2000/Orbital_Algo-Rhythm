import React, {useState} from 'react';
import Stock from './charts';
import RSI from './rsi';
import './chart.css'
import Header from '../../src/components/header/Header'

function Chart() {
  
  const [stonk, setStonk] = useState('')
  const [print, setPrint] = useState(false)
  

  const refreshPage = ()=>{
    window.location.reload();
  }
  
  const userLink = () => {
    return <div>
          <h1 className='stock-faq'>Simply search for the stock price by entering the Stock Symbol below!</h1>
          <p className='disclaimer'><b>*Companies must be NASDAQ-listed companies</b></p>
          
    </div>

    }

  const handleSubmit = (e) => {
    e.preventDefault();

    setPrint(true)
  }
  return (
    <div className="App">
      <Header />
      <div className='stockprice'>
                {
                  !print?
                  userLink()
                  :null
                }

            <form className="stock-form" onSubmit={handleSubmit}>

                {
                  !print?
                  <input className='stock-input' type="text" placeholder="Search Stock Symbol" value={stonk} onChange={(e) => setStonk(e.target.value)} />
                  :null
                }
                    
                {
                  !print?
                    <button className='before-button' type="submit">Search</button>
                  :null
                }
                {
                  print?
                    <button className="after-button" onClick={refreshPage} type="submit">Search Another Stock</button>
                  :null
                }
                
            </form>

      {
       print?
            <Stock stockname= {stonk} ></Stock>

       :null
     }

     {
       print?
            <RSI stockname= {stonk} ></RSI>

       :null
     }
      </div>
      
    </div>
  );
}

export default Chart;






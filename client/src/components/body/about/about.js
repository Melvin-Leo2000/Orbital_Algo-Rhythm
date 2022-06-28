import React from 'react'
import about_img from '../../images/standing_mountain.jpg'
import './about.css'
import Header from './aboutheader'
import firstpic from '../../images/what-to-consider.png'
import data from "../../images/trading_graph.png"
import stock from "../../images/tesla_stock.jpg"


export default function about() {
  return (
    <div className="backgroundname">
        <Header />
        <img className='aboutbg' src={about_img} alt='aboutpic' />
        <img className='what-to-consider' src={firstpic} alt='firstpic' />
        <div className="firstcol">
          <h2>Make better Investment and trading decisions</h2>
          <p>Backtest your own stock trading strategies and check the viability of your trading strategies without any risk</p>
        </div>
        <hr className='lineone'></hr>
        <img className='stock' src={stock} alt='thirdpic' />
        <div className='seconcol'>
          <h2>Analyse historical stock pricing data</h2>
          <p>Input your intended trading strategy and conduct trades dailu based on specified indcators at closing prices.</p>
        </div>
        <hr className='linetwo'></hr>
        <img className='trading' src={data} alt='secondpic' />
        <div className='thirdcol'>
          <h2>Simulate your portfolio</h2>
          <p>These trades are conducted according to the historical market conditions and calculate the total return of the portfolio</p>
        </div>

        <footer className='aboutfooter'>
        <ul>
            <p>© Orbital 2022 Team Algo-Rhythm, ID 5432, Brandon Lau and Melvin Leo.</p>
            <p>Project's repository and acknowledgments can be found here</p>
        </ul>
        </footer>

    </div>
  )
}

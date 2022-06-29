import React from 'react';
import Header from "../../header/Header"
import "./main.css"
import {useSelector} from 'react-redux'
import  { Navigate } from 'react-router-dom'
import News from '../../news/news'
import Stock from '../../../Chart/s&p'


export default function Main() {
    const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth

    const userLink = () => {
    return <div>
        <div>

          <h1 className='greeting'>Hey there {user.name}!</h1>
          <p className='welcome-back'>Welcome back to algorithm :D</p>
        </div>
          <div className='news-section'>
          <div className="snaps">
            <h2>Check-out Rhythm-share from others </h2>
            <p>Your essential 2 minute market digests.</p>
           </div>
           </div>
          <div className="market">
            <h2>Market Summary for S&P 500</h2>
            <Stock></Stock>
          </div>

          
    </div>

    }
    const transForm = {
      transform: isLogged ? "translateY(-5px)" : 0
    }

  return (
      <div className='welcome'>
        <div className="sticky-thc">
          <Header />


        </div>
          <div style={transForm}>
                {
                    isLogged
                    ? userLink()
                    :<Navigate to='/main' />
                    
                }
                
            </div>
      </div>
  )
}

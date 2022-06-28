import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'
import logo from './logo.png';
import "./header.css"



function Header() {
    const auth = useSelector(state => state.auth)

    const {user, isLogged} = auth


    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const userLink = () => {
        return <div>
         <li className="drop-nav">
            <Link to="#" className="avatar">
            {user.name} 
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                
            </ul>
            
        </li>
        <li className='chart'><a href='/chart'>Rhythm-Check</a></li>
        <li className='news'><a href='/writepost'>Rhythm-Share</a></li>
        <li className='home'><a href='/main'>Home</a></li>
        </div>
    }

    const transForm = {
        transform: isLogged ? "translateY(-5px)" : 0
    }

    return (
        <header className='header-container'>
            <img className='header-logo' src={logo} alt='Logo' />


            <ul style={transForm}>
                {
                    isLogged
                    ? userLink()
                    :<li className='login_symbol'><a href='/login'>Sign in</a></li>
                    
                }
                
            </ul>
        </header>
    )
}

export default Header



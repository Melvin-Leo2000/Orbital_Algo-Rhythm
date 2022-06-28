import React, {useState} from 'react'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/validation/Validation'
import image from './sunsetman.png';
import logo from './logo.png';
import "./register.css"

const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)

    const {name, email, password,cf_password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            const res = await axios.post('/user/register', {
                name, email, password
            })

            setUser({...user, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    return (
        <div className="regis_page">




            <form className="form" onSubmit={handleSubmit}>
            <img className='algo' src={logo} alt='Logo' />
                <div className='US'>
                    <label htmlFor="name"></label>
                    <input type="text" placeholder="Username" id="name"
                    value={name} name="name" onChange={handleChangeInput} />
                </div>

                <div className='regisemail'>
                    <label htmlFor="email"></label>
                    <input type="text" placeholder="Email Address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                </div>

                <div className='regispw'>
                    <label htmlFor="password"></label>
                    <input type="password" placeholder="Password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                </div>

                <div className='CPW'>
                    <label htmlFor="cf_password"></label>
                    <input type="password" placeholder="Confirm password" id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
                </div>
                <div className='regiserror'>{err && showErrMsg(err)}</div>
                {success && showSuccessMsg(success)}

                <div className='row2'>
                    <button  type="submit">Register</button>
                    <p className='logg'>Have an account?<a href='/login'> Sign in!</a></p>
                </div>
            </form>

            <div>
                <img className='picture' src={image} alt='pic' />
            </div>
            <h1 className='quotation'>Take charge of your own investment journey</h1>
        </div>
    )
}

export default Register
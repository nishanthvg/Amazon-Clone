import React, { useState } from 'react'
import './login.css'
import { Link, useHistory } from 'react-router-dom'
import {auth} from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPasswrod] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then ((auth) => {
            //logged in successafully, redirect to homepage
            history.push('/');
        })
        .catch(e => alert(e.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            //created , redirect to home page 
            history.push('/');
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img className = "login_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG7.png" alt ="" />
            </Link>
            <div className = "login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value = {email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Passord</h5>
                    <input value={password} onChange = {event => setPasswrod(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's 
                    Conditions of see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.
                </p>
                <button onClick={register} className="login_registerButton">Create your Amazon Accout</button>
            </div>
        </div>
    )
}

export default Login

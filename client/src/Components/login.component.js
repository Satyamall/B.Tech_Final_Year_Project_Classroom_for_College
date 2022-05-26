import React, { useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
import { NavLink } from "react-router-dom";

const URL = process.env.REACT_APP_BACKEND_URL;
const Login = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [error, setError] = useState('');

    const Submit = (e) => {
        e.preventDefault();

        Axios.post(`${URL}/users/login`, {email: inputEmail, password: inputPassword})
        .then(res => {
            const token = new Cookies();
            token.set('token', res.data.token, {path: '/', maxAge:604800 })
            //return to home page
            localStorage.setItem("auth","true");
            window.location = "/";
        })
        .catch(() => setError("Something went wrong. Please try again."))
    }

    return(
        <div className="container container2">
            <form className="margin box box-shadow text-dark" style={{"paddingBottom":"40px"}} onSubmit={Submit}>
                <h2 className="box-title">Login to your account</h2>
                <h4 className="form-error">{error}</h4>
                <div className="form-group">
                    <p className="form-label" style={{textAlign: 'left'}}>Email</p>
                    <input type="email" className="form-control" value={inputEmail} onChange = {({target: {value}}) => setInputEmail(value)} />
                </div>
                <div className="form-group">
                    <p className="form-label" style={{textAlign: 'left'}}>Password</p>
                    <input type="password" className="form-control" value={inputPassword} onChange= {({target: {value}}) => setInputPassword(value)} />
                </div>
                <div className="form-group">
                    <p className = "form-label">Don't have account yet? <NavLink to="/register" className="link" style={{color: 'rgb(2,141,223)'}}>Register</NavLink></p>
                </div>
                <div className="form-group">
                    <input type="submit"  className="form-control btn btn-dark" />
                </div>
            </form>
        </div>
    )
}

export default Login;
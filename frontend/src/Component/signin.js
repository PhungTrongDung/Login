import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


import '../Component/css/signin.css'


const SignIn = () => {


    return (
        <div className="main-signin">
            <div className="login-container">
                <h2>Sign In</h2>
                <div className="input-container">
                    <input type="text" placeholder="Username"></input>
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Password"></input>
                </div>
                <div className="btn-sign">
                    <Link to="/signup">
                        <button className="signup-button">Sign Up</button>
                    </Link>
                    <button className="login-button" >Sign In</button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
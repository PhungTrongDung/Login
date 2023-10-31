import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


import '../Component/css/signup.css'


const SignUp = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        role: 0
    })

    const [error,setError] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value }));
    }

    const handleSignUp = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/user", user)
            navigate("/")
        }
        catch (err) {
            console.log(err);
            console.log("Thất bại");
            setError(true);
        }
    }

    return (
        <div className="main-signup">
            <div className="signup-container">
                <div className="signup-title">
                    <h2>Sign Up</h2>
                </div>
                <div className="signup-form">
                    <div className="input-container name">
                        <div className="input-title name">Name:</div>
                        <input type="text" name="name" placeholder="Name" onChange={handleChange}></input>
                    </div>

                    <div className="input-container username">
                        <div className="input-title username">Username:</div>
                        <input type="text" name="username" placeholder="Username" onChange={handleChange}></input>
                    </div>

                    <div className="input-container pass">
                        <div className="input-title">Password:</div>
                        <input type="password" name="password" placeholder="Password" onChange={handleChange}></input>
                    </div>

                    <div className="input-container email">
                        <div className="input-title">Email:</div>
                        <input type="email" name="email" placeholder="Email" onChange={handleChange}></input>
                    </div>

                    <div className="input-container dropdown-container role">
                        <div className="input-title">Role:</div>
                        <select name="role" onChange={handleChange}>
                            <option value="Role">Role</option>
                            <option value="KH">Client</option>
                            <option value="NVQL">NVQL</option>
                        </select>
                    </div>
                </div>
                <div className="button-control">
                    <Link to="/">
                        <button className="back-btn">Quay lại</button>
                    </Link>
                    <button className="signup-btn" onClick={handleSignUp}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
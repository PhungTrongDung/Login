import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const ShowUser = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchAllUser = async () => {
            try {
                const res = await axios.get("http://localhost:8800/user");
                setUser(res.data);
                console.log(res);
                console.log("thành công");
            } catch (err) {
                console.log(err);
                console.log("thất bại");
            }
        };
        fetchAllUser();
    }, [])

    return (
        <div>
            <h1>List User</h1>
            {user.map((user) => (
                <div className="List User" key={user.id}>
                    <h1>{user.id}</h1>
                    <span>{user.name}</span>
                    <span>{user.username}</span>
                    <span>{user.password}</span>
                    <span>{user.email}</span>
                    <span>{user.role}</span>
                </div>

            ))}

            <button className="button-add-user">
                <Link to="/signup">add</Link>
            </button>
        </div>
    );
}

export default ShowUser;
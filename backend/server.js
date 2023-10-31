
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use(cors());


const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "Phungdung0105",
    database: "httm"
});

app.get("/user" , (req, res) => {
    const sql = "SELECT * FROM user";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/user", (req,res) => {
    const sql = "INSERT INTO user (`name`, `username`, `password`, `email`, `role`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.role,
    ];

    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen (8800, () => {
    console.log("listening");
})
import express from "express";
import dotenv from 'dotenv';
import DbConn from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// DB connection
DbConn();

app.use('/', (req, res) => {
    res.send('Working !');
});

app.listen(PORT, () => {
    console.log(`Server running at PORT : ${PORT}`);
});
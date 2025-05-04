import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

async function DbConn() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('DB connected successfully');

    } catch (err) {
        console.log(`DB could not be connected. Error : ${err}`);
        process.exit(1);
    }
};

export default DbConn;
import app from './app.js';
import http from 'http';
import dotenv from 'dotenv';
import connectDB from './Db/db.js';
import cors from 'cors';
dotenv.config();

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;


const startServer = async ()=>{
    try {
        await connectDB();
        console.log("Database connected successfully");
        server.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Failed to start the server",error);
    }}

startServer();
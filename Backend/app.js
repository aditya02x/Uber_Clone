import expess from 'express';
import cors from 'cors';
import dotenv from 'dotenv';    
const app = expess();

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello World');
});

export default app;
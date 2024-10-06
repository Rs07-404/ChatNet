import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import connectToMongoDB from './db/connect.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

// app.get('/',(req, res)=>{
//     res.end("<h1>Hi</h1>")
// })


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Listening on http://localhost:${PORT}.`)
})
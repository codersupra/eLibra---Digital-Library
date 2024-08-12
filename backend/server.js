import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from './database/connecToMongoDB.js';
import userRoute from "./routes/user.routes.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000


app.use(express.json()) 
app.use(cookieParser())
app.get('/', (req, res)=>{
    res.send("Hello World!")
})

app.use("/api/auth", authRoutes)
// app.use("/api/messages", messageRoutes)
// app.use('/api/users', userRoutes)


app.use("/api/users", userRoute)
app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log("Success");
})
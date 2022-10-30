import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';


const app = express();

//middleware for bodyparser to send requests
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
//cors middleware
app.use(cors());

//middleware, every route inside of posts will start with /posts
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://Kyle:A92E19g20@cluster0.ul97hvn.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//connects to MongoDB
mongoose.connect(CONNECTION_URL)
// if connection successful listen for PORT
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//if connection fails log error
.catch((error) => console.log(error.message));
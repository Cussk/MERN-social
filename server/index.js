import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';


const app = express();

//middleware, every route inside of posts will start with /posts
app.use('/posts', postRoutes);

//middleware for bodyparser to send requests
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
//cors middleware
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Kyle:A92E19g20@cluster0.ul97hvn.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//connects to MongoDB
mongoose.connect(CONNECTION_URL)
// if connection successful listen for PORT
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//if connection fails log error
.catch((error) => console.log(error.message));
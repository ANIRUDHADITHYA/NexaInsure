const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/AuthRoutes');
const policyRoutes = require('./Routes/PolicyRoutes');
const profileRoutes = require('./Routes/ProfileRoutes');

const app = express();
const cookieParser = require('cookie-parser');


app.get('/', (req, res) => {
    res.send("Welcome!!,  Anirudh Adithya's NexaInsure Server")
})


app.listen(3001, ()=> {
    console.log("Server Started")
})


mongoose.connect("mongodb://localhost:27017/nexainsure-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connected");
}).catch((error)=>{
    console.log(error.message);
})


app.use(
    cors({
    origin:["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
})
);

app.use(cookieParser());

app.use(express.json());

app.use('/', authRoutes);
app.use('/policy', policyRoutes);
app.use('/profile', profileRoutes);
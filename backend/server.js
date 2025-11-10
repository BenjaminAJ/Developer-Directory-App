const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require('./config/connectDB');
const developerRoutes = require('./routes/developer');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())

app.use('/api/developers', developerRoutes);

connectDB()

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})
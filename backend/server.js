import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/connectDB.js';
import developerRoutes from './routes/developer.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// simple request logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.use(cors({
    origin: '*'
}));
app.use(express.json())

// health check
app.get('/', (req, res) => res.send('backend: ok'));

app.use('/api/developers', developerRoutes);

connectDB()

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
})
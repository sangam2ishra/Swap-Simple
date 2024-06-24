import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import pnrRoute from './routes/pnrRoutes.js';
import requestRoute from './routes/requestRoute.js';
import cookieParser from 'cookie-parser';
import path from 'path';
// import { , ,  } from './serverController.js';
import { restartServer } from './controllers/ServerController.js';

dotenv.config();
// stopServer
const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,'/client/dist')))
app.use(cookieParser());
const url = process.env.MONGO;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.error(err);
    });

    const server = app.listen(3000, () => {
        console.log("App is listening on port 3000");
    });
    
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    console.log("charlie --- ");
    res.send("hii i am charlie");
})
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/pnr", pnrRoute);
app.use("/api/req", requestRoute);
app.post("/api/restart-server", restartServer);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


// Routes to control server
// app.post('/start', (req, res) => {
//     startServer();
//     res.status(200).send('Server is starting...');
// });

// app.post('/stop', (req, res) => {
//     stopServer();
//     res.status(200).send('Server is stopping...');
// });

// app.post('/restart', (req, res) => {
//     restartServer();
//     res.status(200).send('Server is restarting...');
// });

// // Handle server close signal
// process.on('SIGTERM', () => {
//     console.log('SIGTERM signal received: closing HTTP server');
//     server.close(() => {
//         console.log('HTTP server closed');
//         process.exit(0);
//     });
// });

// process.on('SIGINT', () => {
//     console.log('SIGINT signal received: closing HTTP server');
//     server.close(() => {
//         console.log('HTTP server closed');
//         process.exit(0);
//     });
// });

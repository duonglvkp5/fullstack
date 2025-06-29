import express from "express";
import configViewEngine from "./config/viewEngine";
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
import configCors from "./config/cors";
require("dotenv").config();
import bodyParser from 'body-parser';
import connection from './config/connectDB';

const app = express();
const PORT = process.env.PORT || 8000

configCors(app);

configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection()

app.use('/', webRoutes);
app.use('/api/v1/', apiRoutes);

app.listen(PORT, () => {
    console.log(">>> Backend is running on the port = " + PORT);
})
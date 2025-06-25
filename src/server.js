import express from "express";
import configViewEngine from "./config/viewEngine";
const webRoutes = require('./routes/web');
require("dotenv").config();
import bodyParser from 'body-parser';
import connection from './config/connectDB';

const app = express();
const PORT = process.env.PORT || 8000

configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection()

app.use('/', webRoutes);

app.listen(PORT, () => {
    console.log(">>> Backend is running on the port = " + PORT);
})
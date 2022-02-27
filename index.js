import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./router/api.js"
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;
const URI = process.env.DATABASE_URL

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));

app.use(cors());
app.use('/', api)
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected DB');
        app.listen(PORT, () => {
            console.log(`sever is running on port : ${PORT}`)
        })
    }).catch(err => {
        console.log('err', err)
    })

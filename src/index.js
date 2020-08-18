import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "config";
import bodyParser from "body-parser";
import routes from "./routes";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(config.get("mongoUri"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(config.get("apiUri"), routes);

app.listen(5000);
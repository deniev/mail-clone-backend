import express from "express";
import mongoose from "mongoose";
import config from "config";
import routes from "./routes";

const app = express();

mongoose.connect(config.get("mongoUri"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(config.get("apiUri"), routes);

app.listen(5000);
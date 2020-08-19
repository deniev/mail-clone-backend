import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "config";
import bodyParser from "body-parser";
import routes from "./routes";
import User from "./models/User";

const app = express();

app.use(cors());

app.use((req, res, next) => {
    User.findOne().exec((err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        req.user = user;
        next();
    });
});

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(config.get("mongoUri"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(config.get("apiUri"), routes);

app.listen(5000);
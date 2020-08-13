import express from "express";
import mongoose from "mongoose";
import config from "config";
import bodyParser from "body-parser";
import routes from "./routes";
import checkPermissions from "./middlewares/checkPermissions";

const app = express();

app.use(checkPermissions);

app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(config.get("mongoUri"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(config.get("apiUri"), routes);

app.get('/', (req, res) => {
    res.json(req.user)
})

app.listen(5000);
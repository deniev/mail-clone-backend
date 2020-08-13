import config from "config";
import jwt from "jsonwebtoken";

export default (req, res, next) => {
    const token = req.headers.token;

    if (token) {
        const decoded = jwt.verify(token, config.get("jwtSecret"));

        if (decoded) {
            req.user = decoded;
            return next();
        }
    }

    return res.sendStatus(403);
};
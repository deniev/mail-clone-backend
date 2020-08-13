import User from "../models/User";
import config from "config";
import jwt from "jsonwebtoken";

class UserController
{
    static async create(req, res)
    {
        const { email, password } = req.body;

        const userExist = await User.countDocuments({ email });

        if (! userExist) {
            const newUser = await User.create({
                email,
                password
            })

            if (newUser) {
                return res.sendStatus(201)
            }
        }

        return res.sendStatus(401);
    }

    static async login(req, res)
    {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (! user) {
            return res.sendStatus(401);
        }



        res.json(jwt.sign({ email }, config.get("jwtSecret")))
    }
}

export default UserController;
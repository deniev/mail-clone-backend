import User from "../models/User";

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
}

export default UserController;
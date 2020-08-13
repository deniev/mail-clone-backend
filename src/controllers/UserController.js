import User from "../models/User";

class UserController
{
    static async create(req, res)
    {
        const { email, password } = req.body;

        // Проверка занятости Email-адрес
        const userExist = await User.countDocuments({ email });

        if (userExist) {
            return res.sendStatus(401);
        }


    }
}

export default UserController;
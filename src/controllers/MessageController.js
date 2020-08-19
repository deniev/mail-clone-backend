import Message from "../models/Message";
import User from "../models/User";
import Permission from "../models/Permission";

class MessageController
{
    static async delete(req, res)
    {
        const { id } = req.body;

        const conditions = {
            message: id,
            user: req.user
        }

        if (! Permission.has(conditions)) {

        }
    }
}

export default MessageController;
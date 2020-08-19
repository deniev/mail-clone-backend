import Message from "../models/Message";
import User from "../models/User";
import Permission from "../models/Permission";

class MessageController
{
    static async all(req, res)
    {

    }

    static async sent(req, res)
    {
        const { body, subject, receiver } = req.body;

        const data = {
            body,
            subject,
            receiver,
            sender: req.user
        };

        await Promise.all([
            Message.create({ ...data, type: "inbox" }),
            Message.create({ ...data, type: "sent" })
        ]);
    }

    static async delete(req, res)
    {

    }
}

export default MessageController;
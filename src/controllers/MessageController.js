import Message from "../models/Message";

class MessageController
{
    static async delete(req, res)
    {
        const { id } = req.body;

        const message = await Message.findById(id);

        if (! message) {
            throw new Error("Message not found");
        }

        const hasPermissions = await message.hasPermissions(req.user);

        if (! hasPermissions) {
            return res.sendStatus(403);
        }


    }
}

export default MessageController;
import Message from "../models/Message";
import User from "../models/User";
import Permission from "../models/Permission";

class MessageController
{
    static async delete(req, res)
    {
        const { id } = req.body;

        const message = await Message.findById(id);

        if (! message) {
            return res.sendStatus(404);
        }

        const hasPermissions = await User.hasPermissions();

        if (! hasPermissions) {
            return res.sendStatus(403);
        }

        const session = await mongoose.startSession();

        session.startTransaction();

        await Promise.all([
            Message.findByIdAndDelete(message.id, { session }),
            Permission.findByIdAndDelete({
                message: message.id,
                user: req.user
            }, { session })
        ]);

        await session.commitTransaction();
    }
}

export default MessageController;
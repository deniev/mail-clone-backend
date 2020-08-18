import Message from "../models/Message";
import User from "../models/User";
import Permission from "../models/Permission";

class MessageController
{
    static async delete({ body, user }, res)
    {
        const { id } = body;

        const message = await Message.findById(id);

        if (! message) {
            return res.sendStatus(404);
        }

        const hasPermissions = await user.hasPermissions();

        if (! hasPermissions) {
            return res.sendStatus(403);
        }

        const session = await mongoose.startSession();

        session.startTransaction();

        await Promise.all([
            Message.findByIdAndDelete(message, { session }),
            Permission.findOne({ message, user }, { session })
        ]);

        await session.commitTransaction();
    }
}

export default MessageController;
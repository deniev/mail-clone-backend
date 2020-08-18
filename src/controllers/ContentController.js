import Folder from "../models/Folder";
import Message from "../models/Message";

class ContentController
{
    static async get(req, res)
    {
        try {
            const [folders, messages] = await Promise.all([
                Folder.getByUser(req.user),
                Message.getByUser(req.user),
            ]);

            return res.json({ folders, messages });
        } catch (e) {

        }
    }
}

export default ContentController;
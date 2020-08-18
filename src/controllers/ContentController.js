import Folder from "../models/Folder";
import Message from "../models/Message";

class ContentController
{
    static async get(req, res)
    {
        try {
            const [folders, messages] = await Promise.all([
                Folder.getByUser("3434"),
                Message.getByUser("454545"),
            ]);

            return res.json({ folders, messages });
        } catch (e) {

        }
    }
}

export default ContentController;
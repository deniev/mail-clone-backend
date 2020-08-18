import Folder from "../models/Folder";

class ContentController
{
    static async get(req, res)
    {
        try {
            const [folders] = await Promise.all([
                Folder.getByUser("3434")
            ]);

            return res.json({ folders });
        } catch (e) {

        }
    }
}

export default ContentController;
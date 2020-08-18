import Folder from "../models/Folder";

class FolderController
{
    static async create(req, res)
    {

    }

    static async all(req, res)
    {
        try {
            return res.json({ folders: await Folder.getByUser("34") })
        } catch (e) {

        }
    }
}

export default FolderController;
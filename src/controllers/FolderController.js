import Folder from "../models/Folder";

class FolderController
{
    static async create(req, res)
    {

    }

    static async all(req, res)
    {
        try {
            const conditions = [
                { system: true },
                { user: req.user }
            ];

            const folders = await Folder
                .find()
                .or(conditions)
                .select(Folder.selectedFields())

            return res.status(200).json(folders);
        } catch (e) {

        }
    }
}

export default FolderController;
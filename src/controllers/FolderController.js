import Folder from "../models/Folder";

class FolderController
{
    static async create(req, res)
    {

    }

    static async all(req, res)
    {
        try {
            return res.status(200).json(
                await Folder.find({
                    $or: [
                        { system: true },
                        { user: req.user }
                    ]
                })
            );
        } catch (e) {

        }
    }
}

export default FolderController;
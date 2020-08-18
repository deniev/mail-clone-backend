import Folder from "../models/Folder";

class FolderController
{
    static async create(req, res)
    {

    }

    static async all(req, res)
    {
        const conditions = [
            { system: true },
            { user: {
                $eq: req.user,
                    $exists: true
            }}
        ];

        Folder.find().or(conditions)
    }
}

export default FolderController;
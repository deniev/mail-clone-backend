import Folder from "../models/Folder";

class FolderController
{
    static async create(req, res)
    {
        try {
            const { name, type } = req.body;

            await Folder.create({ name, type });

            return res.sendStatus(201);
        } catch (e) {
            return res.sendStatus(500);
        }
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
            return res.sendStatus(404);
        }
    }
}

export default FolderController;
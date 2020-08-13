import { Router } from "express";
import FolderController from "../controllers/FolderController";
import UserController from "../controllers/UserController";

const router = Router();

router.post("/folder", FolderController.create);
router.post("/user", UserController.create);


export default router;
import { Router } from "express";
import FolderController from "../controllers/FolderController";

const router = Router();

router.post("/folder", FolderController.create);

export default router;
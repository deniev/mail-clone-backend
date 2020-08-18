import { Router } from "express";
import FolderController from "../controllers/FolderController";
import UserController from "../controllers/UserController";
import ContentController from "../controllers/ContentController";

const router = Router();

router.post("/folder/create", FolderController.create);
router.get("/folder", FolderController.all);
router.post("/user/create", UserController.create);
router.post("/user/login", UserController.login);

router.get("/content", ContentController.get);

export default router;
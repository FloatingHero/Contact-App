import AuthController from "../controllers/AuthController";
import { Router } from "express";

const router = Router();

router.get('/perfil', AuthController.index);

export default router;
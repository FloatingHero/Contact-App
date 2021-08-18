import AuthController from "../controllers/AuthController";
import { Router } from "express";

const router = Router();

router.get('/perfil', AuthController.index);
router.post('/logout', AuthController.logout);

export default router;
import { Router } from "express";
import RegisterController from '../controllers/RegisterController';

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Inicio',
    });
});

router.get('/formulario-registro', RegisterController.index);
router.post('/register', RegisterController.register);

router.get('/formulario-login', (req, res) => {
    res.render('login_form', {
        title: 'Inicio de sesión'
    });
});

export default router;
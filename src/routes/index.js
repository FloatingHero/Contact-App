import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Inicio',
    });
});

router.get('/formulario-registro', (req, res) => {
    res.render('register_form', {
        title: 'Registro'
    });
});

export default router;
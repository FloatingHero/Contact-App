import { Router } from "express";
import { check } from "express-validator";
import RegisterController from "../controllers/RegisterController";

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Inicio',
    });
});

router.get('/formulario-registro', (req, res) => {
    res.render('register_form', {
        title: 'Registro'
    })
});

router.post('/register', [
    check('username')
        .notEmpty()
        .withMessage('El nombre de usuario no debe quedar vacío.'),

    check('email')
        .notEmpty()
        .withMessage('El email no debe quedar vacío')
        .isEmail()
        .withMessage('El email debe de tener un formato correcto.'),

    check('password')
        .notEmpty()
        .withMessage('La contraseña no debe de quedar vacía.')
        .isLength({
            min: 8
        })
        .withMessage('La contraseña debe de tener 8 caracteres como mínimo.')
        .custom((value, { req }) => {
            if (value !== req.body.confirm__password) {
                return false;
            } else {
                return true;
            }
        })
        .withMessage('Las contraseñas deben coincidir.')
], RegisterController.register);

router.get('/formulario-login', (req, res) => {
    res.render('login_form', {
        title: 'Inicio de sesión'
    });
});

export default router;
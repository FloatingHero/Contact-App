import { Router } from "express";
import RegisterController from "../controllers/RegisterController";
import registerSchema from "../validations/register_validations";
import initPassport from "../lib/passport";
import passport from "passport";

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

router.post('/register', registerSchema, RegisterController.register);

initPassport();

router.get('/formulario-login', (req, res) => {
    res.render('login_form', {
        title: 'Inicio de sesión'
    });
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/perfil',
    failureRedirect: '/formulario-login',
    failureFlash: 'Something goes wrong...',
}));

export default router;

//email: floatinghero@gmail.com
//pass: Al9595ninetyfive
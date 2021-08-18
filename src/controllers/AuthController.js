import passport from 'passport';
class AuthController {

    index(req, res) {
        res.render('profile', {
            title: 'Perfil'
        });
    }

    login() {
        passport.authenticate('local', {
            successRedirect: '/perfil',
            failureRedirect: '/formulario-login',
            failureFlash: 'Something goes wrong'
        });
    }

    logout(req, res) {
        req.logout();
        res.redirect('/formulario-login');
    }

}

export default new AuthController;
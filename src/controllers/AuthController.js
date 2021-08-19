import passport from 'passport';
class AuthController {

	index(req, res) {
		res.render('profile', {
			title: `${req.user.username} | Contactify`,
		});
	}

	login(req, res, next) {
		passport.authenticate('local', {
			successRedirect: '/perfil',
			failureRedirect: '/formulario-login',
			failureFlash: 'Something goes wrong...',
		})(req, res, next);
	}

	logout(req, res) {
		req.logout();
		res.redirect('/formulario-login');
	}

}

export default new AuthController;
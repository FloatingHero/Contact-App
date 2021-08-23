import passport from 'passport';
import pool from '../database/db';
import { validationResult } from 'express-validator';
class AuthController {

	index(req, res) {

		let message = '';

		pool.query('SELECT * FROM contacts', (err, result) => {
			if (err) {
				throw err;
			} else {
				if (result.length === 0) {
					message = 'Aún no tienes ningún contacto registrado.';
				}

				res.render('profile', {
					title: `${req.user.username} | Contactify`,
					message: message,
					contacts: result
				});

			}
		});


	}

	login(req, res, next) {

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			req.flash('errors', errors.array({
				onlyFirstError: true
			}));

			res.redirect('back');

		} else {
			passport.authenticate('local', {
				successRedirect: '/perfil',
				failureRedirect: '/formulario-login',
				failureFlash: 'Something goes wrong...',
			})(req, res, next);
		}
	}

	logout(req, res) {
		req.logout();
		res.redirect('/formulario-login');
	}

}

export default new AuthController;
import Hash from '../lib/bcrypt';
import pool from '../database/db';
import {validationResult} from 'express-validator';


class RegisterController {

	index(req, res) {
		res.render('register_form', {
			title: 'Registro'
		});
	}

	register(req, res) {

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			req.flash('errors', errors.array({
				onlyFirstError: true
			}));
			res.redirect('back');
		} else {

			const SQL = `SELECT email FROM users WHERE email = ${pool.escape(req.body.email)}`;

			pool.query(SQL, (err, result) => {
				if (result.length !== 0) {
					req.flash('error_message', 'El email ofrecido ya está registrado. Vuelva a intentarlo.');
					res.redirect('back');
				} else {
					const sql = 'INSERT INTO contact_app.users (username, email, password) VALUES (?, ?, ?)';

					pool.query(sql, [req.body.username, req.body.email, Hash.encryptPass(req.body.password)],
						(err) => {
							if (err) {
								throw err;
							}
						});

					return res.redirect(201, '/formulario-login');

				}
			});
		}
	}
}

export default new RegisterController;
import pool from '../database/db';
import { validationResult } from 'express-validator';

class ContactController {

	index(req, res) {
		res.render('contact_form', {
			title: 'Registro de contactos'
		});
	}

	add(req, res) {

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			req.flash('errors', errors.array({
				onlyFirstError: true
			}));
			res.redirect('back');
		} else {
			const SQL = `INSERT INTO contacts (name, email, phone_number, user_id) VALUES 
			(${pool.escape(req.body.contact_name)}, 
			${pool.escape(req.body.contact_email)},
			${pool.escape(req.body.contact_number_phone)},
			${pool.escape(req.user.id)}
			)`;

			pool.query(SQL, (err) => {
				if (err) {
					throw err;
				}
				console.log('Contact added successfully');

			});

			res.redirect('back');

		}
	}

	delete(req, res) {
		const SQL = `DELETE FROM contacts WHERE id = ${req.body.contact__id}`;

		pool.query(SQL, (err) => {
			if (err) {
				throw err;
			} else {
				req.flash('success_message', 'El contacto ha sido eliminado con éxito.');
				res.redirect('back');
			}
		});

	}



}

export default new ContactController;
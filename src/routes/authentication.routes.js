import AuthController from '../controllers/AuthController';
import ContactController from '../controllers/ContactController';
import contactSchema from '../validations/contact_form_validations';
import { Router } from 'express';
import pool from '../database/db';

const router = Router();

router.get('/perfil', AuthController.index);

router.get('/contactos', ContactController.index);
router.post('/add_contact', contactSchema, ContactController.add);
router.post('/delete_contact', ContactController.delete);
router.get('/editar-contacto/:contact', (req, res) => {

	pool.query(`SELECT * FROM contacts WHERE id = ${req.params.contact}`, (err, result) => {
		if (err) {
			throw err;
		}


		res.render('edit_contact', {
			title: 'Edición de contacto',
			contact: result[0]
		});

	}
	);
});
router.post('/edit-contact', ContactController.edit);
router.post('/logout', AuthController.logout);

export default router;
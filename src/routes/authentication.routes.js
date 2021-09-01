import AuthController from '../controllers/AuthController';
import ContactController from '../controllers/ContactController';
import contactSchema from '../validations/contact_form_validations';
import { Router } from 'express';

const router = Router();

router.get('/perfil', AuthController.index);

router.get('/contactos', ContactController.index);
router.post('/add_contact', contactSchema, ContactController.add);
router.post('/delete_contact', ContactController.delete);
router.post('/logout', AuthController.logout);

export default router;
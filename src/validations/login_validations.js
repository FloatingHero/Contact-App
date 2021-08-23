import { checkSchema } from 'express-validator';

const loginSchema = checkSchema({
	email: {
		notEmpty: true,
		errorMessage: 'El email no debe quedar vacío.',
		isEmail: {
			bail: true,
			errorMessage: 'El email debe tener un formato válido.'
		}
	},
	password: {
		notEmpty: true,
		errorMessage: 'La contraseña no debe quedar vacía.'
	}
});

export default loginSchema;
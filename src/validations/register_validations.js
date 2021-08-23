import { checkSchema } from 'express-validator';

const registerSchema = checkSchema({
	username: {
		notEmpty: true,
		errorMessage: 'El nombre de usuario no debe quedar vacío.'
	},
	email: {
		notEmpty: true,
		errorMessage: 'El email no debe quedar vacío.',
		isEmail: {
			bail: true,
			errorMessage: 'El email debe de tener un formato válido.',
		}
	},
	password: {
		notEmpty: true,
		errorMessage: 'La contraseña no debe quedar vacía.',
		isLength: {
			options: {
				min: 8
			},
			errorMessage: 'La contraseña debe de contener 8 caracteres como mínimo.'
		},
		custom: {
			options: (value, { req }) => {
				if (value == req.body.confirm__password) {
					return true;
				}
				return false;
			},
			errorMessage: 'Las contraseñas deben coincidir.'
		}
	},
	confirm__password: {
		notEmpty: true,
		errorMessage: 'Debe confirmar la contraseña.'
	}

});

export default registerSchema;

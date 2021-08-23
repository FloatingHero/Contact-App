import { checkSchema } from 'express-validator';

const contactSchema = checkSchema({
	contact_name: {
		notEmpty: true,
		errorMessage: 'El nombre de contacto no debe quedar vacío.',
		isLength: {
			options: {
				max: 150,
			},
			errorMessage: 'El nombre debe tener como máximo 150 caracteres.'
		}
	},
	contact_email: {
		notEmpty: true,
		errorMessage: 'El email no debe quedar vacío.',
		isEmail: {
			bail: true,
			errorMessage: 'El email debe de tener un formato válido.',
		},
		isLength: {
			options: {
				max: 500,
				errorMessage: 'El email debe de tener como máximo 500 caracteres'
			}
		}
	},
	contact_number_phone: {
		notEmpty: true,
		errorMessage: 'El número de teléfono no debe quedar vacío.',
		isLength: {
			options: {
				max: 9
			},
			errorMessage: 'El número de teléfono debe tener 9 dígitos como máximo.'
		}
	}
});

export default contactSchema;
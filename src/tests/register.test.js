/* eslint-disable no-undef*/
import {request, response} from 'express';
import app from '../index';
import Hash from '../lib/bcrypt';
import faker from 'faker';

describe('POST /register', () => {
	test('should POST a new user', async () => {
		let user = {
			username: faker.name.findName(),
			email: faker.internet.email(),
			password: Hash.encryptPass(faker.internet.password())
		};

		await request(app).post('/register').send(user);
		expect(response.error).toBe(false);
		expect(response.status).toBe(200);

	});
});
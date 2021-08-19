import passport from 'passport';
import { Strategy } from 'passport-local';
import pool from '../database/db';
import bcrypt from '../lib/bcrypt';

const initPassport = () => passport.use('local', new Strategy({

	usernameField: 'email',
	passwordField: 'password',


}, (username, password, done) => {
	const sql = 'SELECT * FROM users where email = ?';
	pool.query(sql, [username], (err, result) => {
		if (err) {
			console.log(err);
		} else {

			if (result.length > 0) {
				const user = result[0];
				const validPassword = bcrypt.matchPass(password, user.password);

				if (validPassword) {
					return done(null, user);
				} else {
					return done(null, false);
				}

			} else {
				return done(null, false);
			}

		}
	});
}));

passport.serializeUser((user, done) => {
	return done(null, user.id);
});

passport.deserializeUser((id, done) => {
	pool.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
		if (err) {
			console.log(err);
		} else {
			if (result.length > 0) {
				return done(null, result[0]);
			} else {
				return done(null, false);
			}
		}
	});
});

export default initPassport;
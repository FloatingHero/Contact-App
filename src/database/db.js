import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

let pool = mysql.createPool({
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
	multipleStatements: true
});

pool.getConnection((err, conn) => {
	if (err) {
		throw err;
	} else {
		if (conn) {
			conn.release();
		}
	}
});

export default pool;
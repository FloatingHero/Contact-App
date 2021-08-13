import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

let pool = mysql.createPool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

pool.getConnection((err, conn) => {
    if (err) {
        console.error(err);
    } else {
        if (conn) {
            conn.release();
            console.log('DB is connected');
        } else {
            console.error('DB is not connected');
        }
    }
});

export default pool;
//import User from '../models/User';
import Hash from '../lib/bcrypt';
import pool from '../database/db';

class RegisterController {

    index(req, res) {
        res.render('register_form', {
            title: 'Registro'
        });
    }

    register(req, res) {
        const sql = 'INSERT INTO contact_app.users (username, email, password) VALUES (?, ?, ?)';
        console.log('El metodo se ejecuta del modelo')

        pool.query(sql, [req.body.username, req.body.email, Hash.encryptPass(req.body.password)], (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('User registered correctly.');
            }
        });

        res.redirect('/formulario-login');

    }

}

export default new RegisterController;
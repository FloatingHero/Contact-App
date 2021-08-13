import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import hbs from 'express-handlebars';
import morgan from 'morgan';
import router from './routes/index';
import pool from './database/db';

const app = express();
dotenv.config();

//*settings
app.set('port', process.env.APP_PORT);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',
    hbs({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layout'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    }));
app.set('view engine', '.hbs');

//*middleware
app.use(morgan('dev'));
app.use(
    express.urlencoded({
        extended: true
    })
);

//*static files
app.use(express.static(path.join(__dirname, 'public')));

//*routes
app.use(router);


//* server listener
app.listen(app.get('port'), () => {
    console.log(`Servidor en marcha en el puerto ${app.get('port')}`);
});

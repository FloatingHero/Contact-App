import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import hbs from 'express-handlebars';
import morgan from 'morgan';
import router from './routes/index.routes';
import authenticationRoutes from './routes/authentication.routes';
import pool from './database/db';
import flash from 'connect-flash';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import MySQLStore from 'express-mysql-session';
import passport from 'passport';

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
app.use(cookieParser(process.env.APP_SECRET));
app.use(session({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore({
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        hot: process.env.DB_HOST
    }),
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

//*variables globales
app.use(flash());
app.use((req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.error_message = req.flash('error_message');
    next();
})

//*static files
app.use(express.static(path.join(__dirname, 'public')));

//*routes
app.use(router);
app.use(authenticationRoutes);


//* server listener
app.listen(app.get('port'), () => {
    console.log(`Servidor en marcha en el puerto ${app.get('port')}`);
});
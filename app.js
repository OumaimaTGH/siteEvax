const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const passport = require("passport");
/* router */
const indexRouter = require('./routes/index');
const CONNECT = require('./config/db');

const app = express();
/* connect to db */


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
require("./config/passport")(passport);
CONNECT();
app.use('/api/', indexRouter);


module.exports = app;

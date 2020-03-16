var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyparser = require('body-parser');
// var dataBaseConfig = require('./database/db');

// connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/perso',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var stepsRouter = require('./routes/steps');

var app = express();
var corsOptions = {
    origin: 'http://localhost:4200',
    methods: ['GET','POST'],
    allowedHeaders: ['Origin','X-Requested-With','contentType','Content-Type','Accept','Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/home', homeRouter);
app.use('/api/steps', stepsRouter);

module.exports = app;

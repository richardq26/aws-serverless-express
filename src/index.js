const express = require('express');
const bodyParser=require('body-parser');
const cors = require('cors');

const app = express();
const{ routes: userRoutes,} = require('./user/routes');
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRoutes);

module.exports = app;
const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const AWS = require('aws-sdk');
const bodyParser = require('body-parser');

AWS.config.region = process.env.REGION;

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));
app.use('/', routes);
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

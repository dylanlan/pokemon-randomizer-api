const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use('/', routes);

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

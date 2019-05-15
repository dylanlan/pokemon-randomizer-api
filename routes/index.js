const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Thing'
    });
    res.status(200).end();
});

module.exports = router;

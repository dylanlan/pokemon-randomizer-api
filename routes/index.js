const express = require('express');
const router = express.Router();
const randomizer = require('pokemon-randomizer');

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Thing'
    });
    res.status(200).end();
});

router.get('/randomize', async function (req, res) {
    const randomPokemon = await randomizer.pickRandomPokemon({
        number: 6
    });
    res.render('index', {
        pokemon: randomPokemon.map(p => p.name)
    });
    res.status(200).end();
});

module.exports = router;

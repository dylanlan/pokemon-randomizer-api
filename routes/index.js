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
    const randomPokemon = await getRandomPokemon(getDefaultOptions());
    res.render('index', {
        pokemon: randomPokemon.map(p => p.name)
    });
    res.status(200).end();
});

router.get('/api/randomize', async function (req, res) {
    const randomPokemon = await getRandomPokemon(getDefaultOptions());
    res.send(JSON.stringify(randomPokemon, null, 2));
});

const getRandomPokemon = async (options) => {
    return await randomizer.pickRandomPokemon(options);
};

const getDefaultOptions = () => {
    return {
        number: 6
    };
};

module.exports = router;

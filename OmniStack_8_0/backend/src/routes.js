const express = require('express');

const routes = express.Router();
// GET, POST, PUT, DELETE => Utilizando Rest
//When browser make route request always is get method

routes.get('/', (req, res) => {

    req.query.name
    return res.json({ message: `Olá ${req.query.name}` });
});

routes.post('/devs', (req, res) => {
    return res.json({ ok: true });
})

module.exports = routes;
const router = require('express').Router();

//Chamando o Banco de Dados
require('../db/mongoConnection');

//Chamando o arquivo portfolio 
const portfolio = require('./portfolio');


router.get('/', (req, res) => {
    res.json({
        sucess: false,
        message: 'Please, do not call /api, it is for our server'
    })
});

//Rotas do Portfolio
router.use('/portfolio', portfolio);




module.exports = router
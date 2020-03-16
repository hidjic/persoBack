var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

let Step = require('../models/Step');
const modelStep = mongoose.model('Step', Step);

console.log('steps...');

router.route('/').post((req, res) => {
    console.log('steps... route...');
    // console.log('*** req ***');
    // console.log(req);
    // console.log('*** res ***');
    // console.log(res);

    console.log('*** req.body ***');
    console.log(req.body);
    console.log(req.body.nbPas);
    console.log(req.body.date);

    let step = new modelStep();
    // let step = new modelStep(req.body);
    // let step = new modelStep({nbPas: 123, date: '02/01/2020'});
    // step.nbPas = req.body.nbPas;
    step.nbPas = 123;
    // step.date = req.body.date;
    // step.date = '02/01/2020';

    console.log('*** step ***');
    console.log(step.toObject());
    console.log(step.toJSON());

    res.send('POST request to the homepage');
});

module.exports = router;

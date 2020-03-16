var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

let Message = require('../models/Message');
const modelMessage = mongoose.model('Message', Message);

router.route('/').get( (req, res) => {
    modelMessage.findOne((error, data) => {
        if(error){
            console.error('err = ' + error);
        }
        res.json(data);
    });
});
router.route('/getLast').get((req, res) => {
    modelMessage.findById('5e0cba029a5fee67694f912c', (error, data) => {
        res.json(data);
    });
});

module.exports = router;

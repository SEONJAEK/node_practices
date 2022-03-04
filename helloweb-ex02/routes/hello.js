const express = require('express');

const router = express.Router();

router.route('/01').get(function(req, res){
    const data = {
        
    };
    res.render('hello/01', data);
});
  
router.route('/02').get(function(req, res){
    const data = {
        no: req.query.no || '',
        email: req.query.email || ''
    };
    res.render('hello/02', data);
});
module.exports = router;
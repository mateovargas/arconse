var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render("index");
});

router.get('/contact', function(req, res){
    res.render("contact");
});

router.get('/career', function(req, res){
    res.render("employment");
});

router.get('/services', function(req, res){
    res.render("services");
});

module.exports = router;
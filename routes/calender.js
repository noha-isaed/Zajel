const express = require('express');
const router = express.Router();

router.get('/new' , function(req, res){
    res.render('events/new')
  })

  module.exports = router;
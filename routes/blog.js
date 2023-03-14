var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/blognews', function (req, res, next) {
  res.render('blognews', { title: 'PLAY FAIR: BLOG & NEWS' });
});

module.exports = router;

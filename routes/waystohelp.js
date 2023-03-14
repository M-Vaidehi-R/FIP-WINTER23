var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/waystohelp', function (req, res, next) {
  res.render('waystohelp', { title: 'PLAY FAIR: WAYS TO HELP' });
});

module.exports = router;

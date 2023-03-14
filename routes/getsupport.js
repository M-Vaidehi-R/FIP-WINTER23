var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getsupport', function (req, res, next) {
  res.render('getsupport', { title: 'PLAY FAIR: GET SUPPORT' });
});

module.exports = router;

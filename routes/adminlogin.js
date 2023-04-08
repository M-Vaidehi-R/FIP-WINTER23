var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/adminlogin', function (req, res, next) {
  res.render('adminlogin', { title: 'PLAY FAIR: AMIN LOGIN' });
});

module.exports = router;

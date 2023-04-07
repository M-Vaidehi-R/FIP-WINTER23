var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'PLAY FAIR' });
});

router.get('/getsupport', function (req, res, next) {
  res.render('getsupport', { title: 'PLAY FAIR: GET SUPPORT' });
});

router.get('/waystohelp', function (req, res, next) {
  res.render('waystohelp', { title: 'PLAY FAIR: WAYS TO HELP' });
});

router.get('/blognews', function (req, res, next) {
  res.render('blognews', { title: 'PLAY FAIR: BLOG & NEWS' });
});

router.get('/team/:member', function(req, res) {
  console.log(req.params.member);

  res.render('team', { person: team[req.params.member]});
})



module.exports = router;

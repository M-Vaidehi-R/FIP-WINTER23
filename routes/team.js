var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/team/:member', function (req, res) {
  console.log(req.params.member);
  res.render('team', { person: team[req.params.member] });
});

module.exports = router;

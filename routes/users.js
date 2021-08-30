var express = require('express');
var router = express.Router();


const dataThatWeWantToReturn = { a:1, b:2, c:3 };

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('usuario', dataThatWeWantToReturn);
});

router.get('/api/', function(req, res, next) {
  res.json(dataThatWeWantToReturn);
});

module.exports = router;

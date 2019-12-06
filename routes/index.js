var express = require('express');
var helperDna = require('../helper/helperDna.js');
var da = require('../helper/da.js');
var router = express.Router();


router.post('/mutant', function(req, res, next) {

    //Si no es valido tiro 403
    if (helperDna.isValid(req.body) ) {
        res.sendStatus(403);
    } else if (helperDna.isMutant(req.body)) {
        da.incType("mutant");
      res.sendStatus(200);
    } else {
        da.incType("human");
        res.sendStatus(404);
    }
});

router.get('/stats', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(da.getStats()));
});


module.exports = router;

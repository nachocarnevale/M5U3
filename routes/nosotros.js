var express = require('express');
var router = express.Router();
var novedadesGanadoresModel = require('../models/novedadesGanadoresModel')

/* GET users listing. */

router.get('/', async function (req, res, next) {

  var novedadesGanadores = await novedadesGanadoresModel.getNovedadesGanadores()

  res.render('nosotros', {
      novedadesGanadores
  });
});




module.exports = router;


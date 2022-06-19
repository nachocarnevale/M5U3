var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/',async function(req, res, next) {

    var novedadesGanadores = await novedadesGanadoresModel.getNovedadesGanadores()
  res.render('index', {
    novedadesGanadores
  });
  });

router.post('/',async(req,res,next)=>{
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var email = req.body.email;
    var steam = req.body.steam;  

    console.log('req.body')
    
    var obj={
        to:'jicarnevale@outlook.com',
        subject:'Inscripción LAF',
        html: nombre + " " + apellido + " quiere inscribirse en la liga, éste es su mail: " + 
        email + ". <br> Su nickname de Steam es: " + steam 
        }
    var transport=nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });


    var info = await transport.sendMail(obj);    
    res.render('contacto',{
        message:'Enviado correctamente'
    });
});




module.exports = router;


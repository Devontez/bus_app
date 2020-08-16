
const express = require('express');
const router = express.Router();
const LoginController =require('../controller/Auth/LoginController')
const DriverController =require('../controller/DriverController')


router.get('/', function(req, res){
    res.render('index');
});

router.get('/login', LoginController.index);
router.post('/login', LoginController.login);
router.get('/register-driver', DriverController.index);
router.post('/register-driver', DriverController.store);






module.exports = router;
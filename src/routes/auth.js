
const express = require('express');
const router = express.Router();
const userController =require('../controller/Passenger')



//router.post('/signup', userController.createNew);
//router.post('/login', userController.login)
router.get('/', userController.getAll)






module.exports = router;
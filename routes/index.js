const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');

console.log("router Loaded");

router.get('/',homeController.home);
router.use('/users', require('./users'));
router.use('/users',require('./post'));

module.exports=router;
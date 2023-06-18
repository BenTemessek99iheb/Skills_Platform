var express = require('express');
var router = express.Router();
const user =require('../models/user');
const userController =require('../controllers/userController'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post("/addUser", userController.create);
router.get("/findAll", userController.findAll);



module.exports = router;
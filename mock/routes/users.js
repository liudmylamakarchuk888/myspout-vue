var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login' , function(req,res,next){
   res.send({"code":200,"data":{"accessToken":"admin-token"}})
})
router.post('/info' , function(req,res,next){
  res.send({"code":200,"data":{"user":{"id":0,"username":"admin","password":"any","name":"Super Admin","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif","introduction":"I am a super administrator","email":"admin@test.com","phone":"1234567890","roles":["admin"]}}})
})
module.exports = router;

var express = require('express');
var router = express.Router();
var User = require('../models/users');
const consumerAddUserMicroservice = require('seneca')();

/*ToDO: Move IP and Port to config*/

consumerAddUserMicroservice.client({pin:'role:usermanagement,cmd:add', host: '127.0.0.1', port: 3000});

/*
Endpoint Example
POST http://localhost:8080/user/usermanagement/add/John/pass123
*/
router.route('/:role/:cmd/:username/:password')
  .post((req, res) => {
  const role = req.params.role;
  const cmd = req.params.cmd;
  const left = req.params.username;
  const right = req.params.password;


  consumerAddUserMicroservice.act({role,cmd},{left,right}, (err, answer) => {
    res.send(answer);
  });
});

module.exports = router;

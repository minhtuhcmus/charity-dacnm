var express = require('express');
var router = express.Router();
var web3 = global.web3;
var deployedContract = global.deployedContract;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  var body = req.body
  if (!('address' in body)) {
    res.status(400).json({
      message : "Request Body Not Contain 'address'"
    })
  }
  try {
    web3.eth.getBalance(body.address).then((result)=>{
      res.json({
        ok : true
      })
    })
  } catch(err) {
    res.status(403).json({
      ok : false
    })
  }
});

router.get('/account', function(req, res, next) {
  web3.eth.getAccounts().then((result)=>{
    res.json({accounts: result});
  })
});

router.post('/account', function(req, res, next) {
  var body = req.body
  if (!('emails' in body)) {
    res.status(400).json({
      message : "Request Body Not Contain 'emails'"
    })
  }
  
});


module.exports = router;

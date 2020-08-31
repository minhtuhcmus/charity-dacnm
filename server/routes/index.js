var express = require('express');
var router = express.Router();
var {smartContract} = require('../services/smart_contract')
var transporter = require('../services/mailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/check_account', function(req, res, next) {
  var body = req.body
  if (!('address' in body)) {
    res.status(400).json({
      message : "Request Body Not Contain 'address'"
    })
  }
  smartContract.getBallance(body.address)
    .then(() => {
      res.json({
        ok : true
      })
    })
    .catch((err)=>{
      res.status(403).json({
        ok : false
      })
    })
});

router.get('/account', function(req, res, next) {
  smartContract.getAccount()
    .then((result)=>{
      res.json({accounts: result});
    })
    .catch((err)=>{
      console.log(err)
      res.status(500).json({
        ok : false
      })
    })
});

router.get('/new_account', function(req, res, next) {
  var body = req.body
  smartContract.createAccount().then(function(result){
    res.json({
      account : result
    })  
  })
  
});


router.post('/election', function(req, res, next) {
  var body = req.body
  console.log('body', body)
  smartContract.newElection(body)
    .then(()=>{
      res.json({
        ok : true
      })
    })
});

router.get('/candidates', function(req, res, next) {
  smartContract.getListCandidates()
    .then((candidates)=>{
      re = []
      for (candidate of candidates){
        re.push({
          name : smartContract.hexToUtf8(candidate.name),
          voteCount: candidate.voteCount
        })
      }
      res.json({
        candidates : re
      })
    })
});

router.post('/voters', function(req, res, next) {
  const body = req.body
  body.forEach(async el => {
    let code = await smartContract.createAccount();
    console.log("code", code)
    transporter.sendMail({
      from: 'no one',
      to: el,
      subject: 'Voting code',
      text: `Xin chào bạn. Đây là mã bầu cử của bạn: ${code}`
    }, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        smartContract.addVoter(code.address)
      }
    });
  });
  res.json({
    ok : true
  })
});


router.post('/vote', function(req, res, next) {
  var {candidate_index} = req.body
  console.log("body", candidate_index)
  if (!candidate_index) {
    res.status(400).json({
      message : "Request Body Not Contain 'candidate_index'"
    })
    return
  }
  console.log("body ok")
  headers = req.headers
  console.log("headers", headers)
  if (headers.account == undefined) {
    res.status(400).json({
      message : "Request Header Not Contain 'Account' Header"
    })
    return
  }
  console.log("header ok")
  if (!smartContract.deploy) {
    res.status(400).json({
      message : "No Election"
    })
    return
  }
  console.log("check smart contract ok")
  smartContract.vote(body.candidate_index, headers.account)
    .then((resulf)=>{
      res.json({
        ok : true
      })
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json({
        message : "Error.",
        detail: err.message
      })
    })
});



module.exports = router;

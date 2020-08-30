var express = require('express');
var router = express.Router();
var {smartContract} = require('../services/smart_contract')

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
  if (!('names' in body)) {
    res.status(400).json({
      message : "Request Body Not Contain 'emails'"
    })
  }
  smartContract.newElection(body.names)
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

router.post('/voter', function(req, res, next) {
  var body = req.body
  if (!('voter' in body)) {
    res.status(400).json({
      message : "Request Body Not Contain 'emails'"
    })
  }
  smartContract.addVoter(body.voter)
    .then(()=>{
      res.json({
        ok : true
      })
    })
});


router.post('/vote', function(req, res, next) {
  var body = req.body
  if (!('candidate_index' in body)) {
    res.status(400).json({
      message : "Request Body Not Contain 'candidate_index'"
    })
    return
  }
  headers = req.headers
  if (headers.account == undefined) {
    res.status(400).json({
      message : "Request Header Not Contain 'Account' Header"
    })
    return
  }

  if (!smartContract.deploy) {
    res.status(400).json({
      message : "No Election"
    })
    return
  }

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

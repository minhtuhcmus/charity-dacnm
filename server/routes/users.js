var express = require('express');
var router = express.Router();
var transporter = require('../services/mailer');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-election', function(req, res, next) {
  const { data } = req.body;
  console.log(data)
  transporter.sendMail({
    from: 'no one',
    to: data.email,
    subject: 'Voting code',
    text: 'Xin chào bạn'
  }, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send('create election')
})

module.exports = router;

var express = require('express');
var router = express.Router();
var transporter = require('../services/mailer');
var {smartContract} = require('../services/smart_contract');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-election', (req, res, next) => {
  const { data } = req.body;
  data.forEach(async el => {
    let code = await smartContract.createAccount();
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
      }
    });
  });
  res.send('create election')
})

module.exports = router;

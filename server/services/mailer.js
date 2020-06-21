var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    user: 'hoanghuyletunguyen@gmail.com',
    pass: 'nguyenphanminhtulehoanghuy'
  }, tls: {
    rejectUnauthorized: false
  }
});

module.exports = transporter
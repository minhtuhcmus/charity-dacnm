var nodemailer = require('nodemailer');

var transporter

async function initTransporter() {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'hoanghuyletunguyen@gmail.com',
      pass: 'nguyenphanminhtulehoanghuy'
    }
  });
  
}

initTransporter()

module.exports = transporter
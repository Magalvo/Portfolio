const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(
  cors({
    origin: 'http://localhost:3000'
  })
);

let transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD
  }
});

transporter.verify(error => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

app.post('/contact', (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: 'Contact Form Submission - Portfolio',
    html: `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission!</title>
    </head>
    <body>
      
           <p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>
    
    </body>
    </html>`
  };

  transporter.sendMail(mail, error => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});
console.log('Working!');

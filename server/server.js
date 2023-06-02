import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import nodemailer from 'nodemailer';
const router = express.Router();

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
/* app.use(
  cors({
    origin: 'https://magalvo.onrender.com'
  })
);
 */

app.get('/', async (req, res) => {
  res.send('Backend Is On The Go!');
});

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

console.log(process.env.EMAIL_ADDRESS);

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

const startServer = async () => {
  try {
    app.listen(5000, () => console.log('Server started on port 5000'));
  } catch (error) {
    console.log(error);
  }
};

startServer();

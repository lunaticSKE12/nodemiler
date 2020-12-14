const nodemailer = require('nodemailer');

// Setting email to send
let transporter = nodemailer.createTransport({
  host: 'gmail',
  service: 'Gmail',
  auth: {
    user: 'my-email@gmail.com',
    pass: 'my-password',
  },
});

// Detail
transporter.sendMail(
  {
    from: 'my-name <my-email@gmail.com>', // Sender
    to: 'someone <reciever-email@yahoo.com>', // Reciever
    subject: 'Hello', // Subject
    text: 'Hi', // text
    html:
      "<b>Hello</b>world<br><img src='https://media.giphy.com/media/TfY3cjjH0aYopkybqc/giphy.gif'>", // html
  },
  (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info.messageId);
    }
  }
);

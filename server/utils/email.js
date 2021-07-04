const nodemailer = require('nodemailer');

const email_pwd = process.env.EMAIL_PASSWORD;
const email_user = process.env.EMAIL_USERNAME;

const sendEmail = async (options) => {
    // CREATE A TRANSPORTER
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: email_pwd,
          pass: email_user
        }
    });
    // DEFINE THE EMAIL OPTIONS
    const mailOptions = {
        from: '<licenta2021.tuiasi.ro@outlook.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
    }
    // SEND EMAIL WITH NODEMAILER
    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // CREATE A TRANSPORTER
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: "licenta2021.tuiasi.ro@outlook.com",
          pass: "licenta2021!"
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
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // CREATE A TRANSPORTER

    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "ab7596e00da9b4",
          pass: "6c2ce1c5f2418d"
        }
    });
    // DEFINE THE EMAIL OPTIONS
    const mailOptions = {
        from: '<licenta.web.app.2021@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        // html: 
    }
    // SEND EMAIL WITH NODEMAILER
    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
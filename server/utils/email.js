const nodemailer = require('nodemailer');

const sendEmail = async (options) => {

    // CREATE A TRANSPORTER
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'licenta.web.app.2021@gmail.com'  ,
            pass: 'Licenta2021telecomro!'
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
    // await transporter.sendMail(mailOptions);
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }

        console.log('Message sent: ' + info.response);
    });
}

module.exports = sendEmail;
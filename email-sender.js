

const nodemailer = require('nodemailer')


// using nodemailer module to help node gain access to the mail you will be sending from
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: 'users@gmail.com',
    pass: 'password'
    }
});



const mailOptions = {
    from: 'usersmail2@yahoo.com',
    to: 'receiversh@gmail.com',
    subject: 'Sending this Email using Node.js nodemailer',
    text: 'You received this email from a nodemailer.'
};


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    }
});
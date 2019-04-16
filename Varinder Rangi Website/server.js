const http = require('http');
const path = require('path');
const Express = require('express');
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
//file access
const fs = require('fs-extra');

var express = Express();
var server = http.createServer(express);

// Email code begins

function isValidate(req) {
    if (req == 0 || req == '' || req == "" || req == null || req == undefined) {
        return false;
    } else {
        return true;
    }
}

//tell the express router where to find static files
express.use(Express.static(path.resolve(__dirname, 'client')));

//tell the router to parse urlencoded data and JSON data for us and put it into req.query/req.body
express.use(bodyParser.urlencoded({ extended: false }));
express.use(bodyParser.json());

//set up the HTTP server and start it running
server.listen(process.env.PORT || 3000, process.env.IP || '127.0.0.1', function () {
    var addr = server.address();
    console.log('Server listening at', addr.address + ':' + addr.port);
});

//tell the router how to handle a get request to the root
express.get('/', function (req, res) {
    //use sendfile to send our index.html file
    res.sendFile(path.join(__dirname, 'client/views/', 'index.html'));
});

var smtpTransport = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
        user: 'rangivarinder1@gmail.com',
        pass: '123Japreet'
    }
}));

// express.post('/send-email', function (req, res) {

//     var mailOptions = {
//         from: '"Varinder Rangi" <rangivarinder1@gmail.com>', // sender address
//         to: "varinderkrangi@gmail.com", // list of receivers
//         subject: 'Insurance enquiries ' + req.body.fullName,
//         text: 'Name: ' + req.body.fullName + '\n' + 'Email ID: ' + req.body.email + '\n' + 'Phone Number: ' + req.body.phone + '\n' + 'Text Message: ' + req.body.message

//     };

//     smtpTransport.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: ' + info.response);
//         res.redirect("/");
//     });

// });


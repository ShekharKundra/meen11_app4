var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
    return res.status(200).render("../views/index.ejs");
});

router.get("/aboutus", (req, res) => {
    return res.status(200).render("../views/aboutus.ejs");
});

router.get("/contactus", (req, res) => {
    return res.status(200).render("../views/contactus.ejs");
});


router.post("/SendEmail", (req, res) => {
    console.log("🚀 ~ file: mainpageroutes.js ~ line 18 ~ router.post ~ req", req.body);



    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "lotusstemwick@gmail.com", // generated ethereal user
            pass: "pftvtuiktqqtvqlr", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"Shekhar Kundra" <lotusstemwick@gmail.com>', // sender address
        to: req.body.uemail, // list of receivers
        subject: "Thanks for contacting", // Subject line
        text: "We will connect to yo soon", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    return res.status(200).redirect("/");

});

router.get('/*', (req, res) => {
    return res.status(404).render("../views/error404.ejs");
});


module.exports = router;
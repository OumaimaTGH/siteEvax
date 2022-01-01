const nodemailer = require("nodemailer");

module.exports = function mailer(to, subject, content) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "siwargrati5@gmail.com", // generated ethereal user
      pass: "olweeeysczipnnkz",
    }
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '" 👻<siwargrati5@gmail.com>', // sender address
    to: `👻<${to}>`, // list of receivers
    subject: `${subject}`,
    html: `${content}`,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

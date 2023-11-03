const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASSWORD,
  },
});

function sendConfirmationCodeEmail(email, code) {
  const message = {
    from: "FOOD-WITH-MOOD <elbrustestemail@gmail.com>",
    to: email,
    subject: "Код подтверждения регистрации",
    text: `Ваш код подтверждения: ${code}`,
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error sending email:", err);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}

module.exports = sendConfirmationCodeEmail;

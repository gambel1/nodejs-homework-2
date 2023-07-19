const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENGRID_API_KEY } = process.env;

sgMail.setApiKey(SENGRID_API_KEY);

const sendEmail = async (date) => {
  const email = { ...date, from: "electrifyx@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;

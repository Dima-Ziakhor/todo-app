import nodemailer from 'nodemailer';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CLIENT_URL } = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD
  },
});

function send ({ email, subject, html }) {
  return transporter.sendMail({
    from: 'Todo App',
    to: email,
    subject,
    text: '',
    html
  });
}

function sendActivationLink (email, token) {
  const link = `${CLIENT_URL}/#/activate/${token}`;

  return send({
    email,
    subject: 'Account activation',
    html: `
      <h2>Your activation link</h2>
      <a href="${link}">Click to activate</a>
    `
  });
}

export const emailService = {
  send, sendActivationLink
};

// email-sender.js
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service (e.g., Gmail, Outlook)
    auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password", // Replace with your email password
    },
});

const mailOptions = {
    from: "your-email@gmail.com", // Sender address
    to: "recipient-email@gmail.com", // Recipient address (can be your own email)
    subject: "Test Email from Node.js",
    text: "Hello from Node.js! This is a test email.",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email sent:", info.response);
    }
});

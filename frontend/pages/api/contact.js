import nodemailer from "nodemailer";

export default async (req, res) => {
  const options = JSON.parse(req.body);
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      service: process.env.SMPT_SERVICE,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({success: true,msg:"mail sent"})
} catch (error) {
    res.status(500).json({success: false,msg:"mail not sent", error})
  }
};

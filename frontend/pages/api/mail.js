const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { name, email, msg } = req.body

  const mesg = {
    to: 'mrsaint0403@gmail.com', // Change to your recipient
    from: 'omnikam0404@gmail.com', // Change to your verified sender
    subject: `To be part of Diversify-Me`,
    text: msg,
    html: `
      <p>Sent from: ${name}</p>
      <p>from mail: ${email}</p>
      <div>Here's why I want to join:<br>${msg}</div>
    `
  }

  try {
    await sgMail.send(mesg)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.').json({"error occured":error})
  }
}

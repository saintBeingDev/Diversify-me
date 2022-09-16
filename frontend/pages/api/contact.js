const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, subject, text } = JSON.parse(req.body)

  const msg = {
    to: 'mrsaint0403@gmail.com', // Change to your recipient
    from: 'omnikam0404@gmail.com', // Change to your verified sender
    subject: `Contact request for - ${subject}`,
    text: text,
    html: `
      <p>Sent from: ${email}</p>
      <div>${text}</div>
    `
  }

  try {
    await sgMail.send(msg)
    res.status(200).send({message:'Message sent successfully.'})
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send({message:'Problem occured during message sending. Please try again later'})
  }
}

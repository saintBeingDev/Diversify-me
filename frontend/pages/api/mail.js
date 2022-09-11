import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY_2)

export default async(req, res) => {
    
     if(req.method === 'POST'){
      const {name, email, msg} = req.body 
      const mesg = {
        to:'mrsaint0403@gmail.com',
        from:'mrsaint0403@gmail.com',
        subject:`${name} want to be part of our community`,
        text:`Email: => ${email}`,
        html:`<strong>${msg}</strong>`
      }
      try {
        await sgMail.send(mesg)
        res.status(200).json({success:true, mssag:mesg})
      } catch (error) {
        res.status(200).json({success: false, error}) 
      }

     }
  }
  
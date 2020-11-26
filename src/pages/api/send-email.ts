import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async(req, res) => {
 const body = JSON.parse(req.body)
 if(req.method === "POST") {
  const msg = {
    to: 'gustavosilv1234@gmail.com', // Change to your recipient
    from: 'gustavosilv1234@gmail.com', // Change to your verified sender
    subject: `Message from ${body.name}` ,
    html: `${body.message}, ${body.email}`, 
  }
  sgMail
  .send(msg)
  .then(() => {
    res.send('sucess')
  })
  .catch((error) => {
    res.status(400).send('sucess')
    console.error(error)
  })

 }
} 









// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const client = require('@sendgrid/mail');

client.setApiKey( process.env.sendgrid_key );


const sendEmail = ( { 

  name = 'wasnt set' , email = 'wasnt set' , message = 'wasnt set' , phone = 'wasnt set' , foundBy = 'wasnt set' 

} 
) => new Promise( ( resolve , reject ) => {
  const msg = {
      to:      'brad@upvcwindowanddoorrepairs.co.uk', // Change to your recipient
      from:    'codedevbrad@gmail.com', // Change to your verified sender
      subject: 'New contact form submission (test)',
      html:    `
          Name : ${ name } , 
          Email : ${ email } , 
          Phone Number : ${ phone } , 
          Message : ${ message } , 
          Found website through : ${ foundBy }
      `,
  }

  client.send( msg )
        .then( ( data ) => resolve({ successCode: 200 }) )
        .catch( ( err ) => reject({  successCode: 500 }) );
});


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            let emailData = JSON.parse( req.body );
            let { successCode } = await sendEmail( emailData );
            res.status( successCode ).send({ code: successCode } );
        }
        catch ( err ) {
            console.log( err );
            res.status( 500 ).send( err );
        }
    } 
    else {
        // Handle any other HTTP method
        res.status(200).json({ name: 'get' });
    }
}

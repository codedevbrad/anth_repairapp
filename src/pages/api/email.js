// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const client = require('@sendgrid/mail');

client.setApiKey( process.env.sendgrid_key );


const sendEmail = ( { name , email , message , phone , foundBy } ) => new Promise( async ( resolve , reject ) => {

  const msg = {
      to:      'brad@upvcwindowanddoorrepairs.co.uk', // Change to your recipient
      from:    'codedevbrad@gmail.com', // Change to your verified sender
      subject: 'New contact form submission (test)',
      html:    `
          Name : ${ name || 'not set' } , 
          Email : ${ email } , 
          Phone Number : ${ phone } , 
          Message : ${ message } , 
          Found website through : ${ foundBy }
      `,
  }

  await client.send( msg )
        .then( ( data ) => {
            console.log( 'hit then handler' );
            resolve({ code: 200 }) 
        })
        .catch( ( err ) => {
            console.log( 'catch block' , err );
            reject( err );
        });
});


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            let emailData = JSON.parse( req.body );
            let data = await sendEmail( emailData );
            console.log('runs after email send' , data );
            res.status( 200 ).send( { code : 200 } );
        }
        catch ( err ) {
            console.log( 'hit error handler' , err.code );
            res.status( 500 ).json({ response: err , code: err.code , key: process.env.sendgrid_key });
        }
    } 
    else {
        // Handle any other HTTP method
        res.status(200).send('somewhere');
    }
}

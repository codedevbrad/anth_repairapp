// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const client = require('@sendgrid/mail');

client.setApiKey( process.env.sendgrid_key );


const sendEmail = ({ name , email , message , phone , foundBy } ) => new Promise( async ( resolve , reject ) => {
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

  await client.send( msg )
        .then( ( data ) => {
            console.log( 'hit then handler' );
            resolve({ code: 200 }) 
        })
        .catch( ( err ) => {
            console.log( 'catch block' );
            reject({ code: err.code , reason: err.message });
        });
});


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            let emailData = JSON.parse( req.body );
            // let body = { name: 'wasnt set' , email: 'wasnt set' , message: 'wasnt set' , phone: 'wasnt set' , foundBy: 'wasnt set' }
            let { code } = await sendEmail( body );
            console.log('runs after email send')
            res.status( successCode ).send( code );
        }
        catch ( {code , reason }  ) {
            console.log( 'hit error handler' );
            res.status( code ).send( reason );
        }
    } 
    else {
        // Handle any other HTTP method
        res.status(200).send('somewhere');
    }
}

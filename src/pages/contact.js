import Head from 'next/head';

import ComponentForm from '../_pageComponents/contact/page.component.form';

export default function Contact () {
  return (
    <div>
      <Head>
         <title> UPCV repairs windows and doors | Bristol </title>
         <meta name="description" content="UPCV repairs windows and doors" />
      </Head>

      <ComponentForm /> 
    </div>
  )
}



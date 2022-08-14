import Head from 'next/head';
import Image from 'next/image'; 

import ComponentForm from '../_pageComponents/contact/page.component.form';
import ComponentBusinessInfo from '../_pageComponents/contact/page.component.info';

export default function Contact () {
  return (
    <div>
      <Head>
        <title> UPCV repairs windows and doors | Bristol </title>
        <meta name="description" content="UPCV repairs windows and doors" />
      </Head>

      <ComponentForm />
      { /* <ComponentBusinessInfo /> */ }
    </div>
  )
}

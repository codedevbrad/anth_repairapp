import Head from 'next/head';
import HeaderComponent  from './header/index';
import FooterCompoonent from './footer/index';
import styles from './layout.module.scss';

export default function Layout({ children }) {
    return (
      <div className={ `App ${ styles.layout_container }`}>
        <Head>
          <title> UPVC repairs windows and doors | Bristol </title>
          <meta name="description" content="UPVC repairs windows and doors" />
          <link rel="icon" href="/favicon.ico" />
       </Head>
        <HeaderComponent />
        <main className={ styles.layout_page }>
            { children }
        </main>
        <FooterCompoonent />
      </div>
    )
}

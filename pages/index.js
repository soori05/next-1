import Head from 'next/head'
import Banner from '../comps/Banner.js';
import styles from '../styles/Home.module.css';
import Boxs from '../comps/Navbar.js';
import Products from '../comps/Products.js';
import Footer from '../comps/Footer.js';


export default function Home() {
  return (
    <div>
    <Head>
                <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
              integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
              Crossorigin="anonymous"
            />
    </Head>
    <main className={styles.home}>
    <Boxs />
    <Banner />
    <Products />
    <Footer />



    
    </main>


    </div>
  )
}

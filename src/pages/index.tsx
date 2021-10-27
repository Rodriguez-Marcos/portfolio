import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Atropos from 'atropos/react';
import fondo from '../images/fondo.png'
import planeta from '../images/planeta.png'
import planetauno from '../images/planetauno.png'
import planetados from '../images/planetados.png'
import planetatres from '../images/planetatres.png'
import planetacuatro from '../images/planetacuatro.png'
import planetacinco from '../images/planetacinco.png'
import planetaseis from '../images/planetaseis.png'
import nubes from '../images/nubes.png'
import nubel from '../images/nubel.png'
import Icons from '../components/icons';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Atropos
        className={styles.atropos}
        rotateTouch="scroll-y"
        highlight={false}
        onEnter={() => console.log('Enter')}
        onLeave={() => console.log('Leave')}
        onRotate={(x, y) => console.log('Rotate', x, y)}
      >
        <div className={styles.atrosContainer} data-atropos-offset="-5">
        <img data-atropos-offset="-7" className={styles.fondo} src={fondo.src} alt="fondo" />
        <img data-atropos-offset="-200" className={styles.planetacinco} src={planetacinco.src} alt="planetacinco" />
        <img data-atropos-offset="-200" className={styles.planetaseis} src={planetaseis.src} alt="planetaseis" />
        <img data-atropos-offset="-4" className={styles.planeta} src={planeta.src} alt="planeta" />
        <img data-atropos-offset="-4" className={styles.planetados} src={planetados.src} alt="planetados" />
        <img data-atropos-offset="-2" className={styles.planetatres} src={planetatres.src} alt="planetatres" />
        <img data-atropos-offset="-1" className={styles.planetacuatro} src={planetacuatro.src} alt="planetacuatro" />
        <img data-atropos-offset="0" className={styles.planetauno} src={planetauno.src} alt="planetauno" />
        <h1 data-atropos-offset="3" className={styles.title}>Marcos Rodriguez</h1>
        <h1 data-atropos-offset="2" className={styles.title}>Full Stack Web Developer</h1>
        <Icons data-atropos-offset="2"/>
        <img data-atropos-offset="4" className={styles.nuber} src={nubes.src} alt="nuber" />
        <img data-atropos-offset="4" className={styles.nubel} src={nubel.src} alt="nubel" />

        </div>
       

        </Atropos>
      </main>
      </div>
  )
}

export default Home
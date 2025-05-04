import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shaheen</h1>
        <p className={styles.description}>I am a Fullstack developer with 2 years of experience.</p>
        <a className={styles.contactBtn} href="mailto:snshohin@gmail.com">Contact Me</a>
    </div>
    <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt='Profile pic'/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  )
}

export default Hero

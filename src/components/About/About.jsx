import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop"/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>Frontend developer with experience with the frontend work</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>Frontend developer with experience with the frontend work</p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
              <div className={styles.aboutItemText}>
                <h3>QA Automation Engineer</h3>
                <p>Frontend developer with experience with the frontend work</p>
              </div>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default About

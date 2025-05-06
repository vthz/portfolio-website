import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.text}>
            <h2>
                Contact
            </h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                <a href="mailto:snshohin@gmail.com">snshohin@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
                <a href="https://www.linkedin.com/in/shaheen-naiyer-27496b178/">linkedin.com/shaheen-naiyer</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                <a href="https://github.com/vthz?tab=repositories">github.com/vthz</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact

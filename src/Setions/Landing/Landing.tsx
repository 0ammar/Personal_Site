import styles from './Landing.module.css';  // Using CSS Modules

import HeroImage from '../../Assets/hero-img.png';
import LinkedInIcon from '../../Assets/linkedin-light.svg';
import GitHubIcon from '../../Assets/github-light.svg';
import InstagramIcon from '../../Assets/instagram.svg';
import FacebookIcon from '../../Assets/facebook.svg';
import Resume from '../../Assets/Ammar_Arab_Full_Stack_Developer_Resume.pdf'

function Landing() {  

  return (
    <section className={`${styles.landing} container`}>

      <div className={styles['intro-one']}>
        <img src={HeroImage} alt="Ammar Arab - Full Stack Web Developer" />
        <h1>Ammar Arab - Full Stack Web Developer</h1>
      </div>

      <div className={styles['intro-two']}>
        <div className={styles['social-links']}>
          <a href="https://www.linkedin.com/in/ammar-arab-893a96279/" target='_blank' rel="noopener noreferrer" aria-label="Visit Ammar's LinkedIn profile">
            <img src={LinkedInIcon} alt='LinkedIn' />
          </a>
          <a href="https://github.com/0ammar" target='_blank' rel="noopener noreferrer" aria-label="Visit Ammar's GitHub profile">
            <img src={GitHubIcon} alt='GitHub' />
          </a>
          <a href="https://www.instagram.com/0ammar_/" target='_blank' rel="noopener noreferrer" aria-label="Visit Ammar's Instagram profile">
            <img src={InstagramIcon} alt='Instagram' />
          </a>
          <a href="https://web.facebook.com/hercules.abu.arab.028" target='_blank' rel="noopener noreferrer" aria-label="Visit Ammar's Facebook profile">
            <img src={FacebookIcon} alt='Facebook' />
          </a>
        </div>
        <p className={styles['short-summary']}>
          With a passion for developing modern web applications for commercial businesses.
        </p>
        <a href={Resume} target='_blank'download>
          <button className={styles['resume']} >Resume</button>
        </a>
      </div>

    </section>
  );
}

export default Landing;
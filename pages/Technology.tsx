import React from 'react'
import TechImg from '../components/TechImg'
import styles from '../styles/components/technology.module.scss'

type Props = {}

function Technology({}: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>
          {' '}
          <span>03</span> Space launch 101
        </h1>
      </div>
      {/* <div> */}
      <div className={styles.mainSection}>
        <TechImg />
        <div className={styles.text}>
          <ul className={styles.navigators}>
            <li className={styles.navigatorsItems}>1</li>
            <li className={styles.navigatorsItems}>2</li>
            <li className={styles.navigatorsItems}>3</li>
          </ul>
          <div className={styles.textContainer}>
            <h2 className={styles.terminology}>The Terminology...</h2>
            <h3 className={styles.technologyType}>a launch Vehicle</h3>
            <p className={styles.techBlurb}>
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}

export default Technology

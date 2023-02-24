import React from 'react'
import CrewImg from '../components/CrewImg'
import styles from '../styles/components/crew.module.scss'

type Props = {}

function Crew({}: Props) {
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>
        <span>02</span> Meet your crew
      </h1>
      {/* <CrewImg /> */}
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <ul className={styles.indicatorList}>
            <li className={styles.indicators}></li>
            <li className={styles.indicators}></li>
            <li className={styles.indicators}></li>
            <li className={styles.indicators}></li>
          </ul>
          <h2 className={styles.position}>Commander</h2>

          <h3 className={styles.name}>Douglas Hurley</h3>

          <p className={styles.blurb}>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <CrewImg />
      </div>
    </section>
  )
}

export default Crew

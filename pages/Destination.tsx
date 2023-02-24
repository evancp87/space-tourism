import React from 'react'
import PlanetImg from '../components/PlanetImg'
import styles from '../styles/components/destination.module.scss'
import SubNav from '../components/SubNav'

type Props = {}

function Destination({}: Props) {
  return (
    <section className={styles.destination}>
      <h1 className={styles.header}>
        <span>01</span>Pick your destination
      </h1>
      <div className={styles.container}>
        <PlanetImg />
        <div className={styles.textContainer}>
          <SubNav />
          <div className={styles.text}>
            <h2 className={styles.planetHeading}> Mars</h2>
            <p className={styles.planetText}>
              {' '}
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest!
            </p>
          </div>
          <div className={styles.planetFacts}>
            <ul className={styles.dataList}>
              <li className={styles.dataListItem}>
                {' '}
                Avg. distance<span className={styles.value}>628</span>
              </li>
              <li className={styles.dataListItem}>
                Est. travel time
                <span className={styles.value}>3 years</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination

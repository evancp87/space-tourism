import React from 'react'
import Nav from '../components/Nav'
import styles from '../styles/components/home.module.scss'
import Link from 'next/link'
type Props = {}

function HomeSection({}: Props) {
  return (
    <>
      {/* <Nav /> */}
      <section className={styles.container}>
        <div className={styles.text}>
          <p className={styles.standFirst}>So, you want to travel to</p>
          <h1 className={styles.header}>Space</h1>
          <p className={styles.introText}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.exploreBtnContainer}>
          <button className={styles.exploreBtn}>
            <Link href="/Destination">Explore</Link>
          </button>
        </div>
      </section>
    </>
  )
}

export default HomeSection

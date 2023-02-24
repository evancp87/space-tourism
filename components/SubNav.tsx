import React from 'react'
import styles from '../styles/components/sub-nav.module.scss'

type Props = {}

function SubNav({}: Props) {
  return (
    <nav className={styles.subNav}>
      <ul className={styles.subNavList}>
        <li className={styles.subNavListItem}>Moon</li>
        <li className={styles.subNavListItem}>Mars</li>
        <li className={styles.subNavListItem}>Europa</li>
        <li className={styles.subNavListItem}>Titan</li>
      </ul>
    </nav>
  )
}

export default SubNav

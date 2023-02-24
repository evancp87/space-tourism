import React from 'react'
import Image from 'next/image'
import styles from '../styles/components/crew.module.scss'

type Props = {}

function CrewImg({}: Props) {
  return (
    <picture className={styles.imgContainer}>
      <Image
        src="/../public/assets/crew/image-mark-shuttleworth.png"
        alt="crew"
        width="100"
        height="100"
        className={styles.crewImg}
      />
    </picture>
  )
}

export default CrewImg

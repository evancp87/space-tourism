import React from 'react'
import Image from 'next/image'
import styles from '../styles/components/technology.module.scss'

type Props = {}

function TechImg({}: Props) {
  return (
    <picture className={styles.imgContainer}>
      <Image
        src="/../public/assets/technology/image-launch-vehicle-landscape.jpg"
        alt="tech"
        width="100"
        height="100"
        className={styles.techImg}
      />
      <Image
        src="/../public/assets/technology/image-launch-vehicle-portrait.jpg"
        alt="tech"
        width="100"
        height="100"
        className={styles.techImgPortrait}
      />
    </picture>
  )
}

export default TechImg

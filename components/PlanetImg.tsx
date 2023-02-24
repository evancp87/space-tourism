import React from 'react'
import Image from 'next/image'
import styles from '../styles/components/destination.module.scss'

type Props = {}

function PlanetImg({}: Props) {
  return (
    <Image
      src="/../public/assets/destination/image-mars.png"
      alt="planet"
      width="100"
      height="100"
      className={styles.planetImg}
    />
  )
}

export default PlanetImg

import React, { useState } from 'react'
import Image from 'next/image'
// import Overlay from '../components/Overlay'
// import Sidebar from '../components/Sidebar'
import styles from '../styles/components/nav.module.scss'
import burger from '../public/assets/shared/icon-hamburger.svg'
import logo from '../public/assets/shared/logo.svg'
import close from '../public/assets/shared/icon-close.svg'

type Props = {}

function Nav({}: Props) {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [overlay, setOverlay] = useState(false)

  // for open and closing of sidebar with hamburger
  const handleOpenSidebar = (e: Object) => {
    // e.stopPropagation();
    setOpenSidebar(!openSidebar)
    setOverlay(!overlay)
  }

  const handleCloseSidebar = (e: Object) => {
    // e.stopPropagation();
    setOpenSidebar(false)
    setOverlay(false)
  }

  return (
    <nav className={styles.nav}>
      <Image
        src={logo}
        alt="logo"
        className={styles.logo}
        width="50"
        height="50"
      />
      <div className={styles.hamburgerContainer}>
        <Image
          src={burger}
          alt="hamburger icon"
          className={styles.hamburger}
          width="30"
          height="30"
        />
        <Image
          src={close}
          alt="close icon"
          className={styles.closeMenu}
          width="30"
          height="30"
        />
      </div>

      <ul className={styles.navList}>
        <div className={styles.hr}></div>

        <li className={styles.navListItem}>
          <span className={styles.navListItemNo}>00</span> Home
        </li>
        <li className={styles.navListItem}>
          <span className={styles.navListItemNo}>01</span> Destination
        </li>
        <li className={styles.navListItem}>
          <span className={styles.navListItemNo}>02</span> Crew
        </li>
        <li className={styles.navListItem}>
          <span className={styles.navListItemNo}>03</span> Technology
        </li>
      </ul>

      {/* {openSidebar && <Sidebar openSidebar={openSidebar} />}
      {openSidebar && <Overlay overlay={overlay} />} */}
    </nav>
  )
}

export default Nav

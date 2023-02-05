import React, { useState } from 'react'
// import Image from 'next/image'
// import Overlay from '../components/Overlay'
// import Sidebar from '../components/Sidebar'
import styles from '../styles/components/nav.module.scss'
import Burger from '../public/assets/shared/icon-hamburger.svg'
import Logo from '../public/assets/shared/logo.svg'
import Close from '../public/assets/shared/icon-close.svg'

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
      <Logo className={styles.logo} />

      <div className={styles.hamburgerContainer}>
        <Burger className={styles.hamburger} />
        <Close className={styles.closeMenu} />
      </div>

      <ul className={styles.navList}>
        <li className={styles.navListItem}>00 Home</li>
        <li className={styles.navListItem}>01 Destination</li>
        <li className={styles.navListItem}>02 Crew</li>
        <li className={styles.navListItem}>03 Technology</li>
      </ul>

      {/* {openSidebar && <Sidebar openSidebar={openSidebar} />}
      {openSidebar && <Overlay overlay={overlay} />} */}
    </nav>
  )
}

export default Nav

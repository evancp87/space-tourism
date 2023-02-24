import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from '../styles/components/sidebar.module.scss'

function Sidebar(props: boolean) {
  return (
    <aside
      className={styles.sidebar}
      //   className={classnames("sidebar", {
      //     active: props.openSidebar,
      //   })
      // }
    >
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarItem}>
          <span className={styles.sidebarItemNo}>00</span> Home
        </li>
        <span className={styles.sidebarItemNo}> </span>{' '}
        <li className={styles.sidebarItem}>
          <span className={styles.sidebarItemNo}>01</span> Destination
        </li>
        <li className={styles.sidebarItem}>
          <span className={styles.sidebarItemNo}>02</span> Crew
        </li>
        <li className={styles.sidebarItem}>
          <span className={styles.sidebarItemNo}>03</span> Technology
        </li>
      </ul>
    </aside>
  )
}
Sidebar.propTypes = {
  openSidebar: PropTypes.bool,
}

export default Sidebar

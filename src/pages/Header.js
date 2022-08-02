import React from "react";
import { NavLink } from "react-router-dom";

import styles from './Header.module.css';

function Header() {
    return (
    <header>
        <div className={styles.navLinks}>
          <NavLink activeClassName={styles.active} className={styles.navTitle} to='./welcome'>
            <p>Welcome</p>
          </NavLink>
          <NavLink activeClassName={styles.active} className={styles.navTitle} to='./about'>
            <p>About</p>
          </NavLink>
          <NavLink activeClassName={styles.active} className={styles.navTitle} to='./contact'>
            <p>Contact</p>
          </NavLink>
        </div>
    </header>
    );
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";

import styles from './Header.module.css';
import { url } from "../App";

function Header() {
    return (
    <header>
        <div className={styles.navLinks}>
          <Link className={styles.navTitle} to={`./${url.welcome}`}>
            <p>Welcome</p>
          </Link>
          <Link className={styles.navTitle} to={`./${url.about}`}>
            <p>About</p>
          </Link>
          <Link className={styles.navTitle} to={`./${url.contact}`}>
            <p>Contact</p>
          </Link>
        </div>
    </header>
    );
}

export default Header;
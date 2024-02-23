

import styles from './Navbar.module.css';
import logo from '../../assets/Logo.png'
function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" />

            <a href="#">mangcoding Store</a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#" className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">Course</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Article</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className={styles.authContainer}>
            <a href="#" className={styles.login}>
              Log in
            </a>
            <a href="#" className={styles.register}>
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

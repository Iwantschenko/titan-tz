import { Navigation } from '@modules/_shared/Navigation';
import styles from './Header.module.scss';
import logo from '@assets/icons/main-logo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <a href="" className="">
          <img src={logo} alt="main logo" className={styles.header_logo} />
        </a>
      </div>
      <Navigation />
    </header>
  );
};

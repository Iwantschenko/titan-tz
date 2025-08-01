import { Navigation } from '@modules/_shared/Navigation';
import styles from './Header.module.scss';
import logo from '@assets/icons/main-logo.png';
import { SideBar } from '@modules/SideBar/sideBar';
import { useState } from 'react';

export const Header = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header_logo}>
          <a href="/home" className="">
            <img src={logo} alt="main logo" className={styles.header_logo} />
          </a>
        </div>
        <div>
          <div className={styles.header_navigation}>
            <Navigation />
          </div>
          <button
            onClick={() => setIsOpenSideBar(true)}
            className={styles.header_burgerMenu}
            aria-label="Menu"
          />
        </div>
      </header>

      {isOpenSideBar && (
        <SideBar
          isOpen={isOpenSideBar}
          onClose={() => setIsOpenSideBar(false)}
        />
      )}
    </>
  );
};

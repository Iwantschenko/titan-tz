import { useEffect } from 'react';
import styles from './sideBar.module.scss';
import logo from '../../assets/icons/main-logo.png';
import { Navigation } from '@modules/_shared/Navigation';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SideBar: React.FC<Props> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <aside className={styles.sideBar}>
      <div className={styles.sideBar_top}>
        <img src={logo} alt="logo" className={styles.sideBar_logo} />
        <button onClick={onClose} className={styles.sideBar_iconClose} />
      </div>
      <Navigation />
    </aside>
  );
};

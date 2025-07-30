import { useState } from 'react';
import styles from './navigation.module.scss';
import classNames from 'classnames';

const navItems = [
  'Contact us',
  'About us',
  'Packages',
  'Products',
  'Book a demo',
];

export const Navigation = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {navItems.map(title => (
          <li key={title} className={styles.nav_item}>
            <a
              href={`#${title.replace(/\s+/g, '_')}`}
              className={classNames(styles.nav_link, {
                [styles.isActive]: activeLink === title,
              })}
              onClick={() => setActiveLink(title)}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

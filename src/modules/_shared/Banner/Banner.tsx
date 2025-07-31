import type { BannerType } from '@models/BannerType';
import styles from './Banner.module.scss';

interface Props {
  data: BannerType;
}

export const Banner: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.banner} key={data.id}>
      <div className={styles.infoBox}>
        <h1 className={styles.infoBox_title}>{data.title}</h1>
        <p className={styles.infoBox_desc}>{data.description}</p>
        <a className={styles.infoBox_button}>Learn more</a>
      </div>
      <div className={styles.imageBox}>
        <img
          src={data.bgIcon}
          alt="Background Icon"
          className={styles.imageBox_bgIcon}
        />
        <img
          src={data.mainIcon}
          alt="Main Icon"
          className={styles.imageBox_mainIcon}
        />
      </div>
    </div>
  );
};

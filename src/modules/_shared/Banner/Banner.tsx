import type { BannerType } from '@models/BannerType';
import styles from './Banner.module.scss';

interface Props {
  data: BannerType;
}

export const Banner: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.banner} key={data.id}>
      {data.title}
    </div>
  );
};

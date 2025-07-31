import { useEffect, useRef, useState } from 'react';
import styles from './Slider.module.scss';
import type { BannerType } from '@models/BannerType';
import { Banner } from '@modules/_shared/Banner';
const MIN_SWIPE_DISTANCE = 50;

const BANNERS_DATA: BannerType[] = [
  {
    id: 1,
    title: 'With our advanced financial technologies',
    description:
      'your brokerage business will be up and running within the shortest time the industry have to offer.',
    bgIcon: '/icon-slider-1.svg',
    mainIcon: '/icon-skider-bg-1.svg',
  },
  {
    id: 1,
    title: 'Looking to open a brokerage?',
    description: 'Get your business plan ready with our experts.',
    bgIcon: '/icon-slider-1.svg',
    mainIcon: '/icon-skider-bg-1.svg',
  },
  {
    id: 1,
    title: 'Are you an established company?',
    description:
      'Time to make changes and get better technological solution and pricing!',
    bgIcon: '/icon-slider-1.svg',
    mainIcon: '/icon-skider-bg-1.svg',
  },
];

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > MIN_SWIPE_DISTANCE) {
      if (distance > 0) {
        setActiveIndex(prev => (prev + 1) % BANNERS_DATA.length);
      } else {
        setActiveIndex(
          prev => (prev - 1 + BANNERS_DATA.length) % BANNERS_DATA.length,
        );
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % BANNERS_DATA.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      className={styles.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={styles.slider_wrapper}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {BANNERS_DATA.map(banner => (
          <Banner data={banner} />
        ))}
      </div>

      <div className={styles.pagination}>
        {BANNERS_DATA.map((_, i) => (
          <button
            key={i}
            className={`${styles.pagination_bullet} ${
              i === activeIndex ? styles.pagination_active : ''
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

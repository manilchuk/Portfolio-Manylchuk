'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './HeroSection.module.css';

export default function HeroSection() {
  const t = useTranslations('HeroSection');

  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/portrait.jpg"
          alt={t('profilePicture')}
          width={140}
          height={175}
          className={styles.image}
        />
      </div>

      <h1 className={styles.title}>{t('name')}</h1>

      <p className={styles.subtitle}>{t('title')}</p>

      <p className={styles.description}>{t('description')}</p>
    </section>
  );
}

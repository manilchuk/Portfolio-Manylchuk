'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: 'en' | 'uk') => {
    const pathnameWithoutLocale = pathname.replace(/^\/(en|uk)/, '');

    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };

  return (
    <div className={styles.switcher}>
      <button
        type="button"
        className={`${styles.button} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => switchLocale('en')}
        aria-label="Switch to English"
      >
        EN
      </button>

      <span className={styles.separator}>/</span>

      <button
        type="button"
        className={`${styles.button} ${locale === 'uk' ? styles.active : ''}`}
        onClick={() => switchLocale('uk')}
        aria-label="Перемкнути на українську"
      >
        UK
      </button>
    </div>
  );
}

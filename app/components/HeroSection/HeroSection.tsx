'use client';

import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/portrait.jpg"
          alt="Profile Picture"
          width={120}
          height={120}
          className={styles.image}
        />
      </div>

      <h1 className={styles.title}>Manylchuk Valentyn</h1>

      <p className={styles.subtitle}>Full Stack Developer</p>

      <p className={styles.description}>
        I build exceptional and accessible digital experiences for the web. Focused on creating
        elegant solutions to complex problems.
      </p>
    </section>
  );
}

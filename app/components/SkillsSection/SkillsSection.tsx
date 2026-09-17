'use client';

import { useTranslations } from 'next-intl';

import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  const t = useTranslations('SkillsSection');
  const skills: string[] = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'CSS Modules',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
    'GitHub',
    'Vite',
    'Zustand',
    'REST API',
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('title')}</h2>

        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li key={skill} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

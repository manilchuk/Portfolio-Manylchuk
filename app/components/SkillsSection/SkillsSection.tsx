'use client';

import { motion } from 'framer-motion';
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
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {t('title')}
        </motion.h2>

        <motion.ul
          className={styles.skills}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              className={styles.skill}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.45,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.2,
                  ease: 'easeOut',
                },
              }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiFileText } from 'react-icons/fi';
import { FaGithub, FaFacebookF, FaTelegram } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

import styles from './ContactSection.module.css';

export default function ContactSection() {
  const t = useTranslations('ContactSection');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <header className={styles.header}>
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
            >
              {t('title')}
            </motion.h2>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: 'easeOut',
              }}
            >
              {t('description')}
            </motion.p>
          </header>

          <motion.address
            className={styles.location}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: 'easeOut',
            }}
          >
            <FiMapPin className={styles.icon} aria-hidden="true" />
            <span>{t('location')}</span>
          </motion.address>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.45,
              ease: 'easeOut',
            }}
          >
            <a href="mailto:manilchuk.v@gmail.com" className={styles.primaryLink}>
              <FiMail className={styles.icon} aria-hidden="true" />
              <span>{t('getInTouch')}</span>
            </a>

            <a
              href="/resume-v2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              <FiFileText className={styles.icon} aria-hidden="true" />
              <span>{t('viewResume')}</span>
            </a>
          </motion.div>

          <motion.nav
            className={styles.socials}
            aria-label={t('socialLinks')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: 'easeOut',
            }}
          >
            <a
              href="https://github.com/manilchuk"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FaGithub className={styles.socialIcon} aria-hidden="true" />
            </a>

            <a
              href="https://www.facebook.com/share/1Myw4j2E4A/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <FaFacebookF className={styles.socialIcon} aria-hidden="true" />
            </a>

            <a
              href="https://t.me/Valentyn_Manylchuk"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Telegram"
            >
              <FaTelegram className={styles.socialIcon} aria-hidden="true" />
            </a>
          </motion.nav>
        </div>
      </div>
    </section>
  );
}

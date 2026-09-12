'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiFileText } from 'react-icons/fi';
import { FaGithub, FaFacebookF, FaTelegram } from 'react-icons/fa6';

import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <header className={styles.header}>
            <h2 className={styles.title}>Contact</h2>

            <p className={styles.description}>
              Interested in working together? Let&apos;s have a conversation.
            </p>
          </header>

          <address className={styles.location}>
            <FiMapPin className={styles.icon} aria-hidden="true" />
            <span>Berdychiv, Ukraine</span>
          </address>

          <div className={styles.actions}>
            <a href="mailto:manilchuk.v@gmail.com" className={styles.primaryLink}>
              <FiMail className={styles.icon} aria-hidden="true" />
              <span>Get in Touch</span>
            </a>

            <a
              href="/resume_standart_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              <FiFileText className={styles.icon} aria-hidden="true" />
              <span>View Resume</span>
            </a>
          </div>

          <nav className={styles.socials} aria-label="Social links">
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
          </nav>
        </motion.div>
      </div>
    </section>
  );
}

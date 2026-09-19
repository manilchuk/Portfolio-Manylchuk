'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import styles from './ProjectsSection.module.css';

type ProjectType = 'team' | 'solo';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  githubLink: string;
  type: ProjectType;
  role?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'EcoTote — Bag Sales Store',
    description:
      'Responsive team landing page for an eco-friendly bags brand, featuring a product catalog, image gallery, and contact form.',
    image: '/ecotote.webp',
    link: 'https://manilchuk.github.io/first-team-project/',
    githubLink: 'https://github.com/manilchuk/first-team-project',
    type: 'team',
    role: 'Frontend developer — implemented header, mobile menu, footer & gallery',
  },
  {
    id: 2,
    title: 'Mebleria — Furniture Store',
    description:
      'Furniture store landing page built with vanilla JavaScript, featuring a product catalog, FAQ section, customer reviews, and an order form.',
    image: '/mebleria.webp',
    link: 'https://romanromanr.github.io/my-project-withJS/',
    githubLink: 'https://github.com/manilchuk/my-teamproject-withJS',
    type: 'team',
    role: 'Frontend Developer — implemented the header, mobile menu & order modal window',
  },
  {
    id: 3,
    title: 'Harmoniq — Mindful Publishing Platform',
    description:
      'Full-stack publishing platform for mental health and well-being articles, featuring user authentication, author profiles, and article catalog.',
    image: '/harmoniq.webp',
    link: 'https://harmoniq-sage.vercel.app/',
    githubLink: 'https://github.com/manilchuk/cheerful-squirrels-front',
    type: 'team',
    role: 'Frontend Developer — implemented the hero section, the "About Us" section, the article component & the application\'s light and dark themes',
  },
  {
    id: 4,
    title: 'TravelTrucks — Camper Rental',
    description:
      'Camper van rental platform with a searchable catalog, advanced filtering by features, detailed vehicle pages, and a seamless booking experience.',
    image: '/traveltrucks.webp',
    link: 'https://travel-trucks-ruddy-xi.vercel.app/',
    githubLink: 'https://github.com/manilchuk/TravelTrucks',
    type: 'solo',
  },
  {
    id: 5,
    title: 'TruckFest — Cooking Game',
    description:
      'Responsive landing page for a mobile cooking game with interactive UI components, game screenshots, user reviews, smooth animations, and a Google Play download section.',
    image: '/truckfest.webp',
    link: 'https://stp-13023.vercel.app/',
    githubLink: 'https://github.com/manilchuk/STP-13023',
    type: 'team',
    role: 'Frontend Developer — implemented the header, mobile menu, Features, Reviews, Privacy Policy, Terms of Service & animations',
  },
  {
    id: 6,
    title: 'ReGarden Match — Puzzle Game',
    description:
      'Responsive promotional landing page for a match-3 puzzle game featuring game mechanics, interactive sections, player reviews, FAQ, image gallery, and Google Play integration.',
    image: '/regarden-match.webp',
    link: 'https://stpp-398.vercel.app/',
    githubLink: 'https://github.com/manilchuk/STPP-398',
    type: 'team',
    role: 'Frontend Developer — implemented the hero section, About the Game, Features, Reviews, and FAQ sections, Privacy Policy and Terms of Service & animations',
  },
];

const PROJECTS_PER_PAGE = 4;

export default function ProjectsSection() {
  const t = useTranslations('ProjectsSection');

  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PROJECTS_PER_PAGE, projects.length));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className={styles.title}>{t('title')}</h2>
        </motion.header>

        <ul className={styles.projects}>
          {visibleProjects.map((project, index) => (
            <motion.li
              key={project.id}
              className={styles.projectItem}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (index % PROJECTS_PER_PAGE) * 0.12,
                ease: 'easeOut',
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                  ease: 'easeOut',
                },
              }}
            >
              <article className={styles.card}>
                <figure className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className={styles.image}
                  />

                  <span
                    className={`${styles.badge} ${
                      project.type === 'team' ? styles.badgeTeam : styles.badgeSolo
                    }`}
                  >
                    {project.type === 'team' ? t('teamProject') : t('soloProject')}
                  </span>
                </figure>

                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>

                  <p className={styles.description}>{project.description}</p>

                  {project.type === 'team' && project.role && (
                    <p className={styles.role}>
                      <span className={styles.roleLabel}>{t('myRole')}</span> {project.role}
                    </p>
                  )}

                  <footer className={styles.footer}>
                    <a
                      href={project.link}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('viewProject')} <span aria-hidden="true">→</span>
                    </a>

                    <a
                      href={project.githubLink}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('github')} <span aria-hidden="true">→</span>
                    </a>
                  </footer>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>

        {hasMore && (
          <motion.div
            className={styles.loadMoreWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              type="button"
              onClick={handleLoadMore}
              className={styles.loadMoreButton}
              aria-label={t('loadMore')}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('loadMore')}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

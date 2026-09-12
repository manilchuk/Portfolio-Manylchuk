'use client';

import { useState } from 'react';
import Image from 'next/image';
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
    link: 'https://romanromanr.github.io/first-team-project/index.html',
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
    role: 'Frontend Developer — implemented the hero section, About the Game, Features, Reviews, and FAQ sections, Privacy Policy and Terms of Service & animations.',
  },
];

const PROJECTS_PER_PAGE = 4;

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PROJECTS_PER_PAGE, projects.length));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
        </header>

        <ul className={styles.projects}>
          {visibleProjects.map((project) => (
            <li key={project.id} className={styles.projectItem}>
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
                    {project.type === 'team' ? 'Team project' : 'Solo project'}
                  </span>
                </figure>

                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>

                  <p className={styles.description}>{project.description}</p>

                  {project.type === 'team' && project.role && (
                    <p className={styles.role}>
                      <span className={styles.roleLabel}>My role:</span> {project.role}
                    </p>
                  )}

                  <footer className={styles.footer}>
                    <a
                      href={project.link}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project <span aria-hidden="true">→</span>
                    </a>

                    <a
                      href={project.githubLink}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <span aria-hidden="true">→</span>
                    </a>
                  </footer>
                </div>
              </article>
            </li>
          ))}
        </ul>
        {hasMore && (
          <div className={styles.loadMoreWrapper}>
            <button
              type="button"
              onClick={handleLoadMore}
              className={styles.loadMoreButton}
              aria-label="Load more projects"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

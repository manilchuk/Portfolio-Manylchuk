import Image from 'next/image';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    id: 1,
    title: 'EcoTote — Bag Sales Store',
    description:
      'Responsive team landing page for an eco-friendly bags brand, featuring a product catalog, image gallery, and contact form.',
    image: '/ecotote.webp',
    link: 'https://romanromanr.github.io/first-team-project/index.html',
    githubLink: 'https://github.com/romanromanr/first-team-project',
  },
  {
    id: 2,
    title: 'Mebleria — Furniture Store',
    description:
      'Furniture store landing page built with vanilla JavaScript, featuring a product catalog, FAQ section, customer reviews, and an order form.',
    image: '/mebleria.webp',
    link: 'https://romanromanr.github.io/my-project-withJS/',
    githubLink: 'https://github.com/romanromanr/my-project-withJS',
  },
  {
    id: 3,
    title: 'Harmoniq — Mindful Publishing Platform',
    description:
      'Full-stack publishing platform for mental health and well-being articles, featuring user authentication, author profiles, and article catalog.',
    image: '/harmoniq.webp',
    link: 'https://harmoniq-sage.vercel.app/',
    githubLink: 'https://github.com/manilchuk/cheerful-squirrels-front',
  },
  {
    id: 4,
    title: 'TravelTrucks — Camper Rental',
    description:
      'Camper van rental platform with a searchable catalog, filtering by features, and detailed vehicle pages.',
    image: '/traveltrucks.webp',
    link: 'https://travel-trucks-ruddy-xi.vercel.app/',
    githubLink: 'https://github.com/manilchuk/TravelTrucks',
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
        </header>

        <ul className={styles.projects}>
          {projects.map((project) => (
            <li key={project.id} className={styles.projectItem}>
              <article className={styles.card}>
                <figure className={styles.imageWrapper}>
                  <Image src={project.image} alt={project.title} fill className={styles.image} />
                </figure>

                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>

                  <p className={styles.description}>{project.description}</p>

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
      </div>
    </section>
  );
}

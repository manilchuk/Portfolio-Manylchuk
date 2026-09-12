import HeroSection from './components/HeroSection/HeroSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/ContactSection/ContactSection';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

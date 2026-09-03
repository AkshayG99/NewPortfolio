import { getSortedProjectsData } from "@/lib/projects";
import ProjectsGallery from "@/components/ProjectsGallery";
import CopyEmailIcon from "@/components/CopyEmailIcon";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const projects = getSortedProjectsData();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <h1 className={styles.name}>Akshay Gupta</h1>
          <div className={styles.socials}>
            <a
              href="https://github.com/AkshayG99"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-m-gupta"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <CopyEmailIcon
              className={styles.socialIcon}
              email="akshaymgupta2008@gmail.com"
            />
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Resume"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.bioSection}>
          <p className={styles.bioText}>
            Leveraging Machine Learning & Data Science.
          </p>
          <p className={styles.bioText}>
            Software Engineering @ UWaterloo.
          </p>
          <p className={styles.bioText}>
            Previously with <Link href="/projects/rbc-llm-routing" className={styles.link}>RBC</Link>.
          </p>
        </div>
      </header>

      <main>
        <ProjectsGallery projects={projects} />
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProjectData } from "@/lib/projects";
import styles from "./ProjectsGallery.module.css";

export default function ProjectsGallery({ projects }: { projects: ProjectData[] }) {
  const [showWork, setShowWork] = useState(true);
  const [showProjects, setShowProjects] = useState(true);

  const filteredProjects = projects.filter((project) => {
    const isWork = project.type === "Work";
    if (isWork && showWork) return true;
    if (!isWork && showProjects) return true;
    return false;
  });

  return (
    <div>
      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${showWork ? styles.active : ""}`}
          onClick={() => setShowWork(!showWork)}
        >
          Work
        </button>
        <button
          className={`${styles.filterBtn} ${showProjects ? styles.active : ""}`}
          onClick={() => setShowProjects(!showProjects)}
        >
          Projects
        </button>
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
            <div className={styles.cardInfo}>
              <h2 className={styles.titleRow}>
                {project.title} <em>— {project.year}</em>
              </h2>
              <p className={styles.subtitle}>{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


import Link from "next/link";
import Image from "next/image";
import type { ProjectData } from "@/lib/projects";
import styles from "./ProjectsGallery.module.css";

function ProjectGrid({ projects }: { projects: ProjectData[] }) {
  return (
    <div className={styles.grid}>
      {projects.map((project) => {
        const projectHref = `/projects/${project.slug}`;

        return (
        <article key={project.slug} className={styles.card}>
          <div className={styles.imageWrapper}>
            {project.video ? (
              <video
                src={project.video}
                poster={project.image}
                className={styles.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
                aria-label={`${project.title} video preview`}
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
            )}
            <Link
              href={projectHref}
              className={styles.thumbnailLink}
              aria-label={`View ${project.title} project`}
            />
          </div>
          <Link href={projectHref} className={styles.cardInfo}>
            <h3 className={styles.titleRow}>
              {project.title} <em>— {project.year}</em>
            </h3>
            <p className={styles.subtitle}>{project.subtitle}</p>
          </Link>
        </article>
        );
      })}
    </div>
  );
}

export default function ProjectsGallery({ projects }: { projects: ProjectData[] }) {
  const work = projects.filter((project) => project.type === "Work");
  const personalProjects = projects.filter((project) => project.type !== "Work");

  return (
    <div className={styles.sections}>
      <section>
        <h2 className={styles.sectionTitle}>Work</h2>
        <ProjectGrid projects={work} />
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <ProjectGrid projects={personalProjects} />
      </section>
    </div>
  );
}

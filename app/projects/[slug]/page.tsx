import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectData, getAllProjectSlugs } from "@/lib/projects";
import styles from "./project.module.css";

// Widescreen, responsive inline SVG components to replace lucide-react
const ArrowLeftIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

const ExternalLinkIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);



interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugsData = getAllProjectSlugs();
  return slugsData.map((data) => ({
    slug: data.params.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    notFound();
  }

  const htmlContent = project.contentHtml || "";

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <Link href="/" className={styles.backBtn}>
          <ArrowLeftIcon size={16} />
          Home
        </Link>
        <div className={styles.navRight}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gitLink}
            >
              {project.linkLabel || (project.github.includes("github.com") ? "GitHub" : "Project")} <ExternalLinkIcon size={14} />
            </a>
          )}
        </div>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
      </header>

      {/* Main image */}
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
      </div>

      {/* Details Grid (Timeline, Tools, Overview) */}
      <section className={styles.detailsGrid}>
        <div className={styles.metaCol}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Timeline</span>
            <span className={styles.metaValue}>{project.timeline}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Tools</span>
            <span className={styles.metaValue}>{project.tools}</span>
          </div>
        </div>
        <div className={styles.overviewCol}>
          <p>{project.overview}</p>
        </div>
      </section>

      {/* Project Content Body */}
      <section className="markdown-content">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </section>
    </div>
  );
}

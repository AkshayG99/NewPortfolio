import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const projectsDirectory = path.join(process.cwd(), 'projects');

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  year: string;
  subtitle: string;
  image: string;
  github: string;
  timeline: string;
  tools: string;
  overview: string;
  contentHtml?: string;
  linkLabel?: string;
  type?: string;
  rank?: number;
}

// Get all projects, sorted by year descending
export function getSortedProjectsData(): ProjectData[] {
  // Ensure directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as Omit<ProjectData, 'slug'>),
      };
    });

  // Sort projects by rank (ascending), then year (descending)
  return allProjectsData.sort((a, b) => {
    if (a.rank !== undefined && b.rank !== undefined) {
      return a.rank - b.rank;
    }
    if (a.rank !== undefined) return -1;
    if (b.rank !== undefined) return 1;

    if (a.year < b.year) {
      return 1;
    } else if (a.year > b.year) {
      return -1;
    } else {
      return 0;
    }
  });
}

// Get all project slugs for routing
export function getAllProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
}

// Get a single project's data
export async function getProjectData(slug: string): Promise<ProjectData | null> {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // Convert markdown to HTML
  const contentHtml = await marked.parse(matterResult.content);

  return {
    slug,
    contentHtml,
    ...(matterResult.data as Omit<ProjectData, 'slug' | 'contentHtml'>),
  };
}

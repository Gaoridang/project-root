import type { Project } from "../types";
import { mockProjects } from "./mockProjects";

const modules = import.meta.glob<{ default: Project }>("./projects/*.ts", {
  eager: true,
});

const realProjects: Project[] = Object.values(modules)
  .map((module) => module.default)
  .filter((project) => project?.id)
  .sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });

export const isMock = realProjects.length === 0;

export const projects: Project[] = isMock ? mockProjects : realProjects;

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function projectsByStatus(status: Project["status"]): Project[] {
  return projects.filter((project) => project.status === status);
}

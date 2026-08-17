import type { Project } from "../types";

const modules = import.meta.glob<{ default: Project }>("./projects/*.ts", {
  eager: true,
});

export const projects: Project[] = Object.values(modules)
  .map((module) => module.default)
  .filter((project) => project?.id)
  .sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return a.title.localeCompare(b.title);
  });

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function projectsByStatus(status: Project["status"]): Project[] {
  return projects.filter((project) => project.status === status);
}

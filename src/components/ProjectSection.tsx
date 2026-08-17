import type { Project } from "../types";
import { ProjectCard } from "./ProjectCard";

type ProjectSectionProps = {
  title: string;
  description: string;
  empty: string;
  projects: Project[];
};

export function ProjectSection({
  title,
  description,
  empty,
  projects,
}: ProjectSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium tracking-[0.14em] text-ink uppercase">
            {title}
          </h2>
          <p className="mt-1 text-sm text-muted">{description}</p>
        </div>
        <span className="text-sm tabular-nums text-muted">{projects.length}</span>
      </div>

      {projects.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-line px-5 py-8 text-sm leading-6 text-muted">
          {empty}
        </p>
      ) : (
        <div className="flex flex-col gap-2.5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

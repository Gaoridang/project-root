import { Link } from "react-router-dom";
import type { Project } from "../types";
import { ProjectIcon } from "./ProjectIcon";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="embed-card group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border border-line bg-card px-4 py-3.5"
    >
      <ProjectIcon project={project} />
      <div className="min-w-0">
        <div className="flex items-baseline gap-2">
          <h3 className="truncate text-[15px] font-medium tracking-tight">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted">{project.year}</span>
        </div>
        <p className="mt-0.5 truncate text-sm leading-5 text-muted">
          {project.summary}
        </p>
      </div>
      <span className="hidden text-muted sm:inline" aria-hidden>
        →
      </span>
    </Link>
  );
}

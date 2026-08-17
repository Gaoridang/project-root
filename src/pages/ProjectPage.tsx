import { Link, Navigate, useParams } from "react-router-dom";
import { ProjectIcon } from "../components/ProjectIcon";
import { getProject } from "../content/loadProjects";

const linkLabels = {
  live: "Live",
  github: "GitHub",
  appStore: "App Store",
} as const;

export function ProjectPage() {
  const { id } = useParams();
  const project = id ? getProject(id) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const links = project.links
    ? (Object.entries(project.links) as [
        keyof typeof linkLabels,
        string,
      ][]).filter(([, href]) => Boolean(href))
    : [];

  return (
    <article className="mx-auto flex min-h-svh max-w-xl flex-col gap-10 px-6 py-16 sm:px-8">
      <p className="text-sm text-muted">
        <Link to="/" className="hover:text-ink">
          ← Project Root
        </Link>
      </p>

      <div className="embed-card rounded-2xl border border-line bg-card p-5">
        <div className="flex items-start gap-4">
          <ProjectIcon project={project} size="lg" />
          <div className="min-w-0 space-y-2">
            <p className="text-xs tracking-[0.16em] text-muted uppercase">
              {project.status === "ongoing" ? "Ongoing" : "Published"} ·{" "}
              {project.year}
            </p>
            <h1 className="text-2xl font-medium tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm leading-6 text-muted">{project.summary}</p>
          </div>
        </div>
      </div>

      {project.stack.length > 0 ? (
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line px-3 py-1 text-sm text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {project.notes ? (
        <p className="max-w-xl whitespace-pre-wrap text-base leading-7">
          {project.notes}
        </p>
      ) : null}

      {links.length > 0 ? (
        <ul className="flex flex-wrap gap-4 text-sm">
          {links.map(([key, href]) => (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-muted"
              >
                {linkLabels[key]}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

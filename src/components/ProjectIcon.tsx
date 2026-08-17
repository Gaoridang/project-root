import type { Project } from "../types";

export function ProjectIcon({
  project,
  size = "md",
}: {
  project: Project;
  size?: "md" | "lg";
}) {
  const box =
    size === "lg"
      ? "size-16 rounded-2xl text-xl"
      : "size-12 rounded-[14px] text-base";

  if (project.icon?.startsWith("/")) {
    return (
      <img
        src={project.icon}
        alt=""
        className={`${box} shrink-0 object-cover`}
      />
    );
  }

  return (
    <div
      className={`tone-${project.tone ?? "ink"} ${box} flex shrink-0 items-center justify-center font-medium tracking-tight`}
      aria-hidden
    >
      {project.icon ?? project.title.slice(0, 1)}
    </div>
  );
}

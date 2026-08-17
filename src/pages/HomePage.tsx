import { Header } from "../components/Header";
import { ProjectSection } from "../components/ProjectSection";
import { projectsByStatus } from "../content/loadProjects";

export function HomePage() {
  const ongoing = projectsByStatus("ongoing");
  const published = projectsByStatus("published");

  return (
    <div className="mx-auto flex min-h-svh max-w-xl flex-col gap-12 px-6 py-16 sm:px-8">
      <Header />
      <ProjectSection
        title="Ongoing"
        description="Still being built."
        empty="Nothing in progress."
        projects={ongoing}
      />
      <ProjectSection
        title="Published"
        description="Released enough to show."
        empty="Nothing published yet."
        projects={published}
      />
    </div>
  );
}

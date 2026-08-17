import { Link } from "react-router-dom";
import { isMock } from "../content/loadProjects";

export function Header() {
  return (
    <header className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs tracking-[0.18em] text-muted uppercase">
          Catalog
        </p>
        {isMock ? (
          <span className="rounded-full border border-line px-2.5 py-0.5 text-[11px] tracking-wide text-muted">
            Mock
          </span>
        ) : null}
      </div>
      <h1 className="text-3xl font-medium tracking-tight">
        <Link to="/" className="hover:opacity-70">
          Project Root
        </Link>
      </h1>
      <p className="max-w-sm text-sm leading-6 text-muted">
        New work only. Same embed for every project: icon, title, summary.
      </p>
    </header>
  );
}

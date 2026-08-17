import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="space-y-4">
      <p className="text-xs tracking-[0.18em] text-muted uppercase">Catalog</p>
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

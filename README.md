# Project Root

A catalog for **new** projects only. Existing work stays where it is.

- **Ongoing** — still being built
- **Published** — released enough to show

## Add a project

1. Create `src/content/projects/<id>.ts`:

```ts
import { defineProject } from "../defineProject";

export default defineProject({
  id: "example",
  title: "Example",
  summary: "One line on what it is.",
  status: "ongoing",
  year: 2026,
  stack: ["SwiftUI"],
  cover: "/shots/example.jpg",
  links: {
    live: "https://example.com",
    github: "https://github.com/you/example",
  },
  notes: "Optional longer note.",
});
```

2. Put a cover image in `public/shots/` if you have one.
3. Flip `status` to `"published"` when it is out.

## Develop

```bash
npm install
npm run dev
```

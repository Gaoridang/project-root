export type ProjectStatus = "ongoing" | "published";

export type ProjectTone = "forest" | "slate" | "clay" | "ink" | "plum";

export type ProjectLinks = {
  live?: string;
  github?: string;
  appStore?: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  year: number;
  stack: string[];
  icon?: string;
  tone?: ProjectTone;
  cover?: string;
  links?: ProjectLinks;
  notes?: string;
};

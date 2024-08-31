

export type ExperienceType = {
  title: string;
  subtitle?: string;
  description: string;
  Period: PeriodType;
  skills?: string[];
};

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  remarks?: string;
  stack?: string[];
};

export type NavType = {
  id: string;
  label: string;
  state: boolean;
  section: string
};

export type PeriodType = {
  from: string;
  to: string;
};

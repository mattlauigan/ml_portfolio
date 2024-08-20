export type ExperienceType = {
  title: string;
  subtitle?: string;
  description: string;
  Period: PeriodType;
  skills?: string[];
};

export type NavType = {
  id: string;
  label: string;
  state: boolean;
};

export type PeriodType = {
  from: string;
  to: string;
};


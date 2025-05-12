export type NavItem = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string; // e.g. "Development", "Design"
  items: NavItem[];
};

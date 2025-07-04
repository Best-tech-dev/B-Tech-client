/**
 * @file navLinks.ts
 * @description This file contains constant arrays that define navigation links and menu items
 * for various sections of the application, such as pages, products, courses, portals, and other links.
 */

/**
 * @constant {string[]} serviceItems
 * @description An array of strings representing the product offerings or services provided by the company.
 */

/**
 * @constant {string[]} trainingItems
 * @description An array of strings representing the available courses and certifications offered by the company.
 */

/**
 * @constant {string[]} signInItems
 * @description An array of strings representing the different portals available in the application.
 */

import { NavGroup } from "@/types/nav";

export type NavItem = { label: string; href: string };

export const signInItems: NavItem[] = [
  { label: "Student", href: "/auth/login/student" },
  { label: "Staff", href: "/auth/login/staff" },
];

export const serviceItems: NavGroup[] = [
  {
    label: "Development",
    items: [
      { label: "Frontend Development", href: "/services/frontend" },
      { label: "Backend Development", href: "/services/backend" },
      { label: "Full-stack Development", href: "/services/fullstack" },
      { label: "Mobile Development", href: "/services/mobile" },
    ],
  },
  {
    label: "Design",
    items: [{ label: "UI/UX Design", href: "/services/ui-ux" }],
  },
  {
    label: "Data & AI",
    items: [
      { label: "Data Science", href: "/services/data-science" },
      { label: "Machine Learning", href: "/services/machine-learning" },
      { label: "Artificial Intelligence", href: "/services/ai" },
    ],
  },
  {
    label: "Security & IT",
    items: [
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "IT Support", href: "/services/it-support" },
      { label: "Networking", href: "/services/networking" },
    ],
  },
  {
    label: "Others",
    items: [
      { label: "DevOps", href: "/services/devops" },
      { label: "Cloud Computing", href: "/services/cloud" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Business Analysis", href: "/services/business-analysis" },
      { label: "Project Management", href: "/services/project-management" },
      { label: "Software Testing", href: "/services/testing" },
      { label: "Training Courses", href: "/services/training-courses" },
    ],
  },
];

export const trainingItems: NavGroup[] = [
  {
    label: "Engineering Tracks",
    items: [
      { label: "Frontend Engineering", href: "/courses/frontend" },
      { label: "Backend Engineering", href: "/courses/backend" },
      { label: "Full-stack Engineering", href: "/courses/fullstack" },
      { label: "Mobile App Development", href: "/courses/mobile" },
    ],
  },
  {
    label: "Design & Marketing",
    items: [
      { label: "UI/UX Design", href: "/courses/ui-ux" },
      {
        label: "Digital Marketing Certification",
        href: "/courses/digital-marketing",
      },
    ],
  },
  {
    label: "Data & AI",
    items: [
      { label: "Data Science Certification", href: "/courses/data-science" },
      {
        label: "Machine Learning Certification",
        href: "/courses/machine-learning",
      },
      { label: "Artificial Intelligence Certification", href: "/courses/ai" },
    ],
  },
  {
    label: "Security & IT",
    items: [
      { label: "Cybersecurity Certification", href: "/courses/cybersecurity" },
      { label: "IT Support Certification", href: "/courses/it-support" },
    ],
  },
  {
    label: "Project-Oriented Tracks",
    items: [
      {
        label: "Project Management Certification",
        href: "/courses/project-management",
      },
      {
        label: "Business Analysis Certification",
        href: "/courses/business-analysis",
      },
      {
        label: "Software Testing Certification",
        href: "/courses/software-testing",
      },
      { label: "DevOps Certification", href: "/courses/devops" },
      { label: "Cloud Computing Certification", href: "/courses/cloud" },
    ],
  },
];

// This file contains TypeScript interfaces for the components used in the project.
//  * These interfaces define the expected props for each component, ensuring type safety and better code maintainability.
interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

interface BlogPost {
  title: string;
  date: string;
  category: string;
  imageSrc: string;
  href: string;
}

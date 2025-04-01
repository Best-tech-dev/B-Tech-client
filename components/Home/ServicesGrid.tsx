/**
 * ServicesGrid Component
 *
 * This component renders a responsive grid layout of service cards.
 * It utilizes the `ServiceCard` component to display individual service details
 * and maps over the `services` array to dynamically generate the grid items.
 *
 * @component
 * @returns {JSX.Element} A responsive grid of service cards.
 *
 * @remarks
 * - The grid layout adjusts based on the screen size:
 *   - Single column on small screens.
 *   - Two columns on medium screens.
 *   - Three columns on large screens.
 * - The `services` array is imported from the constants directory and is expected
 *   to contain the data required for each service card.
 *
 * @example
 * ```tsx
 * import ServicesGrid from "@/components/Home/ServicesGrid";
 *
 * const App = () => (
 *   <div>
 *     <ServicesGrid />
 *   </div>
 * );
 * ```
 */

import ServiceCard from "@/ui/ServiceCard";
import { services } from "@/constants/services";

const ServicesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServicesGrid;

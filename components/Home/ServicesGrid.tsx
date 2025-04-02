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
    <>
      <div className="px-4 sm:px-10 md:px-20 lg:px-40 pt-10 lg:pt-20">
        <h2 className="text-xl md:text-3xl text-white text-left md:text-center font-bold mb-5 lg:mb-10">
          Digital Solutions That Drive Business Growth
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 md:px-10 xl:px-6 pt-5 pb-20">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default ServicesGrid;

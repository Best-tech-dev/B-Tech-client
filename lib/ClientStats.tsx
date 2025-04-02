/**
 * @file ClientStats.tsx
 * @description This file defines the `ClientStats` component, which displays
 *              statistical information about clients and projects in a visually
 *              appealing layout using the `StatsCounter` component.
 * @module ClientStats
 */

import StatsCounter from "@/lib/StatsCounter"; // Importing the StatsCounter component

/**
 * `ClientStats` is a React functional component that renders a section displaying
 * various client-related statistics, such as the number of happy clients, client
 * retention rate, projects delivered, and experienced team members. The component
 * uses the `StatsCounter` component to display animated counters for each statistic.
 *
 * @component
 * @returns {JSX.Element} A JSX element containing the client statistics layout.
 *
 * @example
 * // Example usage:
 * import ClientStats from "@/lib/ClientStats";
 *
 * function App() {
 *   return (
 *     <div>
 *       <ClientStats />
 *     </div>
 *   );
 * }
 *
 * @remarks
 * - The component is styled using Tailwind CSS classes for responsive design.
 * - The statistics are divided into two rows, each containing two items.
 * - Dividers are used to separate the rows visually.
 *
 * @dependencies
 * - `StatsCounter`: A reusable component for displaying animated counters.
 *
 * @see StatsCounter
 */

function ClientStats() {
  return (
    <div className="bg-white w-full text-black mt-10">
      <div className="flex flex-col w-full">
        {/* First Row */}
        <div className="flex w-full justify-between text-center">
          <div className="flex flex-col items-center w-1/2">
            <StatsCounter
              value={75}
              suffix="+"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <p className="text-sm md:text-md lg:text-lg">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <StatsCounter
              value={99}
              suffix="%"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <p className="text-sm md:text-md lg:text-lg">Client Retention</p>
          </div>
        </div>

        {/* Divider between first and second row */}
        <div className="flex w-full justify-center">
          <div className="divider divider-neutral w-full" />
        </div>

        {/* Second Row */}
        <div className="flex w-full justify-between text-center mt-4">
          <div className="flex flex-col items-center w-1/2">
            <StatsCounter
              value={150}
              suffix="+"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <p className="text-sm md:text-md lg:text-lg">Projects Delivered</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <StatsCounter
              value={10}
              suffix="+"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            />
            <p className="text-sm md:text-md lg:text-lg">
              Experienced Team Members
            </p>
          </div>
        </div>

        {/* Divider after the second row */}
        <div className="flex w-full justify-center">
          <div className="divider divider-neutral w-full" />
        </div>
      </div>
    </div>
  );
}

export default ClientStats;

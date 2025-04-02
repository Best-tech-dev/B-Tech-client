"use client";

/**
 * A React functional component that renders recent posts in a responsive manner.
 * It conditionally displays either the mobile/tablet version or the desktop version
 * of the recent posts based on the screen size.
 *
 * @component
 * @returns {JSX.Element} The rendered RecentPosts component.
 *
 * @remarks
 * - The `RecentPostsMobile` component is displayed for smaller screens (block on `xl:hidden`).
 * - The `RecentPostsDesktop` component is displayed for larger screens (block on `xl:block`).
 *
 * @example
 * ```tsx
 * import RecentPosts from './RecentPosts';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <RecentPosts />
 *     </div>
 *   );
 * };
 * ```
 */

import RecentPostsMobile from "./RecentPostsMobile";
import RecentPostsDesktop from "./RecentPostsDesktop";

const RecentPosts: React.FC = () => {
  return (
    <>
      {/* Show mobile/tablet version */}
      <div className="block xl:hidden">
        <RecentPostsMobile />
      </div>

      {/* Show desktop version */}
      <div className="hidden xl:block">
        <RecentPostsDesktop />
      </div>
    </>
  );
};

export default RecentPosts;

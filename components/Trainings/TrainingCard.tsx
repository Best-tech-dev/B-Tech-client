import Image from "next/image";
import Link from "next/link";
import { TrainingType } from "@/constants/trainings";

export default function TrainingCard({
  title,
  slug,
  description,
  category,
  image,
  comingSoon = false,
}: TrainingType) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        {comingSoon && (
          <div className="absolute top-3 right-3">
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        {!comingSoon && category === "Bootcamp" && (
          <Link
            href={`/trainings/${slug}`}
            className="inline-flex items-center text-brand-primary font-medium hover:text-brand-primary/80 transition-colors"
          >
            Learn More
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}

        {comingSoon && (
          <div className="text-gray-500 font-medium text-sm">
            Stay tuned for updates
          </div>
        )}
      </div>
    </div>
  );
}

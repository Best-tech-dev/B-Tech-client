import Image from "next/image";
import Link from "next/link";
import { TrainingType } from "@/constants/trainings";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

type TrainingCardProps = TrainingType;

export default function TrainingCard({
  title,
  slug,
  description,
  image,
  comingSoon,
}: TrainingCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-[1.015]">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
          {comingSoon && (
            <span className="ml-2 inline-block px-2 py-0.5 text-xs text-white bg-yellow-500 rounded-full">
              Coming Soon
            </span>
          )}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          {description.length > 120
            ? `${description.slice(0, 117)}...`
            : description}
        </p>
        {!comingSoon && (
          <Link
            href={`/trainings/${slug}`}
            className="text-brand-primary font-medium text-sm hover:underline"
          >
            Learn more
            <MdOutlineKeyboardDoubleArrowRight className="inline-block size-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

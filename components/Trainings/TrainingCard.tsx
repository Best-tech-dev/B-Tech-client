"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TrainingType } from "@/constants/trainings";
import { ArrowRight } from "lucide-react";

type Props = {
  training: TrainingType;
};

const TrainingCard: React.FC<Props> = ({ training }) => {
  return (
    <div className="rounded-2xl bg-[#222732] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <Image
        src={training.image}
        alt={training.title}
        width={500}
        height={300}
        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold">{training.title}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">
          {training.description}
        </p>
        {training.comingSoon ? (
          <span className="text-[#a4cd39] font-semibold text-sm">
            Coming Soon
          </span>
        ) : (
          <Link
            href={`/trainings/${training.slug}`}
            className="inline-flex items-center gap-2 text-sm text-[#2bcd15] font-semibold hover:underline transition-all"
          >
            View Details
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TrainingCard;

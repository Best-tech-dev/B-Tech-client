"use client";

import { useState, useEffect } from "react";

type ControlsProps = {
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  duration: number;
};

const Controls: React.FC<ControlsProps> = ({
  onNext,
  onPrev,
  currentIndex,
  duration,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, duration / 100);

    return () => clearInterval(interval);
  }, [currentIndex, duration]); // Added 'duration' to dependencies

  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center">
      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="mx-2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
      >
        ◀
      </button>

      {/* Progress Bar */}
      <div className="relative w-40 h-1 bg-gray-300 rounded overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="mx-2 p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition"
      >
        ▶
      </button>
    </div>
  );
};

export default Controls;

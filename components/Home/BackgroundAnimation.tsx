import React from "react";

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-[-2]">
      <div className="absolute inset-0 bg-gradient-bg"></div>
      <div
        className="absolute inset-0 animate-background-shift"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(164, 205, 57, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(143, 179, 47, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 40% 80%, rgba(184, 217, 92, 0.18) 0%, transparent 60%),
            radial-gradient(circle at 60% 40%, rgba(164, 205, 57, 0.08) 0%, transparent 70%)
          `,
        }}
      ></div>
    </div>
  );
};

export default BackgroundAnimation;

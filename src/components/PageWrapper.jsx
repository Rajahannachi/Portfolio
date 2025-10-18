import React from "react";
import AnimatedBackground from "./AnimatedBackground";

export default function PageWrapper({ 
  children, 
  className = "",
  particleCount = 20,
  showGrid = true,
  ...props 
}) {
  return (
    <AnimatedBackground 
      className={`min-h-screen transition-colors duration-500 bg-white dark:bg-gray-900 ${className}`} 
      particleCount={particleCount}
      showGrid={showGrid}
      {...props}
    >
      {children}
    </AnimatedBackground>
  );
}

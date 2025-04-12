"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export function NavigationProgress() {
  const [progress, setProgress] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;

    if (isNavigating) {
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 100);
    } else {
      setProgress(100);
      const timeout = setTimeout(() => {
        setProgress(0);
      }, 200);
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(progressInterval);
  }, [isNavigating]);

  useEffect(() => {
    setIsNavigating(true);
    const timeout = setTimeout(() => setIsNavigating(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  if (!isNavigating && progress === 0) return null;

  return (
    <Progress 
      value={progress} 
      className="fixed top-0 left-0 right-0 z-50 h-1 w-full rounded-none transition-all duration-300 ease-in-out"
    />
  );
}
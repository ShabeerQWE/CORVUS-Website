"use client";
import * as React from "react";

export function TypewriterEffect({
  words,
  className = "",
  ...props
}: {
  words: string[];
  className?: string;
  [key: string]: unknown;
}) {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);

  React.useEffect(() => {
    if (index === words.length) return;
    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <h1
      className={`text-2xl md:text-4xl lg:text-7xl font-extrabold text-white text-center tracking-tight drop-shadow-lg ${className}`}
      {...props}
    >
      {`${words[index].substring(0, subIndex)}`}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
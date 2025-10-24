'use client';

import React, { useEffect, useState } from 'react';

type TypedSegment = {
  text: string;
  className?: string;
};

type TypedSentenceProps = {
  segments: TypedSegment[];
  typeSpeed?: number;
};

export const TypedSentence = ({ segments, typeSpeed = 70 }: TypedSentenceProps) => {
  const fullText = segments.map((s) => s.text).join('');
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex((i) => i + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText, typeSpeed]);

  // Build styled output based on how much has been typed
  const renderStyledText = () => {
    let currentIndex = 0;
    return segments.map((segment, i) => {
      const chars = segment.text.split('');
      const typedChars = [];

      for (let j = 0; j < chars.length; j++) {
        if (currentIndex < typedText.length) {
          typedChars.push(chars[j]);
          currentIndex++;
        } else {
          break;
        }
      }

      return (
        <span key={i} className={segment.className}>
          {typedChars.join('')}
        </span>
      );
    });
  };

  return (
    <span>
      {renderStyledText()}
      <span className="animate-pulse">|</span>
    </span>
  );
};

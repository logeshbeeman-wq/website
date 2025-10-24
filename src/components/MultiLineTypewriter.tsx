'use client';

import { useEffect, useState, useRef } from 'react';

type Line = {
  text: string;
  className?: string;
};

type MultiLineTypewriterProps = {
  sets: Line[][];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  // soundUrl?: string; // Typing sound file
  // volume?: number;
};

export const MultiLineTypewriter = ({
  sets,
  typeSpeed = 70,
  deleteSpeed = 50,
  pauseTime = 1500,
  // soundUrl = '/sounds/typing.wav', // Default path in /public/sounds/
  // volume = 0.3,
}: MultiLineTypewriterProps) => {
  const [setIndex, setSetIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const fullText = sets[setIndex].map((line) => line.text).join('');

  // // ✅ Load the sound only once
  // useEffect(() => {
  //   if (soundUrl) {
  //     audioRef.current = new Audio(soundUrl);
  //     audioRef.current.volume = volume;
  //     audioRef.current.preload = 'auto';
  //   }
  // }, [soundUrl, volume]);

  // ✅ Core typewriter effect
  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        if (isDeleting) {
          setTypedLength(0);
          setIsDeleting(false);
          setSetIndex((prev) => (prev + 1) % sets.length);
        } else {
          setIsDeleting(true);
        }
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && typedLength < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedLength((prev) => prev + 1);

        // ✅ Play sound per character typed
        if (audioRef.current && !isDeleting) {
          // Create a clone so multiple quick sounds can overlap naturally
          const sound = audioRef.current.cloneNode(true) as HTMLAudioElement;
          // sound.volume = volume;
          sound.play().catch(() => {});
        }
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && typedLength > 0) {
      const timeout = setTimeout(() => {
        setTypedLength((prev) => prev - 1);
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && typedLength === fullText.length) {
      setIsPaused(true);
    }

    if (isDeleting && typedLength === 0) {
      setIsPaused(true);
    }
  }, [
    typedLength,
    isDeleting,
    isPaused,
    fullText.length,
    typeSpeed,
    deleteSpeed,
    pauseTime,
    sets.length,
    // volume,
  ]);

  // ✅ Render lines dynamically
  let cursor = 0;
  const renderLines = () => {
    const currentSet = sets[setIndex];
    return currentSet.map((line, i) => {
      const lineChars = line.text.split('');
      const typedChars: string[] = [];

      for (let j = 0; j < lineChars.length; j++) {
        if (cursor < typedLength) {
          typedChars.push(lineChars[j]);
          cursor++;
        } else {
          break;
        }
      }

      const isLastVisibleLine =
        cursor >= typedLength && cursor <= typedLength + line.text.length;

      return (
        <div
          key={i}
          className={`relative inline-block ${line.className || ''}`}
          style={{ whiteSpace: 'pre' }}
        >
          {typedChars.join('')}
          {i === currentSet.length - 1 && isLastVisibleLine && (
            <span className="ml-1 border-r-2 border-purple-600 dark:border-purple-400 animate-blink align-middle" />
          )}
        </div>
      );
    });
  };

  return (
    <div className="inline-block text-center leading-tight">
      {renderLines()}
      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
  words: string[];
  interval?: number;
}

export function AnimatedText({ words, interval = 4000 }: AnimatedTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordsRef = useRef<HTMLDivElement[]>([]);
  const lettersRef = useRef<HTMLSpanElement[][]>([]);

  useEffect(() => {
    if (wordsRef.current[0]) {
      wordsRef.current[0].style.opacity = '1';
    }

    words.forEach((word, wordIndex) => {
      const wordElement = wordsRef.current[wordIndex];
      if (wordElement) {
        lettersRef.current[wordIndex] = Array.from(wordElement.getElementsByClassName('letter')) as HTMLSpanElement[];
      }
    });
  }, [words]);

  useEffect(() => {
    const animateLetters = () => {
      const currentWord = lettersRef.current[currentWordIndex];
      const nextWordIndex = (currentWordIndex + 1) % words.length;
      const nextWord = lettersRef.current[nextWordIndex];

      currentWord?.forEach((letter, i) => {
        setTimeout(() => {
          letter.className = 'letter out';
        }, i * 80);
      });

      if (nextWord) {
        nextWord.forEach((letter) => {
          letter.className = 'letter behind';
        });
        if (wordsRef.current[nextWordIndex]) {
          wordsRef.current[nextWordIndex].style.opacity = '1';
        }
        nextWord.forEach((letter, i) => {
          setTimeout(() => {
            letter.className = 'letter in';
          }, 340 + (i * 80));
        });
      }

      setCurrentWordIndex(nextWordIndex);
    };

    const timer = setInterval(animateLetters, interval);
    return () => clearInterval(timer);
  }, [currentWordIndex, words.length, interval]);

  return (
    <div className="animated-text">
      {words.map((word, index) => (
        <div
          key={index}
          className="word"
          data-text={word}
          ref={el => {
            if (el) wordsRef.current[index] = el;
          }}
        >
          {word.split('').map((char, charIndex) => (
            <span key={charIndex} className="letter">
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
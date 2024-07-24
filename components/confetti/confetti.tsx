"use client";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const ConfettiAnimation = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Set initial window dimensions
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Update dimensions if window is resized
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Set timeout to hide confetti after 20 seconds
    const timeout = setTimeout(() => {
      setShowConfetti(false);
    }, 20000); // 20000 milliseconds = 20 seconds

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={true}
          numberOfPieces={200}
          run={showConfetti}
        />
      )}
    </>
  );
};

export default ConfettiAnimation;

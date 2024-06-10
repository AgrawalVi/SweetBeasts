import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'

interface ConfettiEffectProps {
  runConfetti: boolean;
  onConfettiComplete: () => void;
}

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ runConfetti, onConfettiComplete }) => {
  const { width, height } = useWindowSize()

  return runConfetti ? <Confetti width={width} height={height} onConfettiComplete={onConfettiComplete} recycle={false} numberOfPieces={200} /> : null;
};

export default ConfettiEffect;

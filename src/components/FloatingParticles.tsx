'use client';

import { useEffect, useRef } from 'react';
import { useParticles } from '@/hooks/useParticles';

const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { initializeParticles, startAnimation, stopAnimation } = useParticles({
    colors: [
      '#ff4444', '#ff6666', '#ff8888', '#ffaaaa', // Red variants
      '#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0'  // White variants
    ],
    speed: 0.5,
    size: { min: 1, max: 4 },
    opacity: { min: 0.2, max: 1 },
    connectionDistance: 120,
    connectionOpacity: 0.15
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles(canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Start animation
    startAnimation(ctx, canvas.width, canvas.height);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      stopAnimation();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default FloatingParticles;

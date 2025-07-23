'use client';

import { useEffect, useRef } from 'react';
import { useParticles } from '@/hooks/useParticles';

interface ParticleBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  theme?: 'red-white' | 'blue-white' | 'custom';
  customColors?: string[];
  showConnections?: boolean;
  className?: string;
}

const ParticleBackground = ({ 
  intensity = 'medium',
  theme = 'red-white',
  customColors,
  showConnections = true,
  className = ''
}: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Define color schemes
  const colorSchemes = {
    'red-white': [
      '#ff4444', '#ff6666', '#ff8888', '#ffaaaa',
      '#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0'
    ],
    'blue-white': [
      '#4444ff', '#6666ff', '#8888ff', '#aaaaff',
      '#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0'
    ],
    'custom': customColors || [
      '#ff4444', '#ff6666', '#ff8888', '#ffaaaa',
      '#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0'
    ]
  };

  // Define intensity settings
  const intensitySettings = {
    low: {
      speed: 0.3,
      size: { min: 0.5, max: 2 },
      opacity: { min: 0.1, max: 0.6 },
      connectionDistance: 80,
      connectionOpacity: 0.08
    },
    medium: {
      speed: 0.5,
      size: { min: 1, max: 4 },
      opacity: { min: 0.2, max: 1 },
      connectionDistance: 120,
      connectionOpacity: 0.15
    },
    high: {
      speed: 0.8,
      size: { min: 1.5, max: 5 },
      opacity: { min: 0.3, max: 1 },
      connectionDistance: 150,
      connectionOpacity: 0.2
    }
  };

  const settings = intensitySettings[intensity];
  const colors = colorSchemes[theme];

  const { initializeParticles, startAnimation, stopAnimation } = useParticles({
    colors,
    speed: settings.speed,
    size: settings.size,
    opacity: settings.opacity,
    connectionDistance: showConnections ? settings.connectionDistance : 0,
    connectionOpacity: settings.connectionOpacity
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
  }, [initializeParticles, startAnimation, stopAnimation]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default ParticleBackground;

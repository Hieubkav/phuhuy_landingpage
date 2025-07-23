'use client';

import { ReactNode } from 'react';

interface ParticleSectionProps {
  children: ReactNode;
  className?: string;
  particleIntensity?: 'none' | 'low' | 'medium' | 'high';
}

const ParticleSection = ({ 
  children, 
  className = '',
  particleIntensity = 'medium'
}: ParticleSectionProps) => {
  const getParticleOverlay = () => {
    if (particleIntensity === 'none') return null;

    const intensityClasses = {
      low: 'opacity-30',
      medium: 'opacity-50', 
      high: 'opacity-70'
    };

    return (
      <div 
        className={`absolute inset-0 pointer-events-none ${intensityClasses[particleIntensity]}`}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 68, 68, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 102, 102, 0.08) 0%, transparent 50%)
          `
        }}
      />
    );
  };

  return (
    <section className={`relative ${className}`}>
      {getParticleOverlay()}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default ParticleSection;

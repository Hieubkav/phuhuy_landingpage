import { useRef, useCallback } from 'react';

interface ParticleConfig {
  count?: number;
  colors?: string[];
  speed?: number;
  size?: { min: number; max: number };
  opacity?: { min: number; max: number };
  connectionDistance?: number;
  connectionOpacity?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

export const useParticles = (config: ParticleConfig = {}) => {
  const {
    colors = ['#ff4444', '#ff6666', '#ff8888', '#ffaaaa', '#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0'],
    speed = 0.5,
    size = { min: 1, max: 4 },
    opacity = { min: 0.2, max: 1 },
    connectionDistance = 120,
    connectionOpacity = 0.15
  } = config;

  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  const createParticle = useCallback((width: number, height: number): Particle => {
    const maxLife = 300 + Math.random() * 200;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * (size.max - size.min) + size.min,
      opacity: Math.random() * (opacity.max - opacity.min) + opacity.min,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife
    };
  }, [colors, speed, size, opacity]);

  const initializeParticles = useCallback((width: number, height: number, count?: number) => {
    const particleCount = count || Math.floor((width * height) / 15000);
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(createParticle(width, height));
    }
  }, [createParticle]);

  const drawConnections = useCallback((ctx: CanvasRenderingContext2D) => {
    particlesRef.current.forEach((particle, i) => {
      particlesRef.current.slice(i + 1).forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * connectionOpacity;
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = particle.color.includes('ff') ? '#ff4444' : '#ffffff';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
          ctx.restore();
        }
      });
    });
  }, [connectionDistance, connectionOpacity]);

  const updateAndDrawParticles = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life++;

      // Wrap around edges
      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;

      // Calculate opacity
      const lifeRatio = particle.life / particle.maxLife;
      let currentOpacity = particle.opacity;
      
      if (lifeRatio > 0.8) {
        currentOpacity = particle.opacity * (1 - (lifeRatio - 0.8) / 0.2);
      }

      // Draw particle
      ctx.save();
      ctx.globalAlpha = currentOpacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Add glow for red particles
      if (particle.color.includes('ff')) {
        ctx.save();
        ctx.globalAlpha = currentOpacity * 0.3;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Replace dead particles
      if (particle.life >= particle.maxLife) {
        particlesRef.current[index] = createParticle(width, height);
      }
    });
  }, [createParticle]);

  const animate = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.clearRect(0, 0, width, height);
    drawConnections(ctx);
    updateAndDrawParticles(ctx, width, height);
  }, [drawConnections, updateAndDrawParticles]);

  const startAnimation = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const animateFrame = () => {
      animate(ctx, width, height);
      animationRef.current = requestAnimationFrame(animateFrame);
    };
    animateFrame();
  }, [animate]);

  const stopAnimation = useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  return {
    initializeParticles,
    startAnimation,
    stopAnimation,
    particlesRef
  };
};

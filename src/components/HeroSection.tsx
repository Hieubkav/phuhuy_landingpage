'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Facebook, Mail, Phone } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';
import { useState, useCallback } from 'react';

interface RippleEffect {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export default function HeroSection() {
  const [ripples, setRipples] = useState<RippleEffect[]>([]);

  const handleBackgroundClick = useCallback((e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    // Chỉ tạo ripple khi click vào background, không phải các element con
    if (e.target === e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      let x: number, y: number;

      // Xử lý cả mouse và touch events
      if ('clientX' in e) {
        // Mouse event
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      } else {
        // Touch event
        const touch = e.touches[0] || e.changedTouches[0];
        x = touch.clientX - rect.left;
        y = touch.clientY - rect.top;
      }

      const newRipple: RippleEffect = {
        id: Date.now() + Math.random(),
        x,
        y,
        timestamp: Date.now()
      };

      setRipples(prev => {
        // Giới hạn số lượng ripples để tránh lag
        const filtered = prev.filter(ripple => Date.now() - ripple.timestamp < 1200);
        return [...filtered, newRipple].slice(-5); // Tối đa 5 ripples cùng lúc
      });

      // Tự động xóa ripple sau 1.2 giây
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1200);
    }
  }, []);

  return (
    <section
      id="hero"
      className="hero-section min-h-screen flex items-center justify-center container-padding section-padding w-full max-w-full overflow-x-hidden relative cursor-pointer"
      onClick={handleBackgroundClick}
      onTouchStart={handleBackgroundClick}
    >
      {/* Frosted Glass Overlay */}
      <div className="hero-frosted-overlay absolute inset-0 pointer-events-none z-[1]" />

      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="ripple-effect absolute pointer-events-none z-[2] w-4 h-4"
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 25, opacity: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother animation
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center w-full relative z-[3]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="content-spacing"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-2"
          >
            <div className="relative">
              <Avatar className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 border-4 border-red-500/30 glow-red">
                <AvatarImage
                  src="/avatar.jpg"
                  alt="Phú Huy Avatar"
                />
                <AvatarFallback>PH</AvatarFallback>
              </Avatar>
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-red-600/20 to-red-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="content-spacing-sm"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-gradient">Phú Huy</span>
            </h1>
            <TypewriterEffect className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium" />
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
              Video Editor chuyên nghiệp với 5+ năm kinh nghiệm. Chuyên về YouTube, Facebook, Discord content.
              Thành thạo AI, Photoshop, Illustrator.
            </p>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4"
          >
            <Badge variant="secondary" className="glass-card text-red-400 border-red-500/30 text-xs sm:text-sm px-3 py-1">
              5+ Năm Kinh Nghiệm
            </Badge>
            <Badge variant="secondary" className="glass-card text-red-400 border-red-500/30 text-xs sm:text-sm px-3 py-1">
              400+ Khách Hàng
            </Badge>
            <Badge variant="secondary" className="glass-card text-red-400 border-red-500/30 text-xs sm:text-sm px-3 py-1">
              YouTube & Facebook Expert
            </Badge>
            <Badge variant="secondary" className="glass-card text-red-400 border-red-500/30 text-xs sm:text-sm px-3 py-1">
              Discord Bot Developer
            </Badge>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0 glow-red w-full sm:w-auto px-6 py-3"
              onClick={() => window.open('https://www.facebook.com/phuhuy.nguyen.3979', '_blank')}
            >
              <Facebook className="mr-2 h-5 w-5" />
              Liên Hệ Facebook
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-card border-red-500/30 text-red-400 hover:bg-red-500/10 w-full sm:w-auto px-6 py-3"
            >
              <Mail className="mr-2 h-5 w-5" />
              Xem Portfolio
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="pt-6 text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              STK: 0359595173 (MB Bank)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

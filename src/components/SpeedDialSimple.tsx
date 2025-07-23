'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  ArrowUp
} from 'lucide-react';

export default function SpeedDialSimple() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openZalo = () => {
    window.open('https://zalo.me/0917952387', '_blank', 'noopener,noreferrer');
  };

  const openFacebook = () => {
    window.open('https://www.facebook.com/phuhuy.nguyen.3979', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Zalo Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={openZalo}
        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:shadow-xl group"
        title="Chat Zalo"
      >
        {/* Zalo Icon - Letter Z */}
        <span className="text-xl font-bold">Z</span>

        {/* Tooltip */}
        <div className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat Zalo
        </div>
      </motion.button>

      {/* Facebook Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={openFacebook}
        className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:shadow-xl group"
        title="Facebook"
      >
        <Facebook className="h-5 w-5" />
        
        {/* Tooltip */}
        <div className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Facebook
        </div>
      </motion.button>

      {/* Back to Top Button - Chỉ hiện khi scroll */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:shadow-xl group"
          title="Lên đầu trang"
        >
          <motion.div
            animate={{ y: [-1, 1, -1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.div>
          
          {/* Tooltip */}
          <div className="absolute right-14 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Lên đầu trang
          </div>
        </motion.button>
      )}
    </div>
  );
}

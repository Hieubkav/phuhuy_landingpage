'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase, 
  Settings, 
  MessageCircle,
  Facebook
} from 'lucide-react';

const navItems = [
  { name: 'Trang Chủ', href: '#hero', icon: Home },
  { name: 'Về Tôi', href: '#about', icon: User },
  { name: 'Kinh Nghiệm', href: '#experience', icon: Briefcase },
  { name: 'Dịch Vụ', href: '#services', icon: Settings },
  { name: 'Liên Hệ', href: '#contact', icon: MessageCircle },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-card backdrop-blur-lg border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto container-padding py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-bold"
            >
              <span className="text-gradient">Phú Huy</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-sm lg:text-base ${
                    activeSection === item.href.substring(1)
                      ? 'text-red-400 bg-red-500/10'
                      : 'text-gray-300 hover:text-red-400 hover:bg-red-500/5'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </motion.button>
              ))}

              <Button
                size="sm"
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0 px-4 py-2"
                onClick={() => window.open('https://www.facebook.com/phuhuy.nguyen.3979', '_blank')}
              >
                <Facebook className="h-4 w-4 mr-2" />
                Liên Hệ
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-red-500/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 sm:top-20 left-4 right-4 z-40 md:hidden"
          >
            <div className="glass-card backdrop-blur-lg border border-white/10 rounded-lg p-3 sm:p-4">
              <div className="space-y-1 sm:space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                      activeSection === item.href.substring(1)
                        ? 'text-red-400 bg-red-500/10'
                        : 'text-gray-300 hover:text-red-400 hover:bg-red-500/5'
                    }`}
                  >
                    <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    {item.name}
                  </motion.button>
                ))}

                <div className="pt-2 border-t border-white/10 mt-2">
                  <Button
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0 py-2.5"
                    onClick={() => {
                      window.open('https://www.facebook.com/phuhuy.nguyen.3979', '_blank');
                      setIsOpen(false);
                    }}
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    Liên Hệ Facebook
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

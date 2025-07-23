'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Heart,
  ArrowUp,
  Phone,
  MapPin
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-black to-transparent border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">
              <span className="text-gradient">Phú Huy</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Content Creator & Video Editor chuyên nghiệp với 5+ năm kinh nghiệm. 
              Cam kết mang đến chất lượng tốt nhất cho mọi dự án.
            </p>
            <Button
              className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0"
              onClick={() => window.open('https://www.facebook.com/phuhuy.nguyen.3979', '_blank')}
            >
              <Facebook className="h-4 w-4 mr-2" />
              Kết Nối Facebook
            </Button>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Dịch Vụ</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-red-400 transition-colors cursor-pointer">
                Video Editing Chuyên Nghiệp
              </li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">
                Thiết Kế Website
              </li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">
                Content Creation
              </li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">
                Discord Bot Development
              </li>
              <li className="hover:text-red-400 transition-colors cursor-pointer">
                Hợp Tác Lâu Dài
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Liên Hệ</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Facebook className="h-4 w-4 text-red-400" />
                <span>Phú Huy Nguyễn</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-red-400" />
                <span>STK: 0359595173 (MB Bank)</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-red-400" />
                <span>Cà Mau, Việt Nam</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>© 2024 Phú Huy. Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>in Vietnam</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">
                Powered by Next.js & TailwindCSS
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                onClick={scrollToTop}
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

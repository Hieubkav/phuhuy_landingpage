'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Facebook, Mail, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center container-padding section-padding w-full max-w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center w-full">
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
                  src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/474882454_1313143333067240_5295512466136977995_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFe6jLQTKp0-V5B6I6cI-E9BVdSsnzp304FV1KyfOnfTtKDFyGfC2guC10CTjDC5sccumJ7jjns0VR1VjW8C5mm&_nc_ohc=vrbKalQBxc4Q7kNvwFFpdPa&_nc_oc=AdlC1wngmB3GNHX18zoqCoo3AtmGq4W0_mSZcOV5O0ia16JyMQ4bloJGL_XMsg2SWijL1ZvNsbO9R0DHVlv_hgY6&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=THVioyMkrC6LvoAmyEzCpg&oh=00_AfQvo9mif8qHQHBBSFqXiLKsXx4IfATPmK1A9sqs74r2Cg&oe=6886E4E1"
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
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
              Content Creator & Video Editor
            </p>
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

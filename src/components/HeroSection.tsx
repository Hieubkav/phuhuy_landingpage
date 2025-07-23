'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Facebook, Mail, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <Avatar className="w-40 h-40 border-4 border-red-500/30 glow-red">
                <AvatarImage 
                  src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/474882454_1313143333067240_5295512466136977995_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFe6jLQTKp0-V5B6I6cI-E9BVdSsnzp304FV1KyfOnfTtKDFyGfC2guC10CTjDC5sccumJ7jjns0VR1VjW8C5mm&_nc_ohc=vrbKalQBxc4Q7kNvwFFpdPa&_nc_oc=AdlC1wngmB3GNHX18zoqCoo3AtmGq4W0_mSZcOV5O0ia16JyMQ4bloJGL_XMsg2SWijL1ZvNsbO9R0DHVlv_hgY6&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=THVioyMkrC6LvoAmyEzCpg&oh=00_AfQvo9mif8qHQHBBSFqXiLKsXx4IfATPmK1A9sqs74r2Cg&oe=6886E4E1"
                  alt="Phú Huy Avatar"
                />
                <AvatarFallback>PH</AvatarFallback>
              </Avatar>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gradient">Phú Huy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Content Creator & Video Editor
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Video Editor chuyên nghiệp với 5+ năm kinh nghiệm. Chuyên về YouTube, Facebook, Discord content. 
              Thành thạo AI, Photoshop, Illustrator.
            </p>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Badge variant="secondary" className="glass-card text-red-400 border-red-500/30">
              5+ Năm Kinh Nghiệm
            </Badge>
            <Badge variant="secondary" className="glass-card text-red-400 border-red-500/30">
              400+ Khách Hàng
            </Badge>
            <Badge variant="secondary" className="glass-card text-red-400 border-red-500/30">
              YouTube & Facebook Expert
            </Badge>
            <Badge variant="secondary" className="glass-card text-red-400 border-red-500/30">
              Discord Bot Developer
            </Badge>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0 glow-red"
              onClick={() => window.open('https://www.facebook.com/phuhuy.nguyen.3979', '_blank')}
            >
              <Facebook className="mr-2 h-5 w-5" />
              Liên Hệ Facebook
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card border-red-500/30 text-red-400 hover:bg-red-500/10"
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
            className="pt-8 text-gray-400 text-sm"
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

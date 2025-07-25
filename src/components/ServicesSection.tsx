'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Video,
  Globe,
  Sparkles,
  Heart,
  ArrowRight,
  Star
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Video Editing Chuyên Nghiệp',
    description: 'Chỉnh sửa video chất lượng cao cho YouTube, Facebook và các nền tảng social media khác',
    features: [
      'Color grading & correction',
      'Motion graphics & effects',
      'Audio mixing & mastering',
      'Thumbnail design',
      'Fast turnaround'
    ],
    price: 'Từ 200k/video',
    popular: true
  },
  {
    icon: Globe,
    title: 'Thiết Kế Website',
    description: 'Phát triển website bán acc, landing page, tools và hệ thống quản lý theo yêu cầu',
    features: [
      'Responsive design',
      'Modern UI/UX',
      'Database integration',
      'Admin panel',
      'SEO optimization'
    ],
    price: 'Từ 2tr/project',
    popular: false
  },
  {
    icon: Sparkles,
    title: 'Content Creation',
    description: 'Tạo nội dung sáng tạo và hấp dẫn cho social media, từ script đến visual content',
    features: [
      'Social media content',
      'Script writing',
      'Visual storytelling',
      'Brand consistency',
      'Engagement optimization'
    ],
    price: 'Từ 500k/tháng',
    popular: false
  },
  {
    icon: Heart,
    title: 'Hợp Tác Lâu Dài',
    description: 'Đối tác tin cậy cho các cá nhân và brand muốn phát triển presence online',
    features: [
      'Dedicated support',
      'Priority handling',
      'Custom solutions',
      'Regular consultations',
      'Long-term strategy'
    ],
    price: 'Thỏa thuận',
    popular: false
  }
];

const testimonials = [
  {
    name: 'Anh Minh',
    role: 'YouTuber',
    content: 'Phú Huy edit video rất chuyên nghiệp, hiệu ứng đẹp và giao hàng đúng hẹn. Tôi đã hợp tác được 2 năm rồi!',
    rating: 5
  },
  {
    name: 'Chị Lan',
    role: 'Business Owner',
    content: 'Website do Phú Huy làm rất đẹp và chức năng hoạt động tốt. Hỗ trợ sau bán hàng cũng rất tận tình.',
    rating: 5
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding container-padding w-full max-w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            <span className="text-gradient">Dịch Vụ</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Cung cấp giải pháp toàn diện cho nhu cầu content creation và digital marketing của bạn
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className={`glass-card h-full hover:glow-red transition-all duration-300 relative ${
                service.popular ? 'border-red-500/50' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-2.5 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1">
                      <Star className="h-3 w-3 mr-1" />
                      Phổ Biến
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-3 pt-6">
                  <div className="mx-auto mb-3 p-3 sm:p-4 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 w-fit">
                    <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-red-400" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white mb-2">{service.title}</CardTitle>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{service.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-5 pb-6">
                  <div className="space-y-2.5">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <div className="flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-bold text-gradient">{service.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Khách Hàng Nói Gì</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-red-400 text-red-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-red-400">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}

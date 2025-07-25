'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Facebook,
  CreditCard,
  Clock,
  Send
} from 'lucide-react';

const contactMethods = [
  {
    icon: Facebook,
    title: 'Facebook',
    description: 'Liên hệ trực tiếp qua Facebook Messenger',
    value: 'Phú Huy Nguyễn',
    link: 'https://www.facebook.com/phuhuy.nguyen.3979',
    primary: true
  },
  {
    icon: CreditCard,
    title: 'Thanh Toán',
    description: 'Chuyển khoản qua MB Bank',
    value: '0359595173',
    subtitle: 'MB Bank',
    primary: false
  },
  {
    icon: Clock,
    title: 'Thời Gian Làm Việc',
    description: 'Sẵn sàng hỗ trợ mọi lúc',
    value: '24/7',
    subtitle: 'Phản hồi nhanh',
    primary: false
  }
];



export default function ContactSection() {
  return (
    <section id="contact" className="section-padding container-padding bg-gradient-to-t from-black/40 to-transparent w-full max-w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            <span className="text-gradient">Liên Hệ</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Sẵn sàng biến ý tưởng của bạn thành hiện thực. Hãy liên hệ để bắt đầu dự án ngay hôm nay!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className={`glass-card h-full hover:glow-red transition-all duration-300 ${
                method.primary ? 'border-red-500/50' : ''
              }`}>
                <CardHeader className="text-center pb-4">
                  {method.primary && (
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white mb-2 w-fit mx-auto">
                      Ưu Tiên
                    </Badge>
                  )}
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 w-fit">
                    <method.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-gray-300 text-sm">{method.description}</p>
                  <div>
                    <div className="text-lg font-semibold text-white">{method.value}</div>
                    {method.subtitle && (
                      <div className="text-sm text-red-400">{method.subtitle}</div>
                    )}
                  </div>
                  {method.link && (
                    <Button 
                      className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white border-0 mt-4"
                      onClick={() => window.open(method.link, '_blank')}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Liên Hệ Ngay
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>




      </div>
    </section>
  );
}

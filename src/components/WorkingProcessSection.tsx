'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Sparkles
} from 'lucide-react';

const workingProcess = [
  {
    step: '01',
    title: 'Tư Vấn',
    description: 'Thảo luận yêu cầu và báo giá chi tiết',
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20'
  },
  {
    step: '02',
    title: 'Thỏa Thuận',
    description: 'Xác nhận dự án và timeline thực hiện',
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/30',
    glowColor: 'shadow-green-500/20'
  },
  {
    step: '03',
    title: 'Thực Hiện',
    description: 'Bắt đầu làm việc và cập nhật tiến độ',
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/20'
  },
  {
    step: '04',
    title: 'Hoàn Thành',
    description: 'Giao hàng và hỗ trợ sau dự án',
    color: 'from-red-500/20 to-red-600/20',
    borderColor: 'border-red-500/30',
    glowColor: 'shadow-red-500/20'
  }
];

export default function WorkingProcessSection() {
  return (
    <section className="section-padding container-padding bg-gradient-to-b from-transparent via-gray-900/20 to-transparent w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <Sparkles className="h-8 w-8 text-red-400" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-gradient">Quy Trình Làm Việc</span>
            </h2>
            <Sparkles className="h-8 w-8 text-red-400" />
          </motion.div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Quy trình làm việc chuyên nghiệp và hiệu quả
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workingProcess.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 10
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="relative group float-animation"
            >
              {/* Connection Line */}
              {index < workingProcess.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 z-0">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-red-500/60 via-red-400/40 to-transparent relative overflow-hidden"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 + 0.8 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: 'left' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </motion.div>
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-400 rounded-full shadow-lg shadow-red-400/50"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.3 + 1.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              )}

              <Card className="glass-card process-card h-full border-0 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-md group-hover:from-gray-800/70 group-hover:to-gray-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-red-500/15">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Step Number Badge */}
                  <motion.div
                    className="relative mb-8"
                  >
                    <div className={`process-step-badge w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${process.color} flex items-center justify-center border-2 ${process.borderColor} relative overflow-hidden group-hover:shadow-xl ${process.glowColor} transition-all duration-500 ${index === 0 ? 'pulse-glow' : ''}`}>
                      <span className="text-3xl font-bold text-white relative z-10">{process.step}</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>



                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors duration-300">
                    {process.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {process.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ x: -20 }}
                    whileHover={{ x: 0, scale: 1.2 }}
                  >
                    <ArrowRight className="h-5 w-5 text-red-400" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}

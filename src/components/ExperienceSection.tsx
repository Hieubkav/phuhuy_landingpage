'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  Bot,
  Globe,
  Award,
  Zap,
  Target
} from 'lucide-react';

const experiences = [
  {
    icon: Bot,
    title: 'Discord Bot Yu-Gi-Oh',
    period: '2020 - Hiện tại',
    description: 'Phát triển và vận hành Discord bot chuyên về Yu-Gi-Oh với hơn 3000+ thành viên tích cực',
    achievements: [
      '3000+ members hoạt động',
      'Tích hợp API Yu-Gi-Oh',
      'Hệ thống tournament tự động',
      'Community management'
    ],
    color: 'from-purple-500/20 to-purple-600/20'
  },

  {
    icon: Globe,
    title: 'Quản lý Page CDMA',
    period: '2018 - Hiện tại',
    description: 'Quản lý page Facebook CDMA về Yu-Gi-Oh, tạo content và tương tác với cộng đồng',
    achievements: [
      'Content creation',
      'Community engagement',
      'Social media marketing',
      'Brand building'
    ],
    color: 'from-blue-500/20 to-blue-600/20'
  },
  {
    icon: Zap,
    title: 'Video Editor Freelance',
    period: '2018 - Hiện tại',
    description: 'Làm việc với 400-600+ khách hàng và đơn hàng, chuyên về video editing cho YouTube và Facebook',
    achievements: [
      '400-600+ đơn hàng hoàn thành',
      'YouTube & Facebook specialist',
      'AI tools integration',
      'Client satisfaction 100%'
    ],
    color: 'from-red-500/20 to-red-600/20'
  }
];

const tools = [
  { name: 'Adobe Premiere Pro', level: 95 },
  { name: 'Adobe After Effects', level: 90 },
  { name: 'Photoshop', level: 88 },
  { name: 'Illustrator', level: 85 },
  { name: 'AI Tools', level: 92 },
  { name: 'Discord.js', level: 80 }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding container-padding bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            <span className="text-gradient">Kinh Nghiệm</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Hành trình 5+ năm xây dựng và phát triển trong lĩnh vực content creation,
            từ video editing đến community management.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-6 md:space-y-8 mb-16 md:mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card hover:glow-red transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`p-2.5 sm:p-3 rounded-full bg-gradient-to-br ${exp.color} flex-shrink-0`}>
                      <exp.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-lg sm:text-xl text-white">{exp.title}</CardTitle>
                        <Badge variant="outline" className="glass text-red-400 border-red-500/30 w-fit text-xs sm:text-sm px-2 py-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2">
                        <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300 text-xs sm:text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-xl sm:text-2xl text-white flex items-center justify-center gap-2">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                Công Cụ & Kỹ Năng
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-sm sm:text-base">{tool.name}</span>
                      <span className="text-red-400 text-xs sm:text-sm">{tool.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-red-500 to-red-400 h-1.5 sm:h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

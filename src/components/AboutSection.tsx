'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Video,
  Users,
  Gamepad2,
  PenTool,
  Bot,
  Palette
} from 'lucide-react';

const skills = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Chuyên chỉnh sửa video cho YouTube và Facebook với chất lượng chuyên nghiệp',
    tags: ['YouTube', 'Facebook', 'Premiere Pro', 'After Effects']
  },
  {
    icon: Users,
    title: 'Content Creator',
    description: 'Tạo nội dung sáng tạo và hấp dẫn cho các nền tảng social media',
    tags: ['Social Media', 'Creative Content', 'Storytelling']
  },
  {
    icon: Bot,
    title: 'Discord Expert',
    description: 'Chuyên gia về Discord, phát triển bot và quản lý cộng đồng',
    tags: ['Discord Bot', 'Community Management', '3000+ Members']
  },
  {
    icon: Gamepad2,
    title: 'Gaming Content',
    description: 'Chuyên về nội dung Valorant (game FPS) và Yu-Gi-Oh',
    tags: ['Valorant', 'Yu-Gi-Oh', 'Gaming', 'Esports']
  },
  {
    icon: PenTool,
    title: 'Creative Writing',
    description: 'Khả năng viết truyện ngắn và tạo nội dung văn bản sáng tạo',
    tags: ['Storytelling', 'Creative Writing', 'Content Writing']
  },
  {
    icon: Palette,
    title: 'Design Skills',
    description: 'Thành thạo AI, Photoshop, Illustrator cho thiết kế đồ họa',
    tags: ['AI Tools', 'Photoshop', 'Illustrator', 'Graphic Design']
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding container-padding w-full max-w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            <span className="text-gradient">Chuyên Môn</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Với hơn 5 năm kinh nghiệm trong lĩnh vực content creation và video editing,
            tôi mang đến những giải pháp sáng tạo và chuyên nghiệp cho mọi dự án.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="glass-card h-full hover:glow-red transition-all duration-300">
                <CardHeader className="text-center pb-3 pt-6">
                  <div className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 w-fit">
                    <skill.icon className="h-7 w-7 sm:h-8 sm:w-8 text-red-400" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pb-6">
                  <p className="text-gray-300 text-center leading-relaxed text-sm sm:text-base">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                    {skill.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-red-500/10 text-red-300 border-red-500/20 px-2 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <Card className="glass-card">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">5+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Năm Kinh Nghiệm</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">400+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Khách Hàng</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">3000+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Discord Members</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">100%</div>
                  <div className="text-gray-300 text-sm sm:text-base">Hài Lòng</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

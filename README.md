# Phú Huy - Portfolio Website

Landing page cá nhân chuyên nghiệp cho Phú Huy - Content Creator & Video Editor với 5+ năm kinh nghiệm.

## 🚀 Công Nghệ Sử Dụng

- **Next.js 15** - React framework với App Router và Server Components
- **TypeScript** - Type safety và developer experience tốt hơn
- **Shadcn/ui** - Component library đẹp và hiện đại
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library mượt mà
- **Lucide React** - Icon library đẹp và nhẹ

## ✨ Tính Năng

- 🌙 **Dark Theme** - Theme tối với tone màu đen-đỏ
- 🎨 **Glassmorphism Effects** - Hiệu ứng kính mờ hiện đại
- 📱 **Responsive Design** - Hoạt động tốt trên mọi thiết bị
- ⚡ **Performance Optimized** - Lazy loading và tối ưu hóa
- 🔍 **SEO Friendly** - Metadata và sitemap hoàn chỉnh
- 🎭 **Smooth Animations** - Hiệu ứng chuyển động mượt mà

## 📋 Nội Dung Website

### 🏠 Hero Section
- Giới thiệu Phú Huy là Video Editor chuyên nghiệp
- Avatar và thông tin cơ bản
- Call-to-action buttons

### 👨‍💻 About/Skills Section
- Chuyên môn: Video editing, Content Creator, Discord
- Kỹ năng: Valorant, Yu-Gi-Oh, viết truyện
- Thống kê thành tích

### 💼 Experience Section
- 5+ năm kinh nghiệm editing
- Discord bot Yu-Gi-Oh với 3000+ members
- Quản lý shop Khánh Huy - chủ hội Yu-Gi-Oh Cà Mau
- 400-600+ khách hàng và đơn hàng

### 🛠️ Services Section
- Video editing chuyên nghiệp
- Thiết kế website
- Content creation
- Hợp tác lâu dài

### 📞 Contact Section
- Facebook: https://www.facebook.com/phuhuy.nguyen.3979
- STK: 0359595173 (MB Bank)
- Quy trình làm việc 4 bước

## 🚀 Cài Đặt và Chạy

### Prerequisites
- Node.js 18+
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem website.

### Build cho production
```bash
npm run build
```

### Export static files
```bash
npm run build
```

Files sẽ được tạo trong thư mục `dist/`.

## 🌐 Deploy lên GitHub Pages

### 1. Repository
- **Repository:** https://github.com/Hieubkav/phuhuy_landingpage
- **Live URL:** https://hieubkav.github.io/phuhuy_landingpage/

### 2. Cấu hình GitHub Pages
- Vào Settings > Pages
- Chọn Source: GitHub Actions
- Workflow sẽ tự động chạy khi push code lên branch `main` hoặc `master`

### 3. Auto Deploy
GitHub Actions đã được cấu hình để:
- ✅ Tự động build khi có push/PR
- ✅ Deploy lên GitHub Pages
- ✅ Hỗ trợ cả branch `main` và `master`
- ✅ Sử dụng Node.js 20 và npm cache

### 4. Deploy Manual
```bash
git add .
git commit -m "Update Phú Huy landing page"
git push origin main
```

### 5. Workflow Features
- **Permissions:** Tự động cấu hình pages permissions
- **Concurrency:** Tránh conflict khi deploy đồng thời
- **Artifact Upload:** Upload build files an toàn
- **Environment:** Deploy với GitHub Pages environment

## 📁 Cấu Trúc Dự Án

```
phuhuy-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── ui/           # Shadcn/ui components
│       ├── AboutSection.tsx
│       ├── ContactSection.tsx
│       ├── ExperienceSection.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── Navigation.tsx
│       └── ServicesSection.tsx
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.ts
└── package.json
```

## 🎨 Customization

### Thay đổi màu sắc
Cập nhật CSS variables trong `src/app/globals.css`:
```css
.text-gradient {
  @apply bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent;
}
```

### Thay đổi nội dung
Cập nhật nội dung trong các component tương ứng:
- `HeroSection.tsx` - Thông tin cá nhân
- `AboutSection.tsx` - Kỹ năng và chuyên môn
- `ExperienceSection.tsx` - Kinh nghiệm làm việc
- `ServicesSection.tsx` - Dịch vụ cung cấp
- `ContactSection.tsx` - Thông tin liên hệ

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build cho production
- `npm run start` - Chạy production server
- `npm run lint` - Kiểm tra ESLint

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 👨‍💻 Tác Giả

**Phú Huy**
- Facebook: [Phú Huy Nguyễn](https://www.facebook.com/phuhuy.nguyen.3979)
- Chuyên môn: Content Creator & Video Editor
- Kinh nghiệm: 5+ năm trong lĩnh vực video editing và content creation

---

💝 **Cảm ơn bạn đã quan tâm đến dự án!**

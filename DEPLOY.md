# 🚀 Hướng Dẫn Deploy Phú Huy Landing Page

## 📋 Thông Tin Repository
- **Repository:** https://github.com/Hieubkav/phuhuy_landingpage
- **Live URL:** https://hieubkav.github.io/phuhuy_landingpage/
- **Branch chính:** main/master

## 🔧 Cấu Hình Đã Hoàn Thành

### ✅ Next.js Config
- Static export enabled
- Base path: `/phuhuy_landingpage`
- Asset prefix configured
- Images unoptimized for static hosting

### ✅ GitHub Actions Workflow
- Auto deploy on push to main/master
- Node.js 20 với npm cache
- Build và upload artifacts
- Deploy với GitHub Pages environment
- Permissions tự động cấu hình

### ✅ SEO & Static Files
- Sitemap.xml updated với URLs mới
- Robots.txt configured
- .nojekyll file để tránh Jekyll processing
- Favicon và metadata hoàn chỉnh

## 🚀 Các Bước Deploy

### 1. Push Code Lên Repository
```bash
# Clone repository (nếu chưa có)
git clone https://github.com/Hieubkav/phuhuy_landingpage.git
cd phuhuy_landingpage

# Copy files từ phuhuy-portfolio folder
cp -r phuhuy-portfolio/* .

# Add và commit
git add .
git commit -m "Deploy Phú Huy landing page"
git push origin main
```

### 2. Cấu Hình GitHub Pages
1. Vào repository: https://github.com/Hieubkav/phuhuy_landingpage
2. Settings > Pages
3. Source: **GitHub Actions**
4. Workflow sẽ tự động chạy

### 3. Kiểm Tra Deploy
- Workflow status: Actions tab
- Live website: https://hieubkav.github.io/phuhuy_landingpage/
- Build logs trong Actions

## 🔍 Troubleshooting

### Nếu Build Fail:
1. Kiểm tra Node.js version (cần 18+)
2. Xem logs trong Actions tab
3. Đảm bảo package.json có đúng scripts

### Nếu CSS Không Load:
1. Kiểm tra basePath trong next.config.ts
2. Đảm bảo assetPrefix đúng
3. Clear browser cache

### Nếu 404 Error:
1. Kiểm tra .nojekyll file có trong public/
2. Đảm bảo trailingSlash: true
3. Kiểm tra GitHub Pages settings

## 📱 Test Local Trước Khi Deploy
```bash
# Install dependencies
npm install

# Test development
npm run dev

# Test production build
npm run build
npm run start
```

## 🎯 URLs Quan Trọng
- **Development:** http://localhost:3000
- **Production:** https://hieubkav.github.io/phuhuy_landingpage/
- **Repository:** https://github.com/Hieubkav/phuhuy_landingpage
- **Actions:** https://github.com/Hieubkav/phuhuy_landingpage/actions

## 📞 Liên Hệ
- **Facebook:** https://www.facebook.com/phuhuy.nguyen.3979
- **STK:** 0359595173 (MB Bank)

---
✨ **Website sẵn sàng để deploy!** 🚀

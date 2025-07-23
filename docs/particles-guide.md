# Hướng dẫn sử dụng Floating Particles

## Tổng quan
Hệ thống Floating Particles tạo hiệu ứng nền với các hạt bay lơ lửng màu đỏ/trắng, tạo cảm giác không gian sâu cho website.

## Components

### 1. ParticleBackground
Component chính để tạo nền particles cho toàn website.

```tsx
<ParticleBackground 
  intensity="medium"        // 'low' | 'medium' | 'high'
  theme="red-white"        // 'red-white' | 'blue-white' | 'custom'
  showConnections={true}   // Hiển thị đường kết nối giữa các hạt
  customColors={['#ff0000', '#ffffff']} // Màu tùy chỉnh (khi theme='custom')
/>
```

### 2. ParticleSection
Component để tạo hiệu ứng particles cho từng section riêng biệt.

```tsx
<ParticleSection 
  particleIntensity="medium"  // 'none' | 'low' | 'medium' | 'high'
  className="min-h-screen"
>
  <div>Nội dung section</div>
</ParticleSection>
```

### 3. useParticles Hook
Hook tùy chỉnh để quản lý particles với cấu hình linh hoạt.

```tsx
const { initializeParticles, startAnimation, stopAnimation } = useParticles({
  colors: ['#ff4444', '#ffffff'],
  speed: 0.5,
  size: { min: 1, max: 4 },
  opacity: { min: 0.2, max: 1 },
  connectionDistance: 120,
  connectionOpacity: 0.15
});
```

## Cấu hình Intensity

### Low
- Tốc độ: 0.3
- Kích thước: 0.5-2px
- Độ mờ: 0.1-0.6
- Khoảng cách kết nối: 80px

### Medium (Mặc định)
- Tốc độ: 0.5
- Kích thước: 1-4px
- Độ mờ: 0.2-1.0
- Khoảng cách kết nối: 120px

### High
- Tốc độ: 0.8
- Kích thước: 1.5-5px
- Độ mờ: 0.3-1.0
- Khoảng cách kết nối: 150px

## Themes

### red-white (Mặc định)
Màu đỏ và trắng với các biến thể:
- Đỏ: #ff4444, #ff6666, #ff8888, #ffaaaa
- Trắng: #ffffff, #f0f0f0, #e0e0e0, #d0d0d0

### blue-white
Màu xanh và trắng:
- Xanh: #4444ff, #6666ff, #8888ff, #aaaaff
- Trắng: #ffffff, #f0f0f0, #e0e0e0, #d0d0d0

### custom
Sử dụng màu tùy chỉnh thông qua prop `customColors`

## Tối ưu Performance

1. **Canvas Optimization**: Sử dụng `will-change` và `backface-visibility`
2. **Particle Lifecycle**: Tự động thay thế particles khi hết vòng đời
3. **Connection Culling**: Chỉ vẽ kết nối trong phạm vi cho phép
4. **Responsive**: Tự động điều chỉnh số lượng particles theo kích thước màn hình

## Cách sử dụng

1. **Toàn website**: Đã được tích hợp trong `layout.tsx`
2. **Section riêng**: Sử dụng `ParticleSection` component
3. **Tùy chỉnh**: Sử dụng `useParticles` hook để tạo hiệu ứng riêng

## Lưu ý
- Particles được vẽ với `z-index: 0` và `pointer-events: none`
- Nội dung chính có `z-index: 10` để hiển thị trên particles
- Hiệu ứng tự động dừng khi component unmount để tránh memory leak

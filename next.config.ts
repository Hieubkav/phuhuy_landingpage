import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/phuhuy-portfolio/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/phuhuy-portfolio' : '',
};

export default nextConfig;

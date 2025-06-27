const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'http', // для теста
        hostname: 'localhost',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
  experimental: {
    serverActions: {},
  },
  output: 'standalone',
  webpack(config: any) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // Ensure trailing slashes are handled correctly for image paths
  trailingSlash: false,
};

export default nextConfig;

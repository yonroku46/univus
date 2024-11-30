/** @type {import('next').NextConfig} */
console.info('  - Environments:', process.env.NEXT_PUBLIC_ACTIVE);

const nextConfig = {
  trailingSlash: false,
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: `${process.env.NEXT_PUBLIC_S3_PREFIX}`,
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: `${process.env.NEXT_PUBLIC_API_ROOT}/:path*`,
        destination: `${process.env.NEXT_PUBLIC_APP_ADDRESS}:${process.env.NEXT_PUBLIC_API_PORT}${process.env.NEXT_PUBLIC_API_ROOT}/:path*`
      },
    ];
  },
};

export default nextConfig;
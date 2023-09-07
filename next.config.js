/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["k.kakaocdn.net", "s3.ap-northeast-2.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "k.kakaocdn.net",
      },
    ],
  },
};
module.exports = nextConfig;

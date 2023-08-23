/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: `${process.env.NEXT_PUBLIC_URL}`,
	reactStrictMode: true,
  	images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "k.kakaocdn.net",
      },
    ],
  },
}
module.exports = nextConfig

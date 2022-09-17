/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
  // define api side env variables
  serverRuntimeConfig: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
}

module.exports = nextConfig

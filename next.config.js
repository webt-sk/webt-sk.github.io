const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  assetPrefix: isProd ? "https://webt.sk" : "",
};

module.exports = nextConfig;

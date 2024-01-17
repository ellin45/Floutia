/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  ...nextConfig,
  images: {
    domains: ['i1.sndcdn.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const Dotenv = require('dotenv-webpack');
      config.plugins.push(new Dotenv());
    }

    return config;
  },

  env: {
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    NEXT_PUBLIC_CLIENT_SECRET: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    BASE_URL: isProduction
      ? 'https://floutia.vercel.app'
      : 'https://localhost:3000',
  },
};

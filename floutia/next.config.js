/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require('path');

module.exports = {
  ...nextConfig,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, {isServer}) => {
    if (!isServer) {
      const Dotenv = require("dotenv-webpack");
      config.plugins.push(new Dotenv());
    }

    return config;
  },

  env: {
    NEXT_PUBLIC_CLIENT_ID: process.env.NEXT_PUBLIC_CLIENT_ID,
    BASE_URL: process.env.BASE_URL,
  },
};

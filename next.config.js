require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  // Diğer yapılandırmalar...
  env: {
    API_URL: process.env.API_URL,
    FOTO_URL:process.env.FOTO_URL,
  },
};

module.exports = nextConfig;

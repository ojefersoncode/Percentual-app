const path = require('path');  // Adicione esta linha no topo do seu next.config.js

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname), // ou onde está sua pasta "src"
      '@components': path.resolve(__dirname, 'components'),
      '@utils': path.resolve(__dirname, 'utils')
    };
    return config;
  }
};

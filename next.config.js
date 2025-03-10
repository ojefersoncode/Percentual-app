const path = require('path');

module.exports = {
  rewrites: async () => {
    return [
      {
        source: '/auth',
        destination: '/auth/signin'
      }
    ];
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@components': path.resolve(__dirname, 'components'),
      '@utils': path.resolve(__dirname, 'utils'),
    };
    return config;
  },
};

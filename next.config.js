const path = require('path');

module.exports = {
  webpack: (config) => {
    // Configuração de alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@components': path.resolve(__dirname, 'components'),
      '@utils': path.resolve(__dirname, 'utils'),
    };

    return config;
  },

  rewrites: async () => {
    return [
      {
        source: '/auth',
        destination: '/auth/signin',
      },
    ];
  },
};

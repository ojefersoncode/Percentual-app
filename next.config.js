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
  experimental: {
    turboMode: true, // Habilita o Turbopack
  },
  webpack(config) {
    // Se o Turbopack estiver ativo, não precisamos configurar o Webpack manualmente
    if (process.env.NEXT_PUBLIC_TURBOPACK === 'true') {
      // Remover ou ajustar configurações de Webpack conflitantes
      return config;
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@components': path.resolve(__dirname, 'components'),
      '@utils': path.resolve(__dirname, 'utils'),
    };
    return config;
  },
};

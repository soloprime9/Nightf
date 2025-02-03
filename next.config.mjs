module.exports = {
  experimental: {
    externalDir: true, // Keep this if necessary
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['next/babel'],
      },
    });
    return config;
  },
};

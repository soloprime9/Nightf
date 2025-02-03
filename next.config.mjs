export default {
  webpack(config) {
    config.module.rules.push({
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', 'next/babel'],
      },
      exclude: /node_modules/,
    });
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
    return config;
  },
};

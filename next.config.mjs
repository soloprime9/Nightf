export default {
  webpack(config) {
    // Ensure babel-loader is included for transpiling JS files
    config.module.rules.push({
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', 'next/babel'],
      },
    });
    return config;
  },
};

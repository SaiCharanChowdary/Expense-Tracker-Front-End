const webpack = require('webpack');
module.exports = {
  webpack: (config, { isServer }) => {
    // Add fallback for 'buffer' module
    if (!isServer) {
      config.resolve.fallback = {
        buffer: require.resolve('buffer'),
        stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      };
    }

    return config;
  },
};
module.exports = {
  webpack: {
    configure: (webpackConfig) => ({
      ...webpackConfig,
      resolve: {
        ...webpackConfig.resolve,
        fallback: {
          ...webpackConfig.resolve.fallback,
          os: require.resolve('os-browserify/browser'),
          fs: require.resolve('browserify-fs'),
          assert: require.resolve('assert'),
          stream: require.resolve('stream-browserify'),
          path: require.resolve('path-browserify'),
        },
      },
    }),
  },
};

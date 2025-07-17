module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find the source-map-loader rule and exclude the problematic package
      const sourceMapLoaderRule = webpackConfig.module.rules.find(rule => rule.oneOf);
      if (sourceMapLoaderRule) {
        sourceMapLoaderRule.oneOf = sourceMapLoaderRule.oneOf.map(rule => {
          if (rule.enforce === 'pre' && rule.use && rule.use.some(u => u.loader === 'source-map-loader')) {
            rule.exclude = [/node_modules\/@mediapipe\/tasks-vision/];
          }
          return rule;
        });
      }

      // Optionally ignore warnings from that module
      if (!webpackConfig.ignoreWarnings) {
        webpackConfig.ignoreWarnings = [];
      }
      webpackConfig.ignoreWarnings.push({
        module: /@mediapipe\/tasks-vision/,
      });

      return webpackConfig;
    },
  },
};
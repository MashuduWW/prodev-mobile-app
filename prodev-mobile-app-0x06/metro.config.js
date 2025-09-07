const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  transformer: {
    ...config.transformer,
    babelTransformerPath: require.resolve("react-native-css-transformer"),
  },
  resolver: {
    ...config.resolver,
    sourceExts: [...config.resolver.sourceExts, "css"],
  },
};

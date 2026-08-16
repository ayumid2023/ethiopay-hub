module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@components': './src/components',
            '@screens': './src/screens',
            '@utils': './src/utils',
            '@services': './src/services',
            '@types': './src/types',
            '@hooks': './src/hooks',
            '@api': './src/api',
            '@store': './src/store',
            '@navigation': './src/navigation'
          }
        }
      ],
      ['module:react-native-dotenv']
    ]
  };
};

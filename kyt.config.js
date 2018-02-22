const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
  reactHotLoader: true,
  debug: false,
  serverURL: 'http://0.0.0.0:3030',
  clientURL: 'http://0.0.0.0:3031',
  modifyWebpackConfig: baseConfig => {
    const appConfig = Object.assign({}, baseConfig)

    // Exclude inline.svg from url-loader
    const fileLoader = appConfig.module.rules.find(
      loader => loader.loader === 'file-loader'
    )
    if (fileLoader) {
      // console.log('fileLoader', fileLoader)
      fileLoader.exclude = /\.svg$/
    }

    appConfig.plugins = appConfig.plugins.map(
      plugin =>
        plugin instanceof webpack.optimize.UglifyJsPlugin
          ? new UglifyJsPlugin({
              uglifyOptions: {
                compress: {
                  ie8: false,
                  warnings: false,
                },
                output: {
                  comments: false,
                },
              },
              sourceMap: true,
            })
          : plugin
    )
    // Create a new loader to handle .svg files and pass the same options
    // as used for BabelLoader
    const svgRules = {
      test: /\.svg$/,
      use: [
        {
          loader: 'react-svg-loader',
          query: {
            es5: false,
            svgo: {
              pretty: true,
              plugins: [{ removeStyleElement: true }],
            },
          },
        },
      ],
    }
    appConfig.module.rules.unshift(svgRules)
    return appConfig
  },
  modifyJestConfig: config => {
    config.collectCoverageFrom = [
      '**/*.{js,jsx}',
      '!**/.storybook/**',
      '!**/flowtyped/**',
      '!**/*.story.js',
      '!**/node_modules/**',
    ]
    config.setupFiles.push(path.resolve(__dirname, 'src', 'lib', 'jest-setup'))
    return config
  },
}

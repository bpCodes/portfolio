const path = require('path')

module.exports = {
  root: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../', 'build'),
  entryPath: path.resolve(__dirname, '../', 'src/index.jsx'),
  templatePath: path.resolve(__dirname, '../', 'src/template.html'),
  imagesFolder: 'images',
  favicon: 'images/favicons/',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',

  workboxConfig: {
    swDest: '../sw.js',
    precacheManifestFilename: 'js/precache-manifest.[manifestHash].js',
    importScripts: ['/build/workbox-catch-handler.js'],
    exclude: [
      /\.(png|jpe?g|gif|svg|webp)$/i,
      /\.map$/,
      /^manifest.*\\.js(?:on)?$/,
    ],
    globDirectory: './web/',
    globPatterns: ['offline.html', 'offline.svg'],
    offlineGoogleAnalytics: true,
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 20,
          },
        },
      },
    ],
  },
  createSymlinkConfig: [
    {
      origin: 'imgages/favicons/favicon.ico',
      symlink: '../favicon.ico',
    },
  ],
}

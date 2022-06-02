/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// const withImages = require('next-images');
const withVideos = require('next-videos')
module.exports = withVideos()
// module.exports = nextConfig,withVideos(),withImages({
//   dynamicAssetPrefix: true,
//   fileExtensions: ["jpg", "jpeg", "png", "gif"],
//   webpack(config, options) {
//     return config
//   }
// })


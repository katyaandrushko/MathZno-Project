/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',
}

module.exports = nextConfig

// module.exports = {
//    webpack5: true,
//    webpack: (config) => {
//       config.resolve.fallback = {
//          fs: false,
//       }

//       return config
//    },
// }

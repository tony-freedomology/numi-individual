const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/numi-individual',
  turbopack: {
    root: __dirname,
  },
}
module.exports = nextConfig

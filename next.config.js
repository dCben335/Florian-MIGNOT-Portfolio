/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    output: 'export',
    skipTrailingSlashRedirect: true,
    trailingSlash: false,

    sassOptions: {
        additionalData: `@use "${path.join(__dirname, 'src/app/utils.scss').replace(/\\/g, '/')}" as *;`,
    },
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig;

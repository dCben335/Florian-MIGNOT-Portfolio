/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    output: 'export',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `@import "/src/app/utils.scss";`
    },
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig;

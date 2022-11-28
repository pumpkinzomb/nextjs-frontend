/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
    rewrites: () => {
        return [
            {
                source: '/api/ducks',
                destination: 'https://random-d.uk/api/random',
            },
        ];
    },
};

module.exports = {
    ...nextConfig,
    webpack: (config, options) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src'),
            '@public': path.resolve(__dirname, 'public'),
        };
        return config;
    },
};

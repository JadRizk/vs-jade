const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextTranslate = require('next-translate');

const config = {
    webpack: config => {
        config.module.rules.push({
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
        });

        return config;
    },
};

module.exports = withPlugins([[withBundleAnalyzer], [nextTranslate]], config);

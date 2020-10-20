const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextEnv = require('next-env');
const dotnevLoad = require('dotenv-load');
dotnevLoad();

const withNextEnv = nextEnv();

const config = withNextEnv({
    ...process.env
})();

const nextSettings = {
    exportTrailingSlash: true,
    exportPathMap: function () {
        return {
            '/': { page: '/' },
        };
    }
};

const nextConfig = {
    env: {
        PORT: config.PORT,
        ENV: config.ENV,
        HOST: config.ENV === 'production' ? config.HOST : config.HOST_DEV,
        API: config.ENV === 'production' ? config.API : config.API_DEV,
        PUBLISHABLE_KEY: config.PUBLISHABLE_KEY,
        SESSION_SECRET: config.SESSION_SECRET,
        GMAIL_CLIENT_ID: config.GMAIL_CLIENT_ID,
        GMAIL_CLIENT_SECRET: config.GMAIL_CLIENT_SECRET,
        GMAIL_REDIRECT_URI: config.GMAIL_REDIRECT_URI,
        GMAIL_REFRESH_TOKEN: config.GMAIL_REFRESH_TOKEN,
        GMAIL_ACCESS_TOKEN: config.GMAIL_ACCESS_TOKEN,
    }
}

module.exports = withPlugins([[withSass(), withImages()]], nextConfig);
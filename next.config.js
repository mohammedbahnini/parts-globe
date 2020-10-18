const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextSettings = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
        };
    } 
};

const nextConfig = {
    env : {
        api : 'http://localhost:8000/api',
        PUBLISHABLE_KEY : 'pk_test_51GuNlgK7kyPZtMq547rhppQ0KeiOs6o49MZkaLaRTT6zZOuhNfp4BSJHEVJDTeJAGzIfgCiCtOtvfXWc1R1V2HDx00Oixzal9g' , 
        PORT : 3000
    }
}
module.exports = withPlugins([[withSass(), withImages()]],nextConfig);

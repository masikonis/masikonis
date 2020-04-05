const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
        handleImages: ['jpeg', 'webp']
    }]
], {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' }
        };
    }
});

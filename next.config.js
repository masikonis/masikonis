const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages]
], {
    trailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' }
        };
    },
    future: {
		webpack5: true,
	}
});

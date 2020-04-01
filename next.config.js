const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    
});

module.exports = {
    exportTrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' }
        };
    }
};

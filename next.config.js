module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	exportPathMap: function () {
		return {
			'/': { page: '/' }
		};
	},
	webpack5: true,
	swcMinify: true,
	images: {
		domains: ['images.credential.net'],
	},
};

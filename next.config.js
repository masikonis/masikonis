module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	exportPathMap: function () {
		return {
			'/': { page: '/' }
		};
	},
	swcMinify: true,
	images: {
		domains: ['images.credential.net'],
	},
	async redirects() {
		return [
			{
				source: '/about/',
				destination: '/experience/',
				permanent: true,
			}
		];
	}
};

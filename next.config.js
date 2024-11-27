module.exports = {
	reactStrictMode: true,
	trailingSlash: true,
	exportPathMap: function () {
		return {
			'/': { page: '/' }
		};
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.credential.net',
				pathname: '**',
			}
		],
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

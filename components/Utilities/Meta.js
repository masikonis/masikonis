import Head from 'next/head';
import appleTouchImg from '/public/images/apple-touch-icon.png';
import coverImg from '/public/images/cover.jpg';

const Meta = (props) => {
	const appleImage = 'https://masikonis.lt' + appleTouchImg.src;
	const ogImage = 'https://masikonis.lt' + coverImg.src;

	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="google-site-verification" content="MTux0sPksKjLtlBGwv9A8_0WLSEYDTeGX8zTxRGooB0" />
			<link rel="shortcut icon" href="/images/favicon.ico" />
			<link rel="apple-touch-icon" sizes="180x180" href={appleImage} />
			<meta property="og:image" content={ogImage} />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://cdnjs.cloudflare.com" />
			<link rel="preconnect" href="https://driftt.imgix.net" />
			<link rel="preconnect" href="https://i.vimeocdn.com" />
		</Head>
	);
};

export default Meta;

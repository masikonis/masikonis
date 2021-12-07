import Head from 'next/head';
import appleTouchImg from '/public/images/apple-touch-icon.png';
import coverImg from '/public/images/cover.png';

const Meta = () => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		<meta name="theme-color" content="#ffffff" />
		<meta name="google-site-verification" content="MTux0sPksKjLtlBGwv9A8_0WLSEYDTeGX8zTxRGooB0" />
		<link rel="shortcut icon" href="/images/favicon.ico" />
		<link rel="apple-touch-icon" sizes="180x180" href={appleTouchImg.src} />
		<meta property="og:image" content={coverImg.src} />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://cdnjs.cloudflare.com" />
		<link rel="preconnect" href="https://driftt.imgix.net" />
		<link rel="preconnect" href="https://i.vimeocdn.com" />
	</Head>
);

export default Meta;

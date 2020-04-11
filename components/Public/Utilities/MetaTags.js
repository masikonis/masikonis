import Head from 'next/head';

const MetaTags = () => (
    <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta key="robots" name="robots" content="noindex,nofollow" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://driftt.imgix.net" />
    </Head>
);

export default MetaTags;

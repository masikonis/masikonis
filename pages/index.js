import { useState, useEffect } from 'react';
import Head from 'next/head';
import GTM from 'components/Utilities/GTM';
import Fonts from 'components/Utilities/Fonts';
import Drift from 'components/Utilities/Drift';
import Meta from 'components/Utilities/Meta';
import Welcome from 'components/Blocks/Welcome/Welcome';

const Index = (props) => {
	useEffect(() => {
		GTM();
		Fonts();
		Drift();
	});

	return (
		<div id="IndexPage">
			<Head>
				<title>Full-Stack Web Developer – Nerijus Masikonis</title>
				<meta name="description" content="I'm your go-to developer for everything web-related. As a conversion optimization enthusiast, I improve websites to sell better."></meta>
			</Head>
			<Meta />
			<Welcome />
		</div>
	);
};

export default Index;
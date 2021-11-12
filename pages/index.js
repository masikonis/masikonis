import { useState, useEffect } from 'react';
import Head from 'next/head';
import GTM from 'components/Utilities/GTM';
import Fonts from 'components/Utilities/Fonts';
import Drift from 'components/Utilities/Drift';
import Meta from 'components/Utilities/Meta';

const Index = (props) => {
	useEffect(() => {
		GTM();
		Fonts();
		Drift();
	});

	return (
		<div className="index">
			<Head>
				<title>Full-Stack Web Developer – Nerijus Masikonis</title>
				<meta name="description" content="I'm your go-to developer for everything web-related. As a conversion optimization enthusiast, I improve websites to sell better."></meta>
			</Head>
			<Meta />
			<div className="index bg-sky-700 text-white">
				<div className="container">
					#index
				</div>
			</div>
		</div>
	);
};

export default Index;
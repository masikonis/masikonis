import { useState, useEffect } from 'react';
import Head from 'next/head';
import GTM from 'components/Utilities/GTM';
import Fonts from 'components/Utilities/Fonts';
import Drift from 'components/Utilities/Drift';
import Meta from 'components/Utilities/Meta';
import Header from 'components/Blocks/Header/Header';
import About from 'components/Blocks/About/About';
import Codeable from 'components/Blocks/Codeable/Codeable';
import Footer from 'components/BLocks/Footer/Footer';

const Experience = (props) => {
	useEffect(() => {
		GTM();
		Fonts();
		Drift();
	});

	return (
		<div id="IndexPage">
			<Head>
				<title>My Work Experience – Nerijus Masikonis</title>
				<meta name="description" content="I'm your go-to developer for everything web-related. As a conversion optimization enthusiast, I improve websites to sell better."></meta>
			</Head>
			<Meta />
			<Header />
			<About />
			<Codeable />
			<Footer />
		</div>
	);
};

export default Experience;
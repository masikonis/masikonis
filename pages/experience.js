import { useState, useEffect } from 'react';
import Head from 'next/head';
import GTM from 'components/Utilities/GTM';
import Fonts from 'components/Utilities/Fonts';
import Drift from 'components/Utilities/Drift';
import Meta from 'components/Utilities/Meta';
import Header from 'components/Blocks/Header/Header';
import About from 'components/Blocks/About/About';
import Testimonials from 'components/Blocks/Testimonials/Testimonials';
import Codeable from 'components/Blocks/Codeable/Codeable';
import Footer from 'components/Blocks/Footer/Footer';

const Experience = (props) => {
	useEffect(() => {
		GTM();
		Fonts();
		Drift();
	});

	return (
		<div id="IndexPage">
			<Head>
				<title>About Me – Nerijus Masikonis</title>
				<meta name="description" content="I created my first website in 2004 and I’ve continued to create even more complex ones as my education and skill set grew."></meta>
			</Head>
			<Meta />
			<Header />
			<About />
			<Codeable />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default Experience;
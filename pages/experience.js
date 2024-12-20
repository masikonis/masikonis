import { useState, useEffect } from 'react';
import Head from 'next/head';
import GTM from 'components/Utilities/GTM';
import Fonts from 'components/Utilities/Fonts';
import Drift from 'components/Utilities/Drift';
import Meta from 'components/Utilities/Meta';
import Header from 'components/Blocks/Header/Header';
import About from 'components/Blocks/About/About';
import Testimonials from 'components/Blocks/Testimonials/Testimonials';
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
				<meta name="description" content="Experienced full-stack web developer blending web development, digital marketing, and AI to help companies thrive since 2010."></meta>
			</Head>
			<Meta />
			<Header />
			<About />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default Experience;
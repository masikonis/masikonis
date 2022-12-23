import { useState, useEffect } from 'react';
import Head from 'next/head';
import GTM from 'components/Utilities/GTM';
import Fonts from 'components/Utilities/Fonts';
import Drift from 'components/Utilities/Drift';
import Meta from 'components/Utilities/Meta';
import Header from 'components/Blocks/Header/Header';
import Welcome from 'components/Blocks/Welcome/Welcome';
import Testimonials from 'components/Blocks/Testimonials/Testimonials';
import Codeable from 'components/Blocks/Codeable/Codeable';
import Footer from 'components/Blocks/Footer/Footer';

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
				<meta name="description" content="I'm Your Go-To Developer for Everything Web-Related. I helped build America’s #1 education startup and now advise early-stage founders."></meta>
			</Head>
			<Meta />
			<Header />
			<Welcome />
			<Testimonials />
			<Codeable />
			<Footer />
		</div>
	);
};

export default Index;
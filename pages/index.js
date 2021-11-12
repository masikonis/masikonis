import { useState, useEffect } from 'react';
import Head from 'next/head';
import GTM from 'components/Utilities/GTM';
import Fonts from 'components/Utilities/Fonts';
import Drift from 'components/Utilities/Drift';
import MetaTags from 'components/Utilities/Meta';

const Index = (props) => {
	useEffect(() => {
		GTM();
		Fonts();
		Drift();
	});

	return (
		<div className="indext bg-blue-500 text-white">
			#index
		</div>
	);
};

export default Index;
import { useEffect } from 'react';

const Welcome = (props) => {
	useEffect(() => {

	});

	return (
		<section id="WelcomeBlock" className="bg-sky-700 pt-5 pb-9 text-white">
			<div className="container">
				<h1 className="font-serif text-4xl">I'm Your Go-To Developer for<br />Everything Web-Related</h1>
				<h2 className="mt-2 font-sans text-lg">As a conversion optimization enthusiast, I improve websites to sell better.</h2>
				<a href="#" className="inline-block bg-white p-5 mt-4 rounded text-sky-700 text-center font-bold uppercase">Start a Consultation</a>
			</div>
		</section>
	);
};

export default Welcome;

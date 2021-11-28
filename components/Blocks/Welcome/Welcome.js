import { useEffect } from 'react';
import Link from 'next/link';

const Welcome = (props) => {
	useEffect(() => {

	});

	return (
		<section id="WelcomeBlock" className="bg-sky-700 pt-6 pb-9 text-white">
			<div className="container">
				<div className="flex">
					<div className="flex-1">
						<Link href="/">
							<a>
								<img src={require('./images/logo-small.svg').default.src} width="98" height="65" alt="logo" loading="lazy" />
							</a>
						</Link>
					</div>
					<div className="flex-1 text-right">
						<a href="#" className="inline-block mt-2 bg-transparent p-3 border-2 border-white rounded font-sans font-bold uppercase text-xs" rel="noopener noreferrer">Schedule 1:1</a>
					</div>
				</div>
				<div className="hidden">
					<img src={require('./images/illustration.svg').default.src} className="block" alt="illustration" loading="lazy" />
				</div>
				<h1 className="mt-8 font-serif text-4xl">I'm Your Go-To Developer for<br />Everything Web-Related</h1>
				<h2 className="mt-2 font-sans text-lg">As a conversion optimization enthusiast, I improve websites to sell better.</h2>
				<a href="#" className="inline-block bg-white p-5 mt-4 rounded text-sky-700 text-center font-sans font-bold uppercase">Learn More About Me</a>
			</div>
		</section>
	);
};

export default Welcome;

import Image from 'next/image';
import illustration from './images/illustration.svg';

const Welcome = (props) => {
	return (
		<section id="WelcomeBlock" className="bg-sky-700 pt-1 pb-9 text-white">
			<div className="container">
				<div className="relative md:pt-20 md:pb-5">
					<div className="hidden md:block absolute top-0 right-0 opacity-25">
						<Image src={illustration} width={415} height={313.96} alt="illustration" />
					</div>
					<h1 className="mt-6 font-serif text-4xl md:text-5xl max-w-2xl">I'm Your Go-To Developer for Everything Web-Related</h1>
					<h2 className="mt-2 font-sans text-lg md:text-xl">As a conversion optimization enthusiast, I improve websites to sell better.</h2>
					<a href="#" className="inline-block bg-white p-5 mt-4 rounded text-sky-700 text-center font-sans font-bold uppercase">Work Experience</a>
					<div className="block mt-5 opacity-25 md:hidden">
						<Image src={illustration} layout="responsive" alt="illustration" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;

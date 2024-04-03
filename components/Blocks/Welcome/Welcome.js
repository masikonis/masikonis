import Image from 'next/legacy/image';
import Link from 'next/link';
import illustration from './images/illustration.svg';

const Welcome = (props) => {
	return (
		<section id="WelcomeBlock" className="bg-sky-700 pt-1 pb-9 xl:pb-11 text-white">
			<div className="container">
				<div className="relative md:pt-20 md:pb-5 xl:pb-6">
					<div className="hidden md:block xl:hidden absolute top-0 right-0 opacity-25">
						<Image src={illustration} width={415} height={313.96} alt="illustration" />
					</div>
					<div className="hidden xl:block absolute top-0 right-0 opacity-25">
						<Image src={illustration} width={475} height={358.25} alt="illustration" />
					</div>
					<h1 className="mt-2 font-serif text-3xl md:text-5xl xl:text-6xl max-w-2xl xl:max-w-4xl">
						I'm a T-Shaped Web Developer Adept at Marketing and AI
					</h1>
					<h2 className="mt-3 font-sans text-lg md:text-xl xl:text-xl">
						I helped build America’s #1 education startup, and I'm keen to add value to your team.
					</h2>
					<Link href="/experience" className="inline-block bg-white hover:bg-transparent p-5 mt-6 rounded text-sky-700 hover:text-white border-2 border-white text-center text-sm xl:text-base font-sans font-bold uppercase">
						Learn more about me
					</Link>
					<div className="block mt-6 opacity-25 md:hidden">
						<Image src={illustration} layout="responsive" alt="illustration" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Welcome;

import Link from 'next/link';
import Image from 'next/image';
import logoSmall from './images/logo-small.svg';
import logoBig from './images/logo-big.svg';

const Header = (props) => {
	return (
		<section id="WelcomeBlock" className="bg-sky-700 pt-6 pb-4 xl:pt-8">
			<div className="container">
				<div className="flex">
					<div className="flex-1">
						<div className="md:hidden">
							<Link href="/">
								<Image src={logoSmall} width={98} height={65} alt="logo" priority />
							</Link>
						</div>
						<div className="hidden md:block">
							<Link href="/">
								<Image src={logoBig} width={385} height={65} alt="logo" priority />
							</Link>
						</div>
					</div>
					<div className="flex-1 text-right">
						<a href="https://www.linkedin.com/in/nerijusmasikonis/" className="inline-block mt-2 bg-transparent hover:bg-white p-3 border-2 border-white rounded font-sans font-bold uppercase text-xs md:text-sm xl:text-base text-white hover:text-sky-700" target="_blank" rel="noopener noreferrer">
							Let's Connect
						</a>
					</div>
				</div>
			</div>
		</section >
	);
};

export default Header;

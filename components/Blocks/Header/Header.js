import Link from 'next/link';
import Image from 'next/image';
import logoSmall from './images/logo-small.svg';

const Header = (props) => {
	return (
		<section id="WelcomeBlock" className="bg-sky-700 pt-6">
			<div className="container">
				<div className="flex">
					<div className="flex-1">
						<Link href="/">
							<a>
								<Image src={logoSmall} width={98} height={65} alt="logo" priority />
							</a>
						</Link>
					</div>
					<div className="flex-1 text-right">
						<a href="https://app.codeable.io/tasks/new?ref=0yTeE&preferredContractor=35672" className="inline-block mt-2 bg-transparent p-3 border-2 border-white rounded font-sans font-bold uppercase text-xs text-white" target="_blank" rel="noopener noreferrer">Hire Me</a>
					</div>
				</div>
			</div>
		</section >
	);
};

export default Header;
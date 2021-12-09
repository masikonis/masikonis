import Image from 'next/image';
import pieIcon from './images/pie-icon.svg';

const Codeable = (props) => {
	return (
		<section id="CodeableBlock" className="bg-white py-8">
			<div className="container">
				<h2 className="font-serif text-gray-800 text-xl md:text-2xl xl:text-3xl text-center">Hire Me on Codeable</h2>
				<p className="mt-4 font-sans text-gray-800 text-base xl:text-lg text-center">Need help defining your project? Have a clear idea of what you need done? Let’s have a chat.</p>
				<div className="md:flex md:mt-7 xl:max-w-5xl xl:mx-auto">
					<div className="md:flex-1 md:flex md:items-center md:justify-center">
						<div className="mt-6 md:mt-0 text-center">
							<a href="https://app.codeable.io/tasks/new?ref=0yTeE&preferredContractor=35672" target="_blank" rel="noopener noreferrer">
								<Image src="https://images.credential.net/badge/tiny/okqokrfs_1637682314237_badge.png" width={200} height={200} alt="codeable badge" />
							</a>
						</div>
					</div>
					<div className="md:flex-1">
						<ul className="mt-2">
							<li>
								<h3>
									<span className="mr-2"><Image src={pieIcon} alt="pie small" width={24} height={37} /></span>
									<span className="relative -top-3 font-sans font-semibold text-gray-800 text-sm xl:text-base">Secure escrow system</span>
								</h3>
								<div className="mb-2 font-sans text-gray-800 text-sm xl:text-base">
									Payments released only after a project is marked as complete.
								</div>
							</li>
							<li>
								<h3>
									<span className="mr-2"><Image src={pieIcon} alt="pie small" width={24} height={37} /></span>
									<span className="relative -top-3 font-sans font-semibold text-gray-800 text-sm xl:text-base">Fair refund policy</span>
								</h3>
								<div className="mb-2 font-sans text-gray-800 text-sm xl:text-base">
									Refund options available if you’re not satisfied with the work.
								</div>
							</li>
							<li>
								<h3>
									<span className="mr-2"><Image src={pieIcon} alt="pie small" width={24} height={37} /></span>
									<span className="relative -top-3 font-sans font-semibold text-gray-800 text-sm xl:text-base">28-day warranty to fix issues</span>
								</h3>
								<div className="mb-2 font-sans text-gray-800 text-sm xl:text-base">
									Extensive period to do any post-launch bug fixing.
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 text-center">
					<a href="https://app.codeable.io/tasks/new?ref=0yTeE&preferredContractor=35672" target="_blank" rel="noopener noreferrer" className="inline-block bg-sky-700 hover:bg-white p-4 border-white hover:border-sky-700 border-2 rounded text-white hover:text-sky-700 text-center font-bold uppercase text-base">Post Your Project</a>
				</div>
			</div>
		</section>
	);
};

export default Codeable;
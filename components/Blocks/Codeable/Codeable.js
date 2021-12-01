import Image from 'next/image';
import pieIcon from './images/pie-icon.svg';

const Codeable = (props) => {
	return (
		<section id="CodeableBlock" className="bg-white py-8">
			<div className="container">
				<h2 className="font-serif text-gray-800 text-xl text-center">Hire Me on Codeable</h2>
				<p className="mt-4 font-sans text-gray-800 text-md text-center">Need help defining your project? Have a clear idea of what you need done? Let’s have a chat.</p>
				<div className="mt-6 text-center">
					<a href="https://app.codeable.io/tasks/new?ref=0yTeE&preferredContractor=35672" target="_blank" rel="noopener noreferrer">
						<Image src="https://images.credential.net/badge/tiny/okqokrfs_1637682314237_badge.png" width={200} height={200} alt="codeable badge" />
					</a>
				</div>
				<ul className="mt-2">
					<li>
						<h3>
							<span className="mr-2"><Image src={pieIcon} alt="pie small" width={24} height={37} /></span>
							<span className="relative -top-3 font-sans font-semibold text-gray-800 text-sm">Secure escrow system</span>
						</h3>
						<div className="mb-2 font-sans text-gray-800 text-sm">
							Payments released only after a project is marked as complete.
						</div>
					</li>
					<li>
						<h3>
							<span className="mr-2"><Image src={pieIcon} alt="pie small" width={24} height={37} /></span>
							<span className="relative -top-3 font-sans font-semibold text-gray-800 text-sm">Always-there customer support</span>
						</h3>
						<div className="mb-2 font-sans text-gray-800 text-sm">
							The support team is ready to help you every step of the way.
						</div>
					</li>
					<li>
						<h3>
							<span className="mr-2"><Image src={pieIcon} alt="pie small" width={24} height={37} /></span>
							<span className="relative -top-3 font-sans font-semibold text-gray-800 text-sm">Fair refund policy</span>
						</h3>
						<div className="mb-2 font-sans text-gray-800 text-sm">
							Refund options available if you’re not satisfied with the work.
						</div>
					</li>
					<li>
						<h3>
							<span className="mr-2"><Image src={pieIcon} alt="pie small" width={24} height={37} /></span>
							<span className="relative -top-3 font-sans font-semibold text-gray-800 text-sm">28-day warranty to fix issues</span>
						</h3>
						<div className="mb-2 font-sans text-gray-800 text-sm">
							Extensive period to do any post-launch bug fixing.
						</div>
					</li>
				</ul>
				<div className="mt-8 text-center">
					<a href="https://app.codeable.io/tasks/new?ref=0yTeE&preferredContractor=35672" target="_blank" rel="noopener noreferrer" className="inline-block bg-sky-700 p-5 rounded text-white text-center font-bold uppercase">Start a Project</a>
				</div>
			</div>
		</section>
	);
};

export default Codeable;
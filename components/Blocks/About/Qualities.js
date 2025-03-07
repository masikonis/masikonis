import Image from 'next/image';
import avatarImg from './images/avatar.jpg';
import briefcaseIcon from './images/briefcase-icon.svg';
import gearIcon from './images/gear-icon.svg';
import starIcon from './images/star-icon.svg';
import searchIcon from './images/search-icon.svg';

const Qualities = (props) => {
	return (
		<div className="py-6 xl:py-0 pb-8">
			<div className="text-center">
				<Image src={avatarImg} width={175} height={175} alt="Nerijus Masikonis" className="rounded-full" />
			</div>
			<h3 className="mt-3 font-serif text-white text-xl">
				{"Hi, my name is Nerijus 👋 I’m a"} <strong className="font-bold">{"developer"}</strong> {"who combines hands-on technical skills with marketing and AI experience to help seed-stage U.S. companies grow faster."}
			</h3>
			<ul className="mt-10">
				<li className="box-border pl-20 mb-5 bg-no-repeat" style={{ backgroundImage: `url(${briefcaseIcon.src})` }}>
					<strong className="block mb-1 font-sans text-sm xl:text-base text-white uppercase">Organized</strong>
					<span className="font-sans text-sm xl:text-base text-white">I am highly organized, know how to prioritize, adapt quickly when the scope changes, and thrive in the fast-paced, resource-constrained environments.</span>
				</li>
				<li className="box-border pl-20 mb-5 bg-no-repeat" style={{ backgroundImage: `url(${gearIcon.src})` }}>
					<strong className="block mb-1 font-sans text-sm xl:text-base text-white uppercase">Flexible</strong>
					<span className="font-sans text-sm xl:text-base text-white">I am not married to my ideas and can shift gears easily when things change, excelling in iterative development and lean startup methodologies.</span>
				</li>
				<li className="box-border pl-20 mb-5 bg-no-repeat" style={{ backgroundImage: `url(${starIcon.src})` }}>
					<strong className="block mb-1 font-sans text-sm xl:text-base text-white uppercase">Self-Motivated</strong>
					<span className="font-sans text-sm xl:text-base text-white">I can work independently, I’m a self-starter who prefers mentorship over management, and I bring value from day one without needing heavy oversight.</span>
				</li>
				<li className="box-border pl-20 mb-5 bg-no-repeat" style={{ backgroundImage: `url(${searchIcon.src})` }}>
					<strong className="block mb-1 font-sans text-sm xl:text-base text-white uppercase">Methodical</strong>
					<span className="font-sans text-sm xl:text-base text-white">All choices I make are guided by diligent research, industry standards, and data-driven insights, ensuring measurable impact on growth and user engagement.</span>
				</li>
			</ul>
		</div >
	);
};

export default Qualities;
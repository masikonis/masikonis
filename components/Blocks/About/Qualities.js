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
				My name is Nerijus, I’m a <strong className="font-bold">Full-Stack Web Developer</strong> based in Lithuania, working with clients all over the world.
			</h3>
			<ul className="mt-8">
				<li className="box-border pl-20 mb-5 bg-no-repeat" style={{ backgroundImage: `url(${briefcaseIcon.src})` }}>
					<strong className="block mb-1 font-sans text-sm xl:text-base text-white uppercase">Organised</strong>
					<span className="font-sans text-sm xl:text-base text-white">I am highly organized, know how to prioritize, adapt quickly when the scope changes and thrive in a fast-paced environment with tight deadlines.</span>
				</li>
				<li className="box-border pl-20 mb-5 bg-no-repeat" style={{ backgroundImage: `url(${gearIcon.src})` }}>
					<strong className="block mb-1 font-sans text-sm xl:text-base text-white uppercase">Flexible</strong>
					<span className="font-sans text-sm xl:text-base text-white">I am not married to my ideas and I can shift gears easily when things change.</span>
				</li>
				<li className="box-border pl-20 mb-5 bg-no-repeat" style={{ backgroundImage: `url(${starIcon.src})` }}>
					<strong className="block mb-1 font-sans text-sm xl:text-base text-white uppercase">Self-Motivated</strong>
					<span className="font-sans text-sm xl:text-base text-white">I can work independently, I’m a self-starter and prefer mentorship over management.</span>
				</li>
				<li className="box-border pl-20 mb-5 bg-no-repeat" style={{ backgroundImage: `url(${searchIcon.src})` }}>
					<strong className="block mb-1 font-sans text-sm xl:text-base text-white uppercase">Methodical</strong>
					<span className="font-sans text-sm xl:text-base text-white">All choices I make are based on strict research and adherence to industry standards.</span>
				</li>
			</ul>
		</div >
	);
};

export default Qualities;
import Image from 'next/image';
import avatarImg from './images/avatar.jpg';

const Qualities = (props) => {
	return (
		<div>
			<div>
				<Image src={avatarImg} width={175} height={175} alt="Nerijus Masikonis" />
			</div>
			<h3>
				My name is Nerijus, I’m a <strong>Full-Stack Web Developer</strong> based in Lithuania, Europe, working with clients all over the world.
			</h3>
			<ul>
				<li className="">
					<strong>Collaborative</strong>
					I like being part of a team that is respectful of each other, even in the face of disagreement.
				</li>
				<li className="">
					<strong>Organised</strong>
					I am highly organized, know how to prioritize, adapt quickly when the scope changes and thrive in a fast-paced environment with tight deadlines.
				</li>
				<li className="">
					<strong>Flexible</strong>
					I am not married to my ideas and I can shift gears easily when things change.
				</li>
				<li className="">
					<strong>Self-Motivated</strong>
					I can work independently, I’m a self-starter and prefer mentorship over management.
				</li>
				<li className="">
					<strong>Methodical</strong>
					All choices I make are based on strict research and adherence to industry standards.
				</li>
				<li className="">
					<strong>Thorough</strong>
					I am careful, conscientious and incredibly meticulous. I have an extremely high attention to detail.
				</li>
			</ul>
		</div>
	);
};

export default Qualities;
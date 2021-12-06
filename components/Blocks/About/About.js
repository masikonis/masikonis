import Experience from './Experience';
import Qualities from './Qualities';

const About = (props) => {
	return (
		<section id="AboutBlock">
			<div className="block lg:hidden">
				<div className="">
					<div className="container">
						<Experience />
					</div>
				</div>
				<div className="bg-sky-700">
					<div className="container">
						<Qualities />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
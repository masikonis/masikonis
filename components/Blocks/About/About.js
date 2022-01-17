import Experience from './Experience';
import Qualities from './Qualities';

const About = (props) => {
	return (
		<section id="AboutBlock">
			<div className="block lg:hidden">
				<div className="bg-sky-700">
					<div className="container">
						<Qualities />
					</div>
				</div>
				<div className="bg-gray-100">
					<div className="container">
						<Experience />
					</div>
				</div>
			</div>
			<div className="hidden lg:block bg-sky-700">
				<div className="container">
					<div className="flex">
						<div className="box-border p-8 pt-12 pl-0 w-1/3">
							<Qualities />
						</div>
						<div className="box-border p-8 pl-16 pt-6 bg-gray-100 w-2/3">
							<Experience />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
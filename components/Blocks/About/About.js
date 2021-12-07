import Experience from './Experience';
import Qualities from './Qualities';

const About = (props) => {
	return (
		<section id="AboutBlock">
			<div className="block lg:hidden">
				<div className="bg-gray-100">
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
			<div className="hidden lg:block ___bg-gray-100" style={{
				background: `linear-gradient(to right, #0369A1 0%, #0369A1 35%, #F4F4F5 35%, #F4F4F5 100%)`
			}}>
				<div className="container">
					<div className="flex">
						<div className="box-border p-8 pt-12 pl-0 bg-sky-700">
							<Qualities />
						</div>
						<div className="box-border p-8 pl-16 pt-6">
							<Experience />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
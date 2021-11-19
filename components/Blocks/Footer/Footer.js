import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
	const currentDate = new Date();

	return (
		<footer id="FooterBlocklock" className="bg-white py-4 border-solid border-t border-top-gray-300">
			<div className="container">
				<div className="flex flex-wrap">
					<div className="flex-auto flex items-center">
						<div className="font-sans text-gray-800 text-xs">Copyright &copy; {currentDate.getFullYear()} Nerijus Masikonis</div>
					</div>
					<div className="flex-auto">
						<ul className="flex justify-end">
							<li>
								<a href="https://github.com/masikonis" target="_blank" aria-label="Visit my GitHub profile" rel="noopener noreferrer" className="mr-2 text-lg"><FontAwesomeIcon icon={faGithub} /></a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/nerijusmasikonis" target="_blank" aria-label="Visit my LinkedIn profile" rel="noopener noreferrer" className="text-lg"><FontAwesomeIcon icon={faLinkedin} /></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import { InView } from 'react-intersection-observer';
import Vimeo from '@vimeo/player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonials = (props) => {
	function initVideoPlayer(inView = false, videoId = '') {
		let video = document.getElementById('video' + videoId);

		if (!video.hasAttribute('data-vimeo-initialized') && inView === true) {
			const player = new Vimeo('video' + videoId, {
				id: videoId,
				responsive: true,
				title: false
			});
		}
	}

	const lowQualityThumbEric = require('./images/eric-video-thumb.jpg?lqip');
	const lowQualityThumbJeffrey = require('./images/jeffrey-video-thumb.jpg?lqip');
	const testimonials = [
		{
			'image': 'kim-cruickshanks.jpg',
			'alt': 'Kim Cruickshanks',
			'quote': "There are many developers out there, but very few that are as trustworthy and on top of things as Nerijus. Our agency continues to turn to him for help, and he always delivers. On top of his sharp skill set, he is an absolute pleasure to work with.",
			'name': 'Kim Cruickshanks',
			'company': 'CEO, Fuze Branding',
			'location': 'Los Angeles, USA'
		},
		{
			'image': 'christophe-prudent.jpg',
			'alt': 'Christophe Prudent',
			'quote': "Our agency had the fortune of working with Nerijus for more than 7 years. His development skills and expertise made him an invaluable part of our web development team. We absolutely offer our highest possible recommendation.",
			'name': 'Christophe Prudent',
			'company': 'CEO, Too Pixel',
			'location': 'Geneva, Switzerland'
		},
		{
			'image': 'daniel-meza.jpg',
			'alt': 'Daniel Meza',
			'quote': "Working with Nerijus as an agency has made our process and workflow unbelievable. He is incredibly talented developer but what really makes him stand out is his work ethic and steady approach. I highly recommend Nerijus.",
			'name': 'Daniel Meza',
			'company': 'CEO, Muze Development',
			'location': 'Houston, USA'
		}
	];
	const listItems = testimonials.map((testimonial, key) => {
		return (
			<li key={key} className="block box-border p-5 mb-7 last:mb-0 border-solid border border-gray-300 bg-white text-center">
				<picture>
					<source srcSet={require('./images/' + testimonial.image + '?webp').default.src} type="image/webp" />
					<source srcSet={require('./images/' + testimonial.image).default.src} type="image/jpeg" />
					<img src={require('./images/' + testimonial.image).default.src} alt={testimonial.alt} width="140" height="140" loading="lazy" className="mx-auto rounded-full" />
				</picture>
				<p className="mt-5 font-sans text-gray-800 text-sm"><FontAwesomeIcon icon={faQuoteLeft} className="text-sky-700" /> {testimonial.quote}</p>
				<hr className="border-none block w-1/6 h-0.5 mx-auto my-4 bg-sky-700" />
				<div>
					<div className="font-serif text-gray-800 text-center text-lg">{testimonial.name}</div>
					<div className="font-sans font-bold text-sky-700 text-center text-sm">{testimonial.company}</div>
					<div className="font-sans text-gray-800 text-center text-xs uppercase">{testimonial.location}</div>
				</div>
			</li>
		);
	});

	return (
		<section id="TestimonialsBlock" className="bg-gray-50 py-8">
			<div className="container">
				<h2 className="font-serif text-gray-800 text-xl text-center">What People Say About Me</h2>
				<p className="mt-4 font-sans text-gray-800 text-md text-center">I have been lucky to work with fantastic people over the years. See what some of them have to say.</p>
				<ul className="flex flex-col mt-6">
					<li className="mb-6">
						<div className="bg-cover">
							<div style={{ backgroundImage: `url(${lowQualityThumbEric})` }}>
								<InView as="div" onChange={(inView, entry) => initVideoPlayer(inView, 351382262)}>
									<div id="video351382262"></div>
								</InView>
							</div>
							<div>
								<hr className="border-none block w-1/6 h-0.5 mx-auto my-4 bg-sky-700" />
								<div>
									<div className="font-serif text-gray-800 text-center text-lg">Eric Siu</div>
									<div className="font-sans font-bold text-sky-700 text-center text-sm">CEO, Single Grain</div>
									<div className="font-sans text-gray-800 text-center text-xs uppercase">Los Angeles, USA</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="bg-cover">
							<div style={{ backgroundImage: `url(${lowQualityThumbJeffrey})` }}>
								<InView as="div" onChange={(inView, entry) => initVideoPlayer(inView, 543896594)}>
									<div id="video543896594"></div>
								</InView>
							</div>
							<div>
								<hr className="border-none block w-1/6 h-0.5 mx-auto my-4 bg-sky-700" />
								<div>
									<div className="font-serif text-gray-800 text-center text-lg">Dr. Jeffrey Vinokur</div>
									<div className="font-sans font-bold text-sky-700 text-center text-sm">Founder, Generation Genius</div>
									<div className="font-sans text-gray-800 text-center text-xs uppercase">Los Angeles, USA</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<ul className="mt-10">
					{listItems}
				</ul>
				<div className="mt-8 text-center">
					<a href="https://www.codeable.io/developers/nerijus-masikonis/?ref=0yTeE" target="_blank" rel="noopener noreferrer" className="inline-block bg-sky-700 p-5 rounded text-white text-center font-bold uppercase">More client reviews</a>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;

import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { InView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import placeholderEric from './images/eric-video-thumb.jpg?lqip';
import placeholderJeffrey from './images/jeffrey-video-thumb.jpg?lqip';
import imageKim from './images/kim-cruickshanks.jpg';
import imageChristophe from './images/christophe-prudent.jpg';
import imageDaniel from './images/daniel-meza.jpg';
import imageZach from './images/zach-grove.jpg';

const Testimonials = (props) => {
	const [video1Markup, setVideo1Markup] = useState('');
	const [video2Markup, setVideo2Markup] = useState('');

	function initVideoPlayer(inView = false, videoId = '') {
		if (videoId == '351382262' && video1Markup == '' && inView === true) {
			setVideo1Markup(<div style={playerWrapperStyles}><ReactPlayer url="https://vimeo.com/351382262" width="100%" height="100%" className="absolute top-0 left-0" controls /></div >);
		}

		if (videoId == '934654010' && video2Markup == '' && inView === true) {
			setVideo2Markup(<div style={playerWrapperStyles}><ReactPlayer url="https://vimeo.com/934654010" width="100%" height="100%" className="absolute top-0 left-0" controls /></div >);
		}
	}

	const testimonials = [
		{
			'image': imageKim,
			'alt': 'Kim Cruickshanks',
			'quote': "There are many developers out there, but very few that are as trustworthy and on top of things as Nerijus. Our agency continues to turn to him for help, and he always delivers. On top of his sharp skill set, he is an absolute pleasure to work with.",
			'name': 'Kim Cruickshanks',
			'company': 'CEO, Fuze Branding',
			'location': 'Los Angeles, USA'
		},
		// {
		// 	'image': imageChristophe,
		// 	'alt': 'Christophe Prudent',
		// 	'quote': "Our agency had the fortune of working with Nerijus for more than 7 years. His development skills and expertise made him an invaluable part of our web development team. We absolutely offer our highest possible recommendation.",
		// 	'name': 'Christophe Prudent',
		// 	'company': 'CEO, Too Pixel',
		// 	'location': 'Geneva, Switzerland'
		// },
		{
			'image': imageZach,
			'alt': 'Zach Grove',
			'quote': "What stands out about Nerijus is that he's not only excellent technically; he's a T-shaped developer with a breadth of marketing knowledge who can converse with marketing leadership about decisions that will impact revenue.",
			'name': 'Zach Grove',
			'company': 'VP of Marketing, Nextiva',
			'location': 'Minneapolis, USA'
		},
		{
			'image': imageDaniel,
			'alt': 'Daniel Meza',
			'quote': "Working with Nerijus as an agency has made our process and workflow unbelievable. He is incredibly talented developer but what really makes him stand out is his work ethic and steady approach. I highly recommend Nerijus.",
			'name': 'Daniel Meza',
			'company': 'CEO, Muze Development',
			'location': 'Houston, USA'
		},
	];
	const listItems = testimonials.map((testimonial, key) => {
		return (
			<li key={key} className="block md:flex-1 box-border p-5 md:p-3 md:pb-4 mb-7 md:mb-0 md:mr-3 md:last:mr-0 last:mb-0 xl:p-4 xl:pb-6 border-solid border border-gray-300 bg-white text-center">
				<Image src={testimonial.image} width={140} height={140} alt={testimonial.name} className="mx-auto rounded-full" />
				<p className="mt-5 font-sans text-gray-800 text-sm xl:text-base"><FontAwesomeIcon icon={faQuoteLeft} className="text-sky-700" /> {testimonial.quote}</p>
				<hr className="border-none block w-1/6 h-0.5 mx-auto my-4 bg-sky-700" />
				<div>
					<div className="font-serif text-gray-800 text-center text-lg">{testimonial.name}</div>
					<div className="font-sans font-bold text-sky-700 text-center text-sm xl:text-base">{testimonial.company}</div>
					<div className="font-sans text-gray-800 text-center text-xs xl:text-sm uppercase">{testimonial.location}</div>
				</div>
			</li>
		);
	});
	const playerWrapperStyles = {
		position: 'relative',
		paddingTop: '56.25%'
	};

	return (
		<section id="TestimonialsBlock" className="bg-gray-100 py-9">
			<div className="container">
				<h2 className="font-serif text-gray-800 text-xl md:text-2xl xl:text-3xl text-center">What People Say About Me</h2>
				<p className="mt-4 font-sans text-gray-800 text-base xl:text-lg text-center">I have been lucky to work with fantastic people over the years. See what some of them have to say.</p>
				<ul className="flex flex-col md:flex-row mt-6">
					<li className="border-box mb-6 md:mb-0 md:flex-1 md:pr-10">
						<div className="relative">
							<Image src={placeholderJeffrey} layout="fill" alt="placeholder" />
						</div>
						<div className="relative z-1">
							<InView as="div" onChange={(inView, entry) => initVideoPlayer(inView, 934654010)}>
								{video2Markup}
							</InView>
							<hr className="border-none block w-1/6 h-0.5 mx-auto my-4 bg-sky-700" />
							<div>
								<div className="font-serif text-gray-800 text-center text-lg">Dr. Jeffrey Vinokur</div>
								<div className="font-sans font-bold text-sky-700 text-center text-sm xl:text-base">CEO & Co-Founder, Generation Genius</div>
								<div className="font-sans text-gray-800 text-center text-xs xl:text-sm uppercase">Los Angeles, USA</div>
							</div>
						</div>
					</li>
					<li className="border-box md:flex-1">
						<div className="relative">
							<Image src={placeholderEric} layout="fill" alt="placeholde" />
						</div>
						<div className="relative z-1">
							<InView as="div" onChange={(inView, entry) => initVideoPlayer(inView, 351382262)}>
								{video1Markup}
							</InView>
							<hr className="border-none block w-1/6 h-0.5 mx-auto my-4 bg-sky-700" />
							<div>
								<div className="font-serif text-gray-800 text-center text-lg">Eric Siu</div>
								<div className="font-sans font-bold text-sky-700 text-center text-sm xl:text-base">CEO, Single Grain</div>
								<div className="font-sans text-gray-800 text-center text-xs xl:text-sm uppercase">Los Angeles, USA</div>
							</div>
						</div>
					</li>
				</ul>
				<ul className="mt-10 md:flex mb-4">
					{listItems}
				</ul>
				{/* <div className="mt-8 text-center">
					<a href="https://www.codeable.io/developers/nerijus-masikonis/?ref=0yTeE" target="_blank" rel="noopener noreferrer" className="inline-block bg-sky-700 hover:bg-white p-4 border-white hover:border-sky-700 border-2 rounded text-white hover:text-sky-700 text-center font-bold uppercase text-base">
						Browse Reviews on Codeable
					</a>
				</div> */}
			</div>
		</section>
	);
};

export default Testimonials;

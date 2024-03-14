import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import banner from '../assets/html.jpg';

const Slide = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = [
		{
			heading: 'Md. Sanaullah',
			description: 'I create dynamic full stack web applications with full ownership control and many powerful features using React, MongoDB, Node.js and many more',
			image: banner,
		},
		{
			heading: 'Section N DIU',
			description: 'A university curriculum management website will full authentication, verified users, google drive integration and admin management system for academic use',
			image: 'https://res.cloudinary.com/ssani7/image/upload/v1687107160/potfolio/Projects/section%20n/Picsart_23-06-18_19-21-08-881_zcrjko.jpg',
			link: 'https://section-n-diu.web.app/',
		},
	];

	const nextSlide = () => {
		const next = currentSlide >= slides.length - 1 ? 0 : currentSlide + 1;
		setCurrentSlide(next);
	};

	const previousSlide = () => {
		const next = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
		setCurrentSlide(next);
	};

	useEffect(() => {
		const slideInterval = setInterval(nextSlide, 8000);
		return () => clearInterval(slideInterval);
	}, [currentSlide]);

	return (
		<>
			<motion.div
				className="snap-center"
				initial="hidden"
				animate="animate"
				variants={{
					hidden: { y: -1000 },
					animate: {
						y: 0,
						transition: {
							delayChildren: 1,
							when: 'beforeChildren',
							duration: 1,
						},
					},
				}}>
				<div className="w-full min-h-screen mx-auto relative overflow-x-hidden">
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`absolute w-full h-full right-0 transform transition-all duration-1000 ${index > currentSlide && 'translate-x-full'} ${index < currentSlide && '-translate-x-full'} `}>
							<motion.img
								variants={{
									hidden: {
										opacity: 0,
										transition: {
											duration: 2,
										},
									},
									animate: { opacity: 1 },
								}}
								className="w-full h-full object-cover"
								src={slide.image}
								alt=""
							/>

							<div className="absolute flex transform -translate-y-full left-0 right-0 bg-black w-full h-full bg-opacity-70">
								<motion.div
									initial="hidden"
									animate="animate"
									variants={{
										hidden: {
											x: 100,
											opacity: 0,
										},
										animate: {
											x: 0,
											opacity: 1,
											transition: {
												type: 'spring',
												stiffness: 100,
												delay: 1,
											},
										},
									}}
									className="my-auto ml-10 lg:ml-72 w-1/2">
									{index > 0 && <h1 className="text-2xs lg:mb-10 lg:text-2xl">Latest Project</h1>}
									<h2 className="text-white text-4xl my-6 lg:text-7xl font-bold opacity-100">{slide.heading}</h2>
									<h2 className="text-white text-2xs lg:text-xl font-semibold opacity-100 my-6 lg:my-12">{slide.description}</h2>
									{index > 0 ? (
										<a href={slide.link} target="_blank" className="link normal-case text-white font-bold text-2xs lg:text-xl p-0" rel="noreferrer">
											See Project
										</a>
									) : (
										<a
											href="https://drive.google.com/file/d/12PtFY9TNixXj-_3DA9vFBRCihGJK3xFf/view?usp=sharing"
											target="_blank"
											className="link normal-case text-white font-bold text-2xs lg:text-xl p-0"
											rel="noreferrer">
											My Resume
										</a>
									)}
								</motion.div>
							</div>

							<div className="absolute flex justify-between transform -translate-y-1/2 left-0 lg:left-5 right-0 lg:right-5 top-1/2">
								<button onClick={previousSlide} className="btn btn-ghost text-white h-full lg:w-24 hover:bg-transparent">
									<FontAwesomeIcon icon={faChevronLeft} />
								</button>
								<button onClick={nextSlide} className="btn btn-ghost text-white h-full lg:w-24 hover:bg-transparent">
									<FontAwesomeIcon icon={faChevronRight} />
								</button>
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default Slide;

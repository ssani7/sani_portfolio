import { useState } from 'react';
import tail from '../assets/icons/Tailwind_CSS_Logo.svg.png';
import bootstrap from '../assets/icons/bootstrap-logo.png';
import daisyUi from '../assets/icons/daisyUi.svg';
import { motion } from 'framer-motion';
import '../styles/Animation.css';

const AnimatedSkills = () => {
	const skills = [
		[
			{
				name: 'HTML',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1687032575/potfolio/html_t2yyvm.png',
			},
		],
		[
			{
				name: 'ReactJs',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1687032575/potfolio/React-icon.svg_k80qir.png',
			},
			{
				name: 'Next.JS',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1687032520/potfolio/next-js-icon-512x512-zuauazrk_htfagw.png',
			},
			{
				name: 'Redux',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1687036554/potfolio/redux_tqxe3o.svg',
			},
		],

		[
			{
				name: 'Javascript',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1687032575/potfolio/javascript_yvc2kq.png',
			},
			{
				name: 'Node.js',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1687032575/potfolio/node_kxkkxz.png',
			},
			{
				name: 'Express',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1710432931/potfolio/expressjs.png',
			},
			{
				name: 'MongoDB',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1687032575/potfolio/mongo_pfsmxl.png',
			},
			{
				name: 'Typescript',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1710433799/potfolio/typescript.png',
			},
			{
				name: 'PostgreSQL',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1687033522/potfolio/Postgresql_elephant.svg_x7jy3o.png',
			},
		],
		[
			{
				name: 'Material UI',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1687032519/potfolio/mui_jjgtsm.png',
			},
			{
				name: 'Tailwind CSS',
				image: tail,
			},
			{
				name: 'Bootstrap',
				image: bootstrap,
			},
			{
				name: 'DaisyUI',
				image: daisyUi,
			},
			{
				name: 'Git Hub',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1687032576/potfolio/25231_l7njk3.png',
			},
			{
				name: 'Firebase',
				image: 'https://res.cloudinary.com/ssani7/image/upload/v1687032575/potfolio/firebase_aj8k3h.png',
			},
		],
	];

	const [focus, setFocus] = useState<any>(null);

	return (
		<div className="pb-32 w-full overflow-x-hidden snap-center min-h-screen relative">
			<h1 className="mt-8 mb-28 text-center font-bold text-3xl">Skills</h1>

			{<motion.div initial={{ opacity: 0 }} animate={focus && { opacity: 0.35 }} transition={{ duration: 0.4 }} className="bg-black absolute inset-0 z-[10] h-[100vh]"></motion.div>}

			<div className="relative">
				<motion.div initial={{ x: '-100%' }} animate={focus && { x: 18 }} className="stack absolute left-0 top-[40%] z-10">
					<div className="card shadow-md bg-base-200 text-black">
						<div className="card-body">
							<h2 className="card-title">{focus?.name}</h2>
							<p>You have 3 unread messages. Tap here to see.</p>
						</div>
					</div>
					<div className="card shadow bg-base-300 text-black">
						<div className="card-body">
							<h2 className="card-title">Notification 2</h2>
							<p>You have 3 unread messages. Tap here to see.</p>
						</div>
					</div>
					<div className="card shadow-sm bg-accent text-black">
						<div className="card-body">
							<h2 className="card-title">Notification 3</h2>
							<p>You have 3 unread messages. Tap here to see.</p>
						</div>
					</div>
				</motion.div>

				<div className="relative" style={{ height: '500px' }}>
					<div className="main">
						{skills.map((orbit, orbitIndex) => (
							<div
								key={orbitIndex}
								className={`shadow-lg rounded-full absolute m-auto inset-0 `}
								style={{ height: `${orbitIndex ? orbitIndex * 200 : 64}px`, width: `${orbitIndex ? orbitIndex * 200 : 64}px` }}>
								{orbit.map((skill, skillIndex) => (
									<div
										onMouseEnter={() => setFocus(skill)}
										onMouseLeave={() => setFocus(null)}
										key={skill.name}
										className={`circle${orbitIndex} absolute m-auto inset-0 size-16 ${focus?.name === skill?.name && 'bg-white'} z-20 tooltip cursor-pointer`}
										data-tip={skill.name}
										style={{ animationDelay: `-${skillIndex * 4}s`, animationPlayState: focus ? 'paused' : 'running' }}>
										<div className="">
											<img className="w-16" src={skill.image} alt="" />
										</div>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimatedSkills;

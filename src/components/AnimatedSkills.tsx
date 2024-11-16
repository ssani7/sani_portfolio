import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Animation.css';
import { skills } from '../utils/skills';

const AnimatedSkills = () => {
	const [focus, setFocus] = useState<any>(null);

	const fromRight = {
		hidden: { opacity: 1, x: '100%' },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.75,
			},
		},
	};

	const fromLeft = {
		hidden: { opacity: 1, x: '-100%' },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.75,
			},
		},
	};

	return (
		<div>
			<div className="pb-32 w-full overflow-x-hidden snap-center min-h-screen relative hidden md:block">
				<h1 className="mt-8 mb-28 text-center font-bold text-3xl">Skills</h1>

				{/* backdrop when focused */}
				{<motion.div initial={{ opacity: 0 }} animate={focus && { opacity: 0.35 }} transition={{ duration: 0.4 }} className="bg-black absolute inset-0 z-[10] min-h-[100vh]"></motion.div>}

				<div className="relative flex w-full">
					<motion.div
						variants={fromLeft}
						initial="hidden"
						whileInView="show"
						viewport={{
							once: true,
							amount: 0,
						}}
						className="w-1/3 xl:w-1/2 relative text-base-content">
						<motion.div
							initial={{ x: 0 }}
							animate={focus && { x: '-100%' }}
							transition={{ duration: 0.3 }}
							className="absolute left-0 top-0 bottom-0 h-full w-full flex flex-col justify-center items-center z-[13] size-80">
							<motion.div className="card shadow-md bg-base-200 xl:h-60 w-4/5">
								<div className="card-body">
									<h2 className="card-title">Tech Stack</h2>
									<h2 className="leading-relaxed mt-3">
										Throughout my web development journey, I have walked through and learned many technologies. These are some of my most used programming languages, technolgies and tools
									</h2>
									<p className="font-semibold mt-3">Hover on skills to learn more</p>
								</div>
							</motion.div>
						</motion.div>
						<div className="stack">
							{[1, 2, 3].map((v) => (
								<div key={v} className={`absolute left-0 top-0 bottom-0 h-full w-full flex flex-col justify-center items-center`} style={{ zIndex: `${13 - v}` }}>
									<div className={`card shadow-md bg-base-200 mx-auto xl:h-60 w-3/4`}>
										<div className="card-body">
											<h2 className="card-title">{focus?.name}</h2>
											<p className="leading-relaxed mt-3">{focus?.desc}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					<motion.div
						variants={fromRight}
						initial="hidden"
						whileInView="show"
						viewport={{
							once: true,
							// amount: 'all',
						}}
						className="w-2/3 xl:w-1/2 relative">
						<div className="" style={{ height: '500px', width: '500px' }}>
							<div className="main">
								{skills.map((orbit, orbitIndex) => (
									<div
										key={orbitIndex}
										className={`shadow-lg rounded-full absolute m-auto inset-0`}
										style={{ height: `${orbitIndex ? orbitIndex * 200 : 64}px`, width: `${orbitIndex ? orbitIndex * 200 : 64}px` }}>
										{orbit.map((skill, skillIndex) => (
											<div
												onMouseEnter={() => setFocus(skill)}
												onMouseLeave={() => setFocus(null)}
												key={skill.name}
												className={`circle${orbitIndex} absolute m-auto inset-0 size-16 ${focus?.name === skill?.name && 'bg-base-200'} z-20 tooltip cursor-pointer shadow-xl`}
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
					</motion.div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default AnimatedSkills;

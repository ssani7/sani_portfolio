import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Animation.css';
import { skills } from '../utils/skills';

const AnimatedSkills = () => {
	const [focus, setFocus] = useState<any>(null);

	return (
		<div className="pb-32 w-full overflow-x-hidden snap-center min-h-screen relative">
			<h1 className="mt-8 mb-28 text-center font-bold text-3xl">Skills</h1>

			{<motion.div initial={{ opacity: 0 }} animate={focus && { opacity: 0.35 }} transition={{ duration: 0.4 }} className="bg-black absolute inset-0 z-[10] min-h-[100vh]"></motion.div>}

			<div className="relative">
				<motion.div initial={{ x: '-100%' }} animate={focus && { x: 18 }} className="absolute left-0 top-0 bottom-0 flex flex-col justify-center items-center z-10 w-80">
					<motion.div className="card h-fit shadow-md bg-base-200 text-black">
						<div className="card-body">
							<h2 className="card-title">{focus?.name}</h2>
							<p>{focus?.desc}</p>
						</div>
					</motion.div>
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

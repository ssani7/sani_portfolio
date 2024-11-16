'use client';

import { motion } from 'framer-motion';
import roadmap from '../assets/experiences.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import ArrowText from './Shared/ArrowText';

const Experiences = () => {
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
		<div className="overflow-hidden pt-10 pb-20">
			<h1 className="mt-8 mb-14 text-center font-bold text-3xl">Experiences</h1>

			<motion.div className="w-full px-4 xl:px-20">
				{roadmap.map((r, i) => (
					<div key={i}>
						{i % 2 == 0 ? (
							<motion.div className="grid grid-cols-11 justify-center  w-full mx-auto">
								<motion.div
									variants={fromLeft}
									initial="hidden"
									whileInView="show"
									viewport={{
										once: true,
										// amount: 1,
									}}
									className="col-span-5 flex justify-end items-cnter">
									<ArrowText direction="right">{r.date}</ArrowText>
								</motion.div>
								<div className={`flex justify-center  col-span-1 pt-3`}>
									<div className="divider divider-horizontal divider-start divider-neutral">
										<FontAwesomeIcon icon={faCircle} />
									</div>
								</div>
								<motion.div
									variants={fromRight}
									initial="hidden"
									whileInView="show"
									viewport={{
										once: true,
										// amount: 1,
									}}
									className="px-5 pb-14 col-span-5 flex flex-col gap-2">
									<p className="text-3xl font-semibold">{r.designation}</p>
									<p className="font-semibold">{r.company}</p>
									<p className="text-sm">{r.description}</p>
								</motion.div>
							</motion.div>
						) : (
							<motion.div className="grid grid-cols-11 justify-center  w-full mx-auto">
								<motion.div
									variants={fromLeft}
									initial="hidden"
									whileInView="show"
									viewport={{
										once: true,
										// amount: 1,
									}}
									className="px-5 col-span-5 flex flex-col gap-2 text-right">
									<p className="text-3xl font-semibold">{r.designation}</p>
									<p className="font-semibold">{r.company}</p>
									<p className="text-sm">{r.description}</p>
								</motion.div>
								<div className="flex justify-center col-span-1 pt-3">
									<div className="divider divider-horizontal divider-start divider-neutral">
										<FontAwesomeIcon icon={faCircle} />
									</div>
								</div>
								<motion.div
									variants={fromRight}
									initial="hidden"
									whileInView="show"
									viewport={{
										once: true,
										// amount: 1,
									}}
									className="col-span-5 flex justify-start">
									<ArrowText direction="left">{r.date}</ArrowText>
								</motion.div>
							</motion.div>
						)}
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default Experiences;

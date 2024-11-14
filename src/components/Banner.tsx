import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import saniPic from '/sani_2.png';

const Banner = () => {
	return (
		<div className="w-full overflow-x-hidden">
			<motion.div
				initial="hidden"
				whileInView={'animate'}
				viewport={{ once: true }}
				variants={{
					hidden: { opacity: 0, x: 200 },
					animate: {
						opacity: 1,
						x: 0,
						// delay: 0.5,
						transition: {
							type: 'spring',
							stiffness: 50,
							duration: 1.5,
							delayChildren: 1,
							when: 'beforeChildren',
						},
					},
				}}
				className="xl:h-screen xl:pt-20 flex flex-col justify-center md:flex-row md:relative z-0 relative pb-[260px] md:pb-0">
				<div className="w-full lg:w-1/2 p-5 lg:p-10 text-base-content mt-24">
					<div className="flex flex-col gap-3">
						<p className="text-xl font-bold">Hello, My name is</p>
						<p className="text-7xl font-bold">Sanaullah Sani</p>
						<p className="text-2xl font-bold">
							I am a <span className="satisfy-regular ml-1">Web Developer</span>
						</p>
						<div className="absolute bottom-0 md:static flex flex-col items-center md:items-start gap-6 ">
							<p>Passionate about technolgies and love to create web applications that solves real life problems and make people's life easier</p>
							<div className="my- flex items-center gap-6">
								<a target="_blank" href="https://github.com/ssani7" rel="noreferrer">
									<FontAwesomeIcon className="h-7 my-3 xl:hover:text-primary xl:hover:scale-125 transition-all" icon={faGithub} />
								</a>
								{/* <a target="_blank" href="https://www.facebook.com/im5ani/" rel="noreferrer">
							<FontAwesomeIcon className="h-7 my-3 xl:hover:text-primary xl:hover:scale-125 transition-all" icon={faFacebookF} />
						</a> */}
								<a target="_blank" href={'https://www.linkedin.com/in/sanaullah756'} rel="noreferrer">
									<FontAwesomeIcon className="h-7 my-3 xl:hover:text-primary xl:hover:scale-125 transition-all" icon={faLinkedin} />
								</a>
								<a target="_blank" href="https://twitter.com/sanaullahsani07" rel="noreferrer">
									<FontAwesomeIcon className="h-5 my-3 xl:hover:text-primary xl:hover:scale-125 transition-all" icon={faTwitter} />
								</a>
							</div>

							<a className="cursor-pointer link-hover" href="https://drive.google.com/file/d/1fyFnZR_ttOqXd1Q0RhyBwl8D5YVAKj-U/view?usp=drive_link" target="_blank" rel="noreferrer">
								<button className="btn btn-outline  hover:!text-white hover:!bg-primary hover:border-white">
									<FontAwesomeIcon className="mr-2" icon={faFileArrowDown} />
									My Resume
								</button>
							</a>
						</div>
					</div>
				</div>
				<motion.img
					initial="hidden"
					whileInView="animate"
					viewport={{ once: true }}
					variants={{
						hidden: { opacity: 0, x: -200 },
						animate: {
							opacity: 1,
							x: 0,
							scale: 1,
							transition: {
								delay: 0.3,
								type: 'spring',
								stiffness: 50,
								duration: 1.5,
							},
						},
					}}
					// src="https://res.cloudinary.com/ssani7/image/upload/v1687032284/Profile%20Photos/photo1687032253_enlysw.jpg"
					src={saniPic}
					className="md:w-2/5 xl:max-h-[550px] xl:w-[550px] object-contain "
					alt=""
				/>
			</motion.div>
		</div>
	);
};

export default Banner;

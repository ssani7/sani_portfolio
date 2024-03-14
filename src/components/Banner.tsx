import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import saniPic from '/sani bgless.png';

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
				className="xl:h-screen xl:pt-20 flex flex-col justify-center md:flex-row md:relative z-0">
				<div className="w-full lg:w-1/2 p-5 lg:p-10 text-base-content mt-24">
					<div className="flex flex-col gap-3">
						<p className="text-xl font-bold">Hello, My name is</p>
						<p className="text-7xl font-bold">Sanaullah Sani</p>
						<p className="text-2xl font-bold">
							I am a <span className="satisfy-regular ml-1">Web Developer</span>
						</p>
						<p>Passionate about Web technolgies and love to create dynamic and functional custom websites that makes people's life easier</p>
					</div>

					{/* <p className="my-5 md:w-4/6">
						I am a Full Stack Web Developer. I have been learning web develpment for two years now. My strong point is
						<a href="https://react.dev/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							React
						</a>{' '}
						and I am well skilled in most of the popular freameworks of react like
						<a href="https://nextjs.org/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							Next.js
						</a>
						,
						<a href="https://nextjs.org/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							Vite
						</a>
						,
						<a href="https://create-react-app.dev/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							CRA
						</a>
						. I assure quality code that are very reusable and optimized for other developers working in the same project.
					</p> */}

					{/* <p className="my-5 md:w-4/6">
						I have strong ability in
						<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							JavaScript
						</a>{' '}
						and
						<a href="https://www.typescriptlang.org/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							TypeScript
						</a>{' '}
						and use
						<a href="https://nextjs.org/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							Next.js
						</a>{' '}
						for most of my projects.
					</p> */}

					{/* <p className="my-5 md:w-4/6">
						I prefer
						<a href="https://tailwindcss.com/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							TailwindCSS
						</a>{' '}
						for the UI design but I am fluent in most of the famous CSS frameworks like
						<a href="https://getbootstrap.com/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							Bootstrap
						</a>{' '}
						&
						<a href="https://emotion.sh/docs/introduction" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							Emotion
						</a>
						. I have been usign
						<a href="https://mui.com/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							MaterialUI
						</a>
						,
						<a href="https://daisyui.com/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							DaisyUI
						</a>{' '}
						and many other popular component library and have quite a good experience in all of them
					</p> */}

					{/* <p className="my-5 md:w-4/6">
						For Backend I mostly use
						<a href="https://expressjs.com/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							Express
						</a>{' '}
						with
						<a href="https://nodejs.org/en" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							NodeJs
						</a>
						.
						<a
							href="https://www.mongodb.com/mern-stack#:~:text=MERN%20stands%20for%20MongoDB%2C%20Express,a%20client%2Dside%20JavaScript%20framework"
							className="text-primary link link-hover"
							target="_blank"
							rel="noreferrer">
							{' '}
							M.E.R.N.
						</a>{' '}
						stack is my stongest weapon and and I am fluent in
						<a href="https://www.mongodb.com/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							MongoDB
						</a>{' '}
						database. I also have experience in
						<a href="https://www.postgresql.org/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							PostgreSQL
						</a>{' '}
						and
						<a href="https://www.mysql.com/" className="text-primary link link-hover" target="_blank" rel="noreferrer">
							{' '}
							MySQl
						</a>{' '}
						based database system projects
					</p> */}
					<div className="my-5 flex items-center gap-4">
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

					<a href="https://drive.google.com/file/d/1fyFnZR_ttOqXd1Q0RhyBwl8D5YVAKj-U/view?usp=drive_link" target="_blank" className="cursor-pointer link-hover mt-10" rel="noreferrer">
						<FontAwesomeIcon className="mr-2" icon={faFileArrowDown} />
						My Resume
					</a>
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
					className="xl:h-[550px] xl:w-[550px] "
					alt=""
				/>
			</motion.div>
		</div>
	);
};

export default Banner;

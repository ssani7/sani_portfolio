import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IFeature {
	name: string;
	info: string;
	image: string;
	link: string;
}

interface ITech {
	name: string;
	image: string;
}

interface IProject {
	id: number;
	title: string;
	features: IFeature[];
	technology: ITech[];
	image: string;
	live: string;
	client: string;
	server: string;
}

const Banner = () => {
	const [projects, setProjects] = useState<IProject[]>([]);
	const navigate = useNavigate();

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			delay: 0.5,
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
				duration: 0.3,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
	};

	useEffect(() => {
		fetch('projects.json')
			.then((res) => res.json())
			.then((data) => {
				setProjects(data);
			});
	}, []);

	return (
		<>
			<div className="lg:pt-0 md:w-full lg:w-full flex flex-col justify-center items-center overflow-hidden">
				<h1 className="text-3xl font-bold mb-28 text-center">About Me</h1>
				<motion.div
					initial="hidden"
					whileInView={'animate'}
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
					className="bg-base-200 mx-6 md:w-5/6 lg:w-3/4 text-center md:text-left rounded-2xl flex flex-col-reverse items-center md:flex-row md:relative z-0">
					<div className="w-full p-10 text-base-content">
						<h1 className="text-5xl font-bold">Sanaullah Sani</h1>

						<p className="my-5 md:w-4/6 font-semibold">
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
						</p>

						<p className="my-5 md:w-4/6 font-semibold">
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
						</p>

						<p className="my-5 md:w-4/6 font-semibold">
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
						</p>

						<p className="my-5 md:w-4/6 font-semibold">
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
						</p>

						<a href="https://drive.google.com/file/d/12PtFY9TNixXj-_3DA9vFBRCihGJK3xFf/view?usp=sharing" target="_blank" className="cursor-pointer link-hover mt-10 font-semibold" rel="noreferrer">
							<FontAwesomeIcon className="mr-2" icon={faFileArrowDown} />
							My Resume
						</a>

						<div className="my-10">
							<a target="_blank" href="https://github.com/ssani7" rel="noreferrer">
								<FontAwesomeIcon className="h-8 my-3 mr-7 hover:text-primary hover:scale-125 transition-all" icon={faGithub} />
							</a>
							<a target="_blank" href="https://www.facebook.com/im5ani/" rel="noreferrer">
								<FontAwesomeIcon className="h-8 my-3 mr-7 hover:text-primary hover:scale-125 transition-all" icon={faFacebookF} />
							</a>
							<a target="_blank" href={'https://www.linkedin.com/in/sanaullah756'} rel="noreferrer">
								<FontAwesomeIcon className="h-8 my-3 mr-7 hover:text-primary hover:scale-125 transition-all" icon={faLinkedin} />
							</a>
							<a target="_blank" href="https://twitter.com/sanaullahsani07" rel="noreferrer">
								<FontAwesomeIcon className="h-8 my-3 mr-7 hover:text-primary hover:scale-125 transition-all" icon={faTwitter} />
							</a>
						</div>
					</div>
					<motion.img
						initial="hidden"
						whileInView="animate"
						variants={{
							hidden: { opacity: 0, x: -200 },
							animate: {
								opacity: 1,
								x: 0,
								scale: 1.1,
								transition: {
									delay: 0.3,
									type: 'spring',
									stiffness: 50,
									duration: 1.5,
								},
							},
						}}
						src="https://res.cloudinary.com/ssani7/image/upload/v1687032284/Profile%20Photos/photo1687032253_enlysw.jpg"
						className="z-20 h-60 object-cover w-60 right-0 shadow-2xl rounded-full mt-3 md:m-0 md:w-1/3 md:-right-10 md:rounded-lg md:h-fit md:scale-110 md:absolute lg:w-fit lg:h-[400px]"
						alt=""
					/>
				</motion.div>
			</div>

			{/* projects */}
			<div className="divider mt-28"></div>
			<div className="mt-14">
				<h2 className="text-3xl font-bold text-center ">Projects</h2>
				<div className="my-20 md:px-10 lg:mx-52 overflow-hidden">
					{projects.map((project, i) => (
						<motion.div variants={container} key={i} initial="hidden" whileInView={'visible'} className="hero rounded-2xl w-fit bg-base-200 lg:w-fit mx-5 mb-10 py-2 lg:py-10 lg:h-full">
							<div className={`hero-content px-6 lg:px-16 lg:py-10 flex-col ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
								<motion.img
									variants={item}
									src={project.image}
									className={`w-full lg:max-h-[400px] lg:max-w-md rounded-lg shadow-2xl mx-2 md:my-0 my-2 ${i % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}
									alt=""
								/>
								<div className="lg:w-1/2 mt-2 lg:mt-0">
									<motion.h1 variants={item} className="text-3xl md:text-3xl lg:text-5xl font-bold">
										{project.title}
									</motion.h1>
									<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
									<motion.div variants={item} className="flex flex-wrap">
										{project.technology.map((tech, i) => (
											<div key={i} className="mx-2 flex items-center wrap mb-2">
												<img className="h-5 mr-1" src={tech.image} alt="" srcSet="" />
												<span>{tech.name}</span>
											</div>
										))}
									</motion.div>
									<motion.a variants={item} href={project.live} target="_blank" className="btn btn-primary mt-6 normal-case mr-4 text-white" rel="noreferrer">
										Live Site
									</motion.a>
									<a href={project?.client} target="_blank" rel="noreferrer" className="mr-4">
										<motion.button variants={item} className="btn btn-primary mt-6 normal-case text-white">
											Source Code
										</motion.button>
									</a>

									<motion.button variants={item} onClick={() => navigate(`/projectDetails/${i}`)} className="btn btn-primary mt-6 normal-case text-white">
										Features
									</motion.button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default Banner;

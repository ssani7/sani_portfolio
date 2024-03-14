import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../assets/projects.json';
// interface IFeature {
// 	name: string;
// 	info: string;
// 	image: string;
// 	link: string;
// }

// interface ITech {
// 	name: string;
// 	image: string;
// }

// interface IProject {
// 	id: number;
// 	title: string;
// 	features: IFeature[];
// 	technology: ITech[];
// 	image: string;
// 	live: string;
// 	client: string;
// 	server: string;
// }

const Projects = () => {
	// const [projects, setProjects] = useState<IProject[]>([]);
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

	return (
		<div className="mt-5">
			<h2 className="text-3xl font-bold text-center">Projects</h2>
			<div className="my-10 md:px-10 overflow-hidden">
				{projects.map((project, i) => (
					<motion.div variants={container} key={i} initial="hidden" whileInView={'visible'} className="hero rounded-2xl w-fit bg-base-200 lg:w-fit mx-5 lg:mx-auto mb-10 py-2 lg:py-10 lg:h-full">
						<div className={`hero-content px-6 lg:px-16 lg:py-10 flex-col ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
							<motion.img
								variants={item}
								src={project.image}
								className={`w-full md:max-h-[300px] md:max-w-[40%] lg:max-w-md rounded-lg shadow-2xl mx-2 md:my-0 my-2 ${i % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}
								alt=""
							/>
							<div className="lg:w-1/2 mt-2 lg:mt-0">
								<motion.h1 variants={item} className="text-3xl md:text-3xl lg:text-5xl font-bold">
									{project.title}
								</motion.h1>
								<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
								<motion.div variants={item} className="flex flex-wrap gap-2">
									{project.technology.map((tech, i) => (
										<div key={i} className="flex items-center gap-1 mb-2">
											<img className="max-h-5 w-4 object-contain" src={tech.image} alt="" srcSet="" />
											<span className="text-sm">{tech.name}</span>
										</div>
									))}
								</motion.div>
								<motion.div variants={item} className="flex items-center flex-wrap gap-2 mt-6">
									<button onClick={() => navigate(`/projectDetails/${i}`)} className="btn btn-sm lg:btn-md btn-primary normal-case text-white">
										See Details
									</button>
									<a href={project.live} target="_blank" className="btn btn-sm lg:btn-md btn-primary normal-case text-white" rel="noreferrer">
										Live Site
									</a>
									<a href={project?.client} target="_blank" rel="noreferrer" className="">
										<button className="btn btn-sm lg:btn-md btn-primary normal-case text-white">Source Code</button>
									</a>
								</motion.div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Projects;

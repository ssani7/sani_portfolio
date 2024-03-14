import { useParams } from 'react-router-dom';
import projects from '../assets/projects.json';

const ProjectDetails = () => {
	const { id: index } = useParams();

	const project = projects[Number(index)];
	console.log('🚀 ~ ProjectDetails ~ project:', project.features[0].image);

	return (
		<div className="pt-32 w-full">
			<div className="w-full flex flex-col justify-center items-center">
				{project?.features.map((feature, i) => (
					<div key={i} className="card w-3/4 lg:card-side bg-base-100 shadow-xl my-6 p-6">
						<div className={`${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} md:object-contain lg:w-1/3`}>
							<img src={feature.image} className="w-fit lg:w-fit h-[300px] object-cover mx-auto" alt="Album" />
						</div>
						<div className={`card-body ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'} my-auto`}>
							<h2 className="card-title">{feature.name}</h2>
							<p>{feature.info}</p>
							<a href={feature.link} target="_blank" className="btn btn-link w-fit text-base-content p-0 capitalize" rel="noreferrer">
								Have A Look
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectDetails;

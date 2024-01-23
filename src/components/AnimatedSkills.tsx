import tail from '../assets/icons/Tailwind_CSS_Logo.svg.png';
import bootstrap from '../assets/icons/bootstrap-logo.png';
import daisyUi from '../assets/icons/daisyUi.svg';
import '../styles/Animation.css';

const AnimatedSkills = () => {
	return (
		<div className="pb-32 w-full overflow-hidden">
			<h1 className="my-20 text-center font-bold text-3xl">Skills</h1>
			<div className="relative" style={{ height: '500px' }}>
				<div className="main">
					<div className="">
						<div className="p-3 shadow-2xl rounded-full absolute m-auto inset-0 w-16 h-16 z-10">
							<div data-tip="React" className="tooltip">
								<img className="w-16 cursor-pointer" src={'https://res.cloudinary.com/ssani7/image/upload/v1687032575/potfolio/React-icon.svg_k80qir.png'} alt="" />
							</div>
						</div>
					</div>
					<div className="first-orbit shadow-lg w-52 h-52 rounded-full absolute m-auto inset-0">
						<div className="circle1 absolute m-auto inset-0 w-16 h-16">
							<div data-tip="Next.JS" className="tooltip">
								<img className="w-16 cursor-pointer" src={'https://res.cloudinary.com/ssani7/image/upload/v1687032520/potfolio/next-js-icon-512x512-zuauazrk_htfagw.png'} alt="" />
							</div>
						</div>
						<div className="circle1 absolute m-auto inset-0 w-16 h-16 second" style={{ animationDelay: '-7s' }}>
							<div data-tip="Vite" className="tooltip">
								<img className="w-16 cursor-pointer" src={'https://res.cloudinary.com/ssani7/image/upload/v1687032766/potfolio/Vitejs-logo.svg_fyeoil.png'} alt="" />
							</div>
						</div>
					</div>
					<div className="shadow-lg rounded-full absolute m-auto inset-0" style={{ width: '400px', height: '400px' }}>
						<div className="circle2 absolute m-auto inset-0 w-16 h-16">
							<div data-tip="Material UI" className="tooltip">
								<img className=" cursor-pointer" src={'https://res.cloudinary.com/ssani7/image/upload/v1687032519/potfolio/mui_jjgtsm.png'} alt="" />
							</div>
						</div>
						<div className="circle2 absolute m-auto inset-0 w-16 h-16" style={{ animationDelay: '-4s' }}>
							<div data-tip="Bootstrap" className="tooltip">
								<img className="w-16 cursor-pointer" src={bootstrap} alt="" />
							</div>
						</div>
						<div className="circle2 absolute m-auto inset-0 w-16 h-16" style={{ animationDelay: '-8s' }}>
							<div data-tip="Tailwind CSS" className="tooltip">
								<img className="w-16 cursor-pointer" src={tail} alt="" />
							</div>
						</div>
						<div className="circle2 absolute m-auto inset-0 w-16 h-16" style={{ animationDelay: '-12s' }}>
							<div data-tip="DaisyUI" className="tooltip">
								<img className="w-16 cursor-pointer object-cover" src={daisyUi} alt="" />
							</div>
						</div>
					</div>
					<div className="shadow-lg rounded-full absolute m-auto inset-0" style={{ width: '600px', height: '600px' }}>
						<div className="circle3 absolute m-auto inset-0 w-16 h-16">
							<div data-tip="Git Hub" className="tooltip">
								<img className=" cursor-pointer" src={'https://res.cloudinary.com/ssani7/image/upload/v1687032576/potfolio/25231_l7njk3.png'} alt="" />
							</div>
						</div>
						<div className="circle3 absolute m-auto inset-0 w-16 h-16" style={{ animationDelay: '-4s' }}>
							<div data-tip="MongoDB" className="tooltip">
								<img className="w-16 cursor-pointer" src={'https://res.cloudinary.com/ssani7/image/upload/v1687032575/potfolio/mongo_pfsmxl.png'} alt="" />
							</div>
						</div>
						<div className="circle3 absolute m-auto inset-0 w-16 h-16" style={{ animationDelay: '-8s' }}>
							<div data-tip="PostgreSQL" className="tooltip">
								<img className="w-16 cursor-pointer" src={'https://res.cloudinary.com/ssani7/image/upload/v1687033522/potfolio/Postgresql_elephant.svg_x7jy3o.png'} alt="" />
							</div>
						</div>
						<div className="circle3 absolute m-auto inset-0 w-16 h-16" style={{ animationDelay: '-12s' }}>
							<div data-tip="Firebase" className="tooltip">
								<img className="w-16 cursor-pointer object-cover" src={'https://res.cloudinary.com/ssani7/image/upload/v1687032575/potfolio/firebase_aj8k3h.png'} alt="" />
							</div>
						</div>
						<div className="circle3 absolute m-auto inset-0 w-16 h-16" style={{ animationDelay: '-16s' }}>
							<div data-tip="Node.js" className="tooltip">
								<img className="w-16 cursor-pointer object-cover" src={'https://res.cloudinary.com/ssani7/image/upload/v1687032575/potfolio/node_kxkkxz.png'} alt="" />
							</div>
						</div>
						<div className="circle3 absolute m-auto inset-0 w-16 h-16" style={{ animationDelay: '-20s' }}>
							<div data-tip="Node.js" className="tooltip">
								<img className="w-16 cursor-pointer object-cover" src={'https://res.cloudinary.com/ssani7/image/upload/v1687036554/potfolio/redux_tqxe3o.svg'} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimatedSkills;

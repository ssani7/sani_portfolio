import AnimatedSkills from '../components/AnimatedSkills';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const Home = () => {
	return (
		<div className="">
			{/* <Slide /> */}
			<Banner />
			<AnimatedSkills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;

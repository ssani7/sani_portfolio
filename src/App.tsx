import { useEffect, useRef, useState } from 'react';
import AnimatedSkills from './components/AnimatedSkills';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Slide from './components/Slides';

function App() {
	const titleRef = useRef();
	const titleRef2 = useRef();
	const isDarkModeEnabled = localStorage.getItem('theme') === 'darkTheme';
	const [nightMode, setNightMode] = useState(isDarkModeEnabled);

	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

	const checked = (value: boolean) => {
		if (value) {
			setNightMode(true);
			localStorage.setItem('theme', 'darkTheme');
		} else {
			setNightMode(false);
			localStorage.setItem('theme', 'mytheme');
		}
	};

	useEffect(() => {
		if (!localStorage.getItem('theme')) {
			setNightMode(systemTheme.matches);
		}
		systemTheme.addEventListener('change', (e: any) => {
			console.log(e?.target?.matches);
			checked(e?.target?.matches);
		});
	}, [systemTheme]);

	function handleBackClick(ref: any) {
		ref.current.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div id="App" data-theme={nightMode ? 'darkMode' : 'mytheme'}>
			<Header reference={titleRef2} click={() => handleBackClick(titleRef)} nightMode={nightMode} setNightMode={checked} />
			<div className="">
				<Slide />
				<AnimatedSkills />
				<Banner />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;

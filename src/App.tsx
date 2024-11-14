import { useEffect, useState } from 'react';
import Navbar from './components/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { useScrollContext } from './ScrollContext';

function App() {
	const isDarkModeEnabled = localStorage.getItem('theme') === 'darkTheme';
	const [nightMode, setNightMode] = useState(isDarkModeEnabled);
	const contactRef = useScrollContext();
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
	const location = useLocation();

	// scroll to contact element if /contact and if not scroll to top
	useEffect(() => {
		if (location.pathname == '/contact') {
			handleScrollTo(contactRef);
		} else {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	}, [location.pathname, contactRef]);

	// set theme from system preference or local storage
	useEffect(() => {
		if (!localStorage.getItem('theme')) {
			setNightMode(systemTheme.matches);
		}
		systemTheme.addEventListener('change', (e: any) => {
			console.log(e?.target?.matches);
			setIsNightMode(e?.target?.matches);
		});
	}, [systemTheme]);

	const setIsNightMode = (value: boolean) => {
		if (value) {
			setNightMode(true);
			localStorage.setItem('theme', 'darkTheme');
		} else {
			setNightMode(false);
			localStorage.setItem('theme', 'mytheme');
		}
	};

	const handleScrollTo = (ref: any) => {
		ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<div id="App" data-theme={nightMode ? 'darkMode' : 'mytheme'}>
			<Navbar click={() => handleScrollTo(contactRef)} nightMode={nightMode} setNightMode={setIsNightMode} />
			<Outlet />
		</div>
	);
}

export default App;

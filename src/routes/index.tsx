import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../page/Home';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		//   loader: rootLoader,
		children: [
			{
				path: 'home',
				element: <Home />,
				//   loader: teamLoader,
			},
		],
	},
]);

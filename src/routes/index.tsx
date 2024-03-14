import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../page/Home';
import ProjectDetails from '../page/ProjectDetails';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		//   loader: rootLoader,
		children: [
			{
				index: true,
				element: <Home />,
				//   loader: teamLoader,
			},
			{
				path: 'projectDetails/:id',
				element: <ProjectDetails />,
				//   loader: teamLoader,
			},
		],
	},
]);

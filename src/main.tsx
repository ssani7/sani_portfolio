import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes';
import { ScrollProvider } from './ScrollContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ScrollProvider>
			<RouterProvider router={router} />
		</ScrollProvider>
	</React.StrictMode>
);

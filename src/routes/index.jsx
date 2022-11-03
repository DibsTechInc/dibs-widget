import React from 'react';
import {
	createBrowserRouter
} from 'react-router-dom';
import App from 'App';
import SchedulePage from 'views/schedule';
import Root from './root';

// views

const router = createBrowserRouter([{
		path: '/',
		element: < App / >
	},
	{
		path: '/schedule',
		element: < SchedulePage / >
	}
]);

export default router;
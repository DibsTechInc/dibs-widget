import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	Provider
} from 'react-redux';
import {
	store
} from 'store';
import {
	RouterProvider
} from 'react-router-dom';

import router from './routes/index';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</Provider>
	</React.StrictMode>
);
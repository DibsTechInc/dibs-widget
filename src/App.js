import React from 'react';
import axios from 'axios';
import { dispatch } from 'store';
import { setSchedule } from 'store/slices/schedule';

import './App.css';

function App() {
	const baseURL = process.env.REACT_APP_BASE_URL;
	React.useEffect(() => {
		const bodytosend = {
			dibsStudioId: 218,
			timeZone: 'America/New_York',
			calledFrom: 'widget',
		};
		const url = `${baseURL}/widget/get-schedule`;
		const getSchedule = async () => {
			await axios
				.post(url, bodytosend)
				.then((response) => {
					dispatch(setSchedule(response.data));
				})
				.catch((error) => {
					console.log(error);
				});
		};
		getSchedule();
	}, []);
	return <div className='App'>Dibs Widget - Base Route</div>;
}

export default App;

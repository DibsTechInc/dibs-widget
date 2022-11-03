import React from 'react';
import axios from 'axios';

function App() {
	const baseURL = process.env.REACT_APP_BASE_URL;
	console.log(`baseURL: ${baseURL}`);
	React.useEffect(() => {
		const bodytosend = {
			dibsStudioId: 218,
			timeZone: 'America/New_York',
		};
		const url = `${baseURL}/widget/get-schedule`;
		const getSchedule = async () => {
			await axios
				.post(url, bodytosend)
				.then((response) => {
					console.log(JSON.stringify(response.data, null, 2));
				})
				.catch((error) => {
					console.log(error);
				});
		};
		getSchedule();
	}, []);
	return <div>Hello World 3!</div>;
}

export default App;

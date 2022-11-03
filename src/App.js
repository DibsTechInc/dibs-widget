import React from 'react';
import axios from 'axios';

function App() {
	const baseURL = process.env.REACT_APP_BASE_URL;
	console.log(`baseURL: ${baseURL}`);
	React.useEffect(() => {
		const bodytosend = {
			dibsStudioId: 218,
			timeZone: 'America/New_York',
			calledFrom: 'widget',
		};
		const url = `${baseURL}/widget/get-schedule`;
		console.log(`url: ${url}`);
		const getSchedule = async () => {
			await axios
				.post(url, bodytosend)
				.then((response) => {
					console.log(JSON.stringify(response, null, 2));
					console.log(
						`length of response is: ${response.data.length}`
					);
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

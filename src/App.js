import React from 'react';

function App() {
	const postUrl = process.env.REACT_APP_BASE_URL;
	console.log(`postUrl: ${postUrl}`);
	return <div>Hello World 3!</div>;
}

export default App;

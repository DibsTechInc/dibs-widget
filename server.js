const path = require('path');
const express = require('express');

if (process.env.NODE_ENV !== 'production') {
	// eslint-disable-next-line global-require
	require('dotenv').config();
}

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function () {
	console.log('listening on port ', server.address().port);
});

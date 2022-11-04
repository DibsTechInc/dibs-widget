// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// project imports
import dibsstudioReducer from './slices/dibsstudio';
import scheduleReducer from './slices/schedule';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
	// dibsstduio: persistReducer({ key: 'id', storage }, dibsstudioReducer),
	// dibsstudio: dibsstudioReducer,
	dibsstudio: persistReducer(
		{ key: 'dibsstudio', storage, keyPrefix: 'dibsstudio-' },
		dibsstudioReducer
	),
	schedule: scheduleReducer,
});

export default reducer;

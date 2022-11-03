// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// project imports
import dibsstudioReducer from './slices/dibsstudio';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
	// dibsstduio: persistReducer({ key: 'id', storage }, dibsstudioReducer),
	// dibsstudio: dibsstudioReducer,
	// thisuser: persistReducer(
	// 	{ key: 'thisuser', storage, keyPrefix: 'thisuser-' },
	// 	thisuserReducer
	// ),
	// thisuser: thisuserReducer,
	dibsstudio: persistReducer(
		{ key: 'dibsstudio', storage, keyPrefix: 'dibsstudio-' },
		dibsstudioReducer
	),
});

export default reducer;

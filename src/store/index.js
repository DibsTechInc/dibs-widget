// third-party
import { configureStore } from '@reduxjs/toolkit';
import {
	useDispatch as useAppDispatch,
	useSelector as useAppSelector,
} from 'react-redux';

import { persistStore } from 'redux-persist';

// project imports
import rootReducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const devToolsSetting = process.env.NODE_ENV !== 'production';
const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
			immutableCheck: false,
		}),
	// devTools: process.env.NODE_ENV === 'development',
	devTools: devToolsSetting,
});

const persister = persistStore(store);

const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

export { store, persister, dispatch, useSelector, useDispatch };

// third-party
import {
	createSlice
} from '@reduxjs/toolkit';

// ----------------------------------------------------------------------
const initialState = {
	schedule: [],
	isLoading: false,
	hasError: false,
	errorMsg: ''
};

const schedule = createSlice({
	name: 'schedule',
	initialState,
	reducers: {
		// HAS ERROR
		setHasError(state, action) {
			// state.hasError = false;
			// state.hasError = action.payload;
			return {
				...state,
				hasError: action.payload
			};
		},
		setErrorMsg(state, action) {
			return {
				...state,
				errorMsg: action.payload
			};
		},
		// SET SCHEDULE
		setSchedule(state, action) {
			// state.schedule = action.payload;
			return {
				...state,
				schedule: action.payload
			};
		},
		// SET LOADING
		setLoading(state, action) {
			return {
				...state,
				isLoading: action.payload
			};
		},
		resetSchedule(state) {
			return {
				...state,
				schedule: [],
				isLoading: false
			};
		}
	}
});

// Reducer
export default schedule.reducer;
export const {
	setHasError,
	setSchedule,
	setErrorMsg,
	setLoading,
	resetSchedule
} = schedule.actions;

// ----------------------------------------------------------------------
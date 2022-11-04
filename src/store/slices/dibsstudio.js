// third-party
import {
	createSlice
} from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
	config: {
		dibsStudioId: 0,
		studioName: '',
		timeZone: 'America/New_York'
	},
	studioConfig: {
		terms: '',
		color: '',
		intervalEnd: 14,
		autopayNotice: '',
		use_spot_booking: '',
		show_credit_load: '',
		showChatbot: false,
		first_class_fixed_price: '',
		display_giftcards: '',
		spot_label: '',
		vod_access_period: '',
		imageUrls: {
			color_logo: '',
			hero_url: ''
		},
		hasMemberships: true,
		salesTax: 0,
		retailTax: 0,
		billing: {
			stripe_account_id: '',
			stripeid: '',
			stripe_cardid: '',
			subscription_fee: '',
			total_monthly_charge: '',
			date_of_charge: ''
		}
	},
	customerService: {
		customerServiceEmail: '',
		customerServicePhone: '',
		customEmailToSendFrom: '',
		address: ''
	},
	settings: {
		dynamicPricing: false,
		flashCredits: false,
		minPrice: 20,
		maxPrice: 30,
		showChatbot: false
	},
	integrations: {
		classpass: false,
		gymPass: false,
		cp_amount: 0,
		oldstudioid: 0
	}
};

const dibsstudio = createSlice({
	name: 'dibsstudio',
	initialState,
	reducers: {
		// HAS ERROR
		hasError(state, action) {
			return {
				...state,
				error: action.payload
			};
		},
		// ADD STUDIO DATA
		addStudioData(state, action) {
			return {
				...state,
				config: action.payload
			};
		},
		setDibsStudioId(state, action) {
			return {
				...state.config,
				dibsStudioId: action.payload
			};
		},
		setStudioName(state, action) {
			return {
				...state.config,
				studioName: action.payload
			};
		}
	}
});

// Reducer
export default dibsstudio.reducer;
export const {
	addStudioData,
	hasError,
	setFirstClassFixedPrice,
	setClasspass,
	setGympass,
	setShowChatbot,
	setStudioTerms,
	setDynamicPricing,
	setFlashCreditsStore,
	setGlobalPrices,
	setGeneralLocationData,
	setCustomEmailToSendFrom,
	setStudioConfigData,
	setStudioImageUrls,
	setStudioColorRedux,
	setNumDaysToShowCalendar,
	setRafAwardRedux,
	setStudioCancelTime,
	setTaxesRedux,
	setStudioProfileAccountInfo,
	setPaymentInfo,
	setStudioTimeZone,
	resetDibsStudioData,
	setDibsStudioId,
	setStudioName
} = dibsstudio.actions;

// ----------------------------------------------------------------------
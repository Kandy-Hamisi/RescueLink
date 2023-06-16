import { configureStore, combineReducers } from '@reduxjs/toolkit';
import toggleSliceReducer from '../Features/ToggleSlice';
import currentuserSliceReducer from '../Features/CurrentuserSlice';

const rootReducer = combineReducers({
    width: toggleSliceReducer,
    currentUser: currentuserSliceReducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;
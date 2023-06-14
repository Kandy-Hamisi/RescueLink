import { configureStore, combineReducers } from '@reduxjs/toolkit';
import toggleSliceReducer from '../Features/ToggleSlice';

const rootReducer = combineReducers({
    width: toggleSliceReducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;
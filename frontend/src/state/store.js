import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import rootReducer from './reducers'
 
import cartSlice from "./cart"
import ProfileSlice from "./userprofile";
const persistConfig = {
    key: 'root',
    version:1,
    storage,
}
const reducer = combineReducers({
    cart:cartSlice,
    profile:ProfileSlice,
})
const persistedReducer = persistReducer(persistConfig, reducer)
const store = configureStore({
    reducer:persistedReducer
});

export default store;
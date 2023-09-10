import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import rootReducer from './reducers'
 
import cartSlice from "./cart"
import productSlice from "./product"
import productlistSlice from "./productlist";
import ProfileSlice from "./userprofile";
const persistConfig = {
    key: 'root',
    version:1,
    storage,
}
const reducer = combineReducers({
    cart:cartSlice,
    profile:ProfileSlice,
    // product:productSlice,
    productlist:productlistSlice,
    // flag:productlistSlice
})
const persistedReducer = persistReducer(persistConfig, reducer)
const store = configureStore({
    reducer:persistedReducer
});

export default store;
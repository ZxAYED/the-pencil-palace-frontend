import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/Auth/authSlice';
import { persistStore, persistReducer, REGISTER, FLUSH, REHYDRATE, PERSIST, PAUSE, PURGE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import baseApi from './Api/baseApi';



const persistConfig = {
    key: 'auth',
    storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(baseApi.middleware)
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
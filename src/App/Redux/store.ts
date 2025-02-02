import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});


export type RootState = ReturnType<typeof store.getState>
// export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
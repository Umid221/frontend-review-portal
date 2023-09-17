import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "src/features/auth/authApiSlice";
import { tagsApiSlice } from "src/features/tags/tagsApiSlice";
import counterReducer from "src/features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [authApiSlice.reducerPath]: authApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(authApiSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

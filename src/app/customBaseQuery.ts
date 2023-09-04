import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const baseUrl = import.meta.env.VITE_API_URL;

export const customBaseQuery = () =>
    fetchBaseQuery({
        baseUrl,
        timeout: 10000,
        prepareHeaders: (headers, { getState }) => {
            // const token = (getState() as RootState).auth.token;
            const token = localStorage.getItem("access-token");
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            } else {
                headers.delete("authorization");
            }

            return headers;
        },
    });

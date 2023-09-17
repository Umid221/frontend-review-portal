import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_URL;

const customBaseQuery = () =>
    fetchBaseQuery({
        baseUrl,
        timeout: 10000,
        prepareHeaders: (headers, { getState }) => {
            // const token = (getState() as RootState).auth.token;
            const token = localStorage.getItem("access-token");
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            } else {
                headers.delete("authorization");
            }

            return headers;
        },
    });

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: customBaseQuery(),
    tagTypes: ["tags"],
    endpoints: (builder) => ({}),
});

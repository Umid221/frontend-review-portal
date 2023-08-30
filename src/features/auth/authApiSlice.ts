import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3500";

interface User {
    id: string;
}

export const authApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders(headers) {
            // headers.set('')

            return headers;
        },
    }),
    endpoints(builder) {
        return {
            getUsers: builder.query<User[], number | void>({
                query(limit = 10) {
                    return `/users?limit=${limit}`;
                },
            }),
            register: builder.mutation({
                query: (body) => ({
                    url: `/auth`,
                    method: "post",
                    body,
                }),
            }),
        };
    },
});

export const { useGetUsersQuery, useRegisterMutation } = authApiSlice;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "src/app/customBaseQuery";

const baseUrl = "http://localhost:3500/api";

interface User {
    id: string;
}

interface LoginBody {
    email: string;
    password: string;
}

interface RegisterBody extends LoginBody {
    fullName: string;
}

interface RegisterResponse {
    message: string;
}

interface LoginResponse {
    message: string;
    accessToken: string;
    refreshToken: string;
}

export const authApiSlice = createApi({
    reducerPath: "api",
    baseQuery: customBaseQuery(),
    endpoints(builder) {
        return {
            getUsers: builder.query<User[], number | void>({
                query(limit = 10) {
                    return `/users?limit=${limit}`;
                },
            }),
            register: builder.mutation<RegisterResponse, RegisterBody>({
                query: (body) => ({
                    url: `/auth/register`,
                    method: "post",
                    body,
                }),
            }),
            login: builder.mutation<LoginResponse, LoginBody>({
                query: (body) => ({
                    url: "/auth/login",
                    method: "post",
                    body,
                }),
            }),
        };
    },
});

export const { useGetUsersQuery, useRegisterMutation, useLoginMutation } =
    authApiSlice;

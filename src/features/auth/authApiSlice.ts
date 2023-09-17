import { apiSlice } from "src/app/apiSlice";

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

export const authApiSlice = apiSlice.injectEndpoints({
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

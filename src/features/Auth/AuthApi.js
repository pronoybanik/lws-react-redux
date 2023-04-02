import { apiSlice } from "../Api/ApiSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            })
        }),
        logIn: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: "POST",
                body: data
            })
        }),
    })
});

export const { useLogInMutation, useRegisterMutation } = authApi;
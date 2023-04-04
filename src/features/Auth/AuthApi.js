import { apiSlice } from "../Api/ApiSlice";
import { userLoggedIn } from "./AuthSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }))
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    )
                } catch (error) {
                    console.log(error);
                }
            }


        }),
        logIn: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }))

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        })
                    )
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        AdminLogIn: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    if (result.data.user.role === "admin") {
                        localStorage.setItem("auth", JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user
                        }))

                        dispatch(
                            userLoggedIn({
                                accessToken: result.data.accessToken,
                                user: result.data.user,
                            })
                        )
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }),

    })
});

export const { useLogInMutation, useRegisterMutation, useAdminLogInMutation } = authApi;
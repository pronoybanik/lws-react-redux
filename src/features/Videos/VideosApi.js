import { apiSlice } from "../Api/ApiSlice";

const videoApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => `/videos?_limit=1`
        }),
        getAllVideos: builder.query({
            query: () => '/videos'
        }),
        getVideosId: builder.query({
            query: (id) => `/videos/${id}`
        })
    }),

})

export const { useGetAllVideosQuery, useGetVideosQuery } = videoApi;
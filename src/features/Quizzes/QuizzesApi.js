import { apiSlice } from "../Api/ApiSlice";

const QuizzesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuizzesMarks: builder.query({
            query: () => "/quizzes",
            providesTags: ["QuizzesMarks"]
        }),
        deleteQuizzes: builder.mutation({
            query: (id) => ({
                url: `/quizzes/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["QuizzesMarks"]
        }),
        getQuizzes: builder.query({
            query: (id) => `/quizzes?video_id_like=${id}`
        }),
    }),
});

export const { useGetQuizzesMarksQuery, useDeleteQuizzesMutation, useGetQuizzesQuery } = QuizzesApi;
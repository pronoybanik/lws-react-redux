import { apiSlice } from "../Api/ApiSlice";

export const AssignmentMarkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        assignmentMark: builder.query({
            query: () => "/assignmentMark",
            providesTags: ["AddAssignmentMark"]
        }),
        addAssignmentMark: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignmentMark/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["AddAssignmentMark"]
        }),
        getAssignment: builder.query({
            query: (id) => `/assignments?video_id_like=${id}`
        }),
        studentAddAssignmentMark: builder.mutation({
            query: (data) => ({
                url: "/assignmentMark",
                method: "POST",
                body: data
            })
        }),
    })
});

export const { useAssignmentMarkQuery, useAddAssignmentMarkMutation, useGetAssignmentQuery, useStudentAddAssignmentMarkMutation } = AssignmentMarkApi;
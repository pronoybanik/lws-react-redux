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
    })
});

export const { useAssignmentMarkQuery, useAddAssignmentMarkMutation } = AssignmentMarkApi;
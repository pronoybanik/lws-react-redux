import { apiSlice } from "../Api/ApiSlice";

export const AssignmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        assignmentMark: builder.query({
            query: () => "/assignmentMark "
        }),
    })
});

export const { useAssignmentMarkQuery } = AssignmentApi;
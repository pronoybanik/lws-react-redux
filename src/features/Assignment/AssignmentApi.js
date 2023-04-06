import { apiSlice } from "../Api/ApiSlice";

const assignmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAssignment: builder.query({
            query: () => '/assignments'
        }),
        getAssignmentId: builder.query({
            query: (id) => `/assignments/${id}`
        }),
        addAssignment: builder.mutation({
            query: (data) => ({
                url: '/assignments',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        assignmentApi.util.updateQueryData('getAssignment', undefined, (draft) => {
                            draft?.push(data)
                        })
                    )
                } catch (err) {
                    console.log(err);
                }
            }
        }),
        deleteAssignment: builder.mutation({
            query: (id) => ({
                url: `/assignments/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                const deletedPatch = dispatch(
                    assignmentApi.util.updateQueryData("getAssignment", undefined, (draft) => {
                        const position = draft.findIndex((task) => task?.id === args);
                        draft.splice(position, 1);
                    })
                )
                try {

                    await queryFulfilled;

                } catch (err) {
                    deletedPatch.undo()
                }
            }

        }),
        editAssignment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignments/${id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {

                    const { data: EditData } = await queryFulfilled;
                    dispatch(
                        assignmentApi.util.updateQueryData("getAssignment", undefined, (draft) => {
                            let index = draft?.findIndex(task => task.id === EditData.id)
                            draft[index] = EditData;
                        })
                    )
                } catch (err) {
                    console.log(err)
                }
            }
        })
    }),
});

export const {
    useGetAssignmentQuery,
    useAddAssignmentMutation,
    useDeleteAssignmentMutation,
    useGetAssignmentIdQuery,
    useEditAssignmentMutation,
} = assignmentApi;
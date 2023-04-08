import { apiSlice } from "../Api/ApiSlice";

const videoApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: (id) => `/videos?id_like=${id}&_limit=1`
        }),
        getAllVideos: builder.query({
            query: () => '/videos',
        }),
        getVideosId: builder.query({
            query: (id) => `/videos/${id}`
        }),
        addVideo: builder.mutation({
            query: (data) => ({
                url: '/videos',
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;

                    dispatch(
                        videoApi.util.updateQueryData('getAllVideos', undefined, (draft) => {
                            draft?.push(data)
                        })
                    )
                } catch (err) {
                    console.log(err);
                }
            }
        }),
        deleteVideo: builder.mutation({
            query: (id) => ({
                url: `/videos/${id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                const deletedPatch = dispatch(
                    videoApi.util.updateQueryData("getAllVideos", undefined, (draft) => {
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
        editVideo: builder.mutation({
            query: ({ id, data }) => ({
                url: `/videos/${id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {

                    const { data: EditData } = await queryFulfilled;
                    dispatch(
                        videoApi.util.updateQueryData("getAllVideos", undefined, (draft) => {
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
    useGetAllVideosQuery,
    useGetVideosQuery,
    useAddVideoMutation,
    useDeleteVideoMutation,
    useGetVideosIdQuery,
    useEditVideoMutation,
    // useGetVideoQuery
} = videoApi;
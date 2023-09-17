import { apiSlice } from "src/app/apiSlice";

interface TagReqBody {
    name: string;
}

interface Tag {
    id: number;
    name: string;
}

interface LoginResponse {
    message: string;
    data: string[];
}

export const tagsApiSlice = apiSlice.injectEndpoints({
    endpoints(builder) {
        return {
            getTags: builder.query<{ data: Tag[] }, {}>({
                query: () => ({
                    url: `/tags`,
                }),
                providesTags: ["tags"],
            }),
            createTag: builder.mutation<LoginResponse, TagReqBody>({
                query: (body) => ({
                    url: "/tags",
                    method: "post",
                    body,
                }),
                invalidatesTags: ["tags"],
            }),
        };
    },
});

export const { useGetTagsQuery, useCreateTagMutation } = tagsApiSlice;

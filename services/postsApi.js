import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({

    getPosts: builder.query({
      query: () => "posts",
      providesTags: ["Posts"],
    }),

    addPost: builder.mutation({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),

    updatePost: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),

  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postsApi;
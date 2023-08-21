import { api } from "../api";

export const actionApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (body) => ({
        url: "actions",
        method: "POST",
        body: { ...body },
      }),
    }),
    getAll: builder.mutation({
      query: () => ({
        url: "actions",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateMutation, useGetAllMutation } = actionApiSlice;

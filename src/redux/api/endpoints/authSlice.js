import { api } from "../api";

export const authApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "users/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    self: builder.mutation({
      query: () => ({
        url: "users/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useSelfMutation } = authApiSlice;

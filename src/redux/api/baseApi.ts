import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      try {
        const token = (getState() as RootState)?.auth?.token;
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
      } catch (err) {
        console.warn("Failed to attach token:", err);
      }
      return headers;
    },
  }),
  tagTypes: ["Skills", "Skill", "Projects", "Project", "Blogs", "Blog"],
  endpoints: () => ({}),
});

export default baseApi;

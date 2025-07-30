
import baseApi from "../../api/baseApi";


const blogApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({

        createBlog : builder.mutation({
            query: (blog ) => ({
                url : '/add-blog',
                method : "POST",
                body: blog,   
            }),
           invalidatesTags: ['Blogs']
        }),

        getBlogs : builder.query({
            query: (query) => ({
                url : '/blogs',
                method : "GET",
                params : query,
            }),
            providesTags: ['Blogs']
        }),


        getSingleBlog : builder.query({
            query: (blogId) => ({
                url : `/blogs/${blogId}`,
                method : "GET",   
            }),
            providesTags : ['Blog']
        }),

        deleteBlog : builder.mutation({
            query: (blogId) => ({
                url : `/blogs/${blogId}`,
                method : "DELETE",   
            }),
            invalidatesTags: ['Blogs']
        }),
        
        updateBlog : builder.mutation({
            query: ({ blogId , payload }) => ({
                
                url : `/blogs/${blogId}`,
                method : "PATCH", 
                body : payload,  
            }),
            invalidatesTags: ['Blogs', 'Blog']
        }),
        
        
    })
})

export const {
    useCreateBlogMutation,
     useGetBlogsQuery,
      useUpdateBlogMutation,
       useDeleteBlogMutation,
        useGetSingleBlogQuery, 
    } = blogApi;
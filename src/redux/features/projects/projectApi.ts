
import baseApi from "../../api/baseApi";


const projectApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({

        createProject : builder.mutation({
            query: (project ) => ({
                url : '/add-project',
                method : "POST",
                body: project,   
            }),
           invalidatesTags: ['Projects']
        }),

        getProjects : builder.query({
            query: (query) => ({
                url : '/projects',
                method : "GET",
                params : query,
            }),
            providesTags: ['Projects']
        }),


        getSingleProject : builder.query({
            query: (projectId) => ({
                url : `/projects/${projectId}`,
                method : "GET",   
            }),
            providesTags : ['Project']
        }),

        deleteProject : builder.mutation({
            query: (projectId) => ({
                url : `/projects/${projectId}`,
                method : "DELETE",   
            }),
            invalidatesTags: ['Projects']
        }),
        
        updateProject : builder.mutation({
            query: ({ projectId , payload }) => ({
                
                url : `/projects/${projectId}`,
                method : "PUT", 
                body : payload,  
            }),
            invalidatesTags: ['Projects', 'Project']
        }),
        
        
    })
})

export const {
    useCreateProjectMutation,
     useGetProjectsQuery,
      useUpdateProjectMutation,
       useDeleteProjectMutation,
        useGetSingleProjectQuery, 
    } = projectApi;
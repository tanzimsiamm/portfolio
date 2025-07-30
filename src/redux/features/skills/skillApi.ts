
import baseApi from "../../api/baseApi";


const skillApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({

        createSkill : builder.mutation({
            query: (skill ) => ({
                url : '/add-skill',
                method : "POST",
                body: skill,   
            }),
           invalidatesTags: ['Skills']
        }),

        getSkills : builder.query({
            query: (query) => ({
                url : '/skills',
                method : "GET",
                params : query,
            }),
            providesTags: ['Skills']
        }),


        getSingleSkill : builder.query({
            query: (skillId) => ({
                url : `/skills/${skillId}`,
                method : "GET",   
            }),
            providesTags : ['Skill']
        }),

        deleteSkill : builder.mutation({
            query: (skillId) => ({
                url : `/skills/${skillId}`,
                method : "DELETE",   
            }),
            invalidatesTags: ['Skills']
        }),
        
        updateSkill : builder.mutation({
            query: ({ skillId , payload }) => ({
                
                url : `/skills/${skillId}`,
                method : "PUT", 
                body : payload,  
            }),
            invalidatesTags: ['Skills', 'Skill']
        }),
        
        
    })
})

export const {
    useCreateSkillMutation,
     useGetSkillsQuery,
      useUpdateSkillMutation,
       useDeleteSkillMutation,
        useGetSingleSkillQuery, 
    } = skillApi;
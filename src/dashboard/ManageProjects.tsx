
import Container from '../components/Container';
import { toast } from 'sonner';
import { useCreateProjectMutation, useDeleteProjectMutation, useGetProjectsQuery } from '../redux/features/projects/projectApi';

// [{"_id":{"$oid":"6716860932d0f5a84e5f1d58"},"image":"https://i.ibb.co.com/4WVT29n/Fire-Shot-Capture-002-Campers-Shop-campers-shop-six-vercel-app.png","title":"Camper Haven - Buying Camp-Related Products","description":"A website from where users can purchase products related to camping as needed.","technologies":"Typescript, React, Redux-toolkit Tailwind, Express, Mongoose","live":"https://campers-shop-six.vercel.app","client_code":"https://github.com/mohadeb550/Camper-Haven.git","server_code":"https://github.com/mohadeb550/Camper-Haven-Backend.git"}]

const ManageProjects = () => {
  const [ createProject, { isLoading }] = useCreateProjectMutation();
  const [ deleteProject ] = useDeleteProjectMutation();
  const { data } = useGetProjectsQuery();
  const projects = data?.data;
  

  const handleLogin = async (e) => {
    e.preventDefault();

    const form  = new FormData(e.target);

    const newProject = {
        image :form.get('image'),
        title : form.get('title'),
          description : form.get('description'),
          technologies : form.get('technologies'),
          live : form.get('live'),
          client_code : form.get('client_repo'),
          server_code : form.get('server_repo'),
    }

    try {
        const response =  await createProject(newProject).unwrap();
    
      if(response?.success){
        // show a toast 
        toast.success('You added a new project')
      }
      }catch(error){
        toast.error('Something went wrong')
        console.log(error)
      }

     
}
 const handleDeleteProject = (projectId) => {
      const result =   confirm('Decorated project! ARe you sure to delete?')
      result && deleteProject(projectId)
        
      }


  return (
  <Container>
      <div className=" bg-[#0F1724] text-white flex flex-col justify-center items-center px-10 md:px-16 mt-1 lg:mt-6">
      <h1 className=" text-xl md:text-2xl lg:text-3xl rowdies-regular gradient-text mb-2 text-right md:text-left mt-3 md:mt-0">Add a Project</h1>
     

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row md:space-x-8 w-full bg-[#0F1724] rounded-lg shadow-lg">
        {/* Form */}
        <div className="w-full">
          <form onSubmit={handleLogin}  className="space-y-5">
          
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Title</label>
              <input
              name='title'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Image</label>
              <input
              name='image'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="URL"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Description</label>
              <input
              name='description'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Description"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Live Link</label>
              <input
              name='live'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Live Link"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Client Repo</label>
              <input
              name='client_repo'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Client Repo"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Server Repo</label>
              <input
              name='server_repo'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Server Repo"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Technologies (Each technology must be separated by a comma)</label>
              <input
              name='technologies'
                type="text"
                className="w-full p-4 bg-[#151F2F] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:[#8367D4]"
                placeholder="Technologies"
              />
            </div>
    
            <button
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-[#9071E9] to-[#2DAEDD] rounded-lg font-semibold hover:from-[#2DAEDD] hover:to-[#9071E9]  ">
             {isLoading?'Adding...': 'Add'}
            </button>
          </form>
        </div>

      </div>


        {/* Manage */}
      <h1 className=" text-xl md:text-2xl lg:text-3xl rowdies-regular gradient-text mb-2 text-right md:text-left mt-16">Manage Projects </h1>
  {/* grid  */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-6 mt-16">
         
         {/* boxes  */}
 {projects?.map(project => 
         <div key={project._id} className="box space-y-6 gradient-project-card p-[1px] rounded-2xl relative group">

<div className='hidden group-hover:block absolute inset-0 h-full w-full bg-white/10 backdrop-blur-sm rounded-xl'>
        <button onClick={()=> toast.error('Something went wrong')} className='bg-slate-700 p-2 mr-2'>Edit</button>
        <button className='bg-slate-700 p-2 mr-2' onClick={()=> handleDeleteProject(project._id)}>Delete</button>
        </div>
                
                <section className="bg-[#0F1724] rounded-2xl  h-full">
                      {/* image part  */}
                 <div className="h-[200px] md:h-[190px] lg:h-[220px] xl:h-[280px] w-full rounded-lg">
                 <img src={project?.image}  className=" w-full h-full rounded-t-2xl object-cover object-top"/>
                 </div>

                    {/* text part  */}
                    <div className="p-5 lg:p-6 xl:p-7">
                  <h3 className="gradient-text inter-bold text-[22px] mb-3">{project.title}</h3>
<h5 className="text-white/70 inter-thin-extra mt-2 text-sm">{project?.description} Technology : <b> {project?.technologies}</b></h5>
                          
                    </div>
                </section>
                </div>  )}

       </div>
    </div>
  </Container>
  );
};

export default ManageProjects;

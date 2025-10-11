// import Container from "../components/Container";
// import { toast } from "sonner";
// import {
//   useCreateBlogMutation,
//   useUpdateBlogMutation,
//   useDeleteBlogMutation,
//   useGetBlogsQuery,
// } from "../redux/features/blogs/blogApi";
// import { PiClockCounterClockwiseBold } from "react-icons/pi";
// import { useState } from "react";
// import { MdEdit, MdDelete } from "react-icons/md";

// // --- UpdateBlogModal Component (Provided by user) ---
// const UpdateBlogModal = ({ blog, setOpen }) => {
//   const [updateBlog] = useUpdateBlogMutation();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const form = new FormData(e.target);

//     const blogData = {
//       title: form.get("title"),
//       image: form.get("image"),
//       description: form.get("description"),
//     };

//     try {
//       const response = await updateBlog({
//         blogId: blog?._id,
//         payload: blogData,
//       }).unwrap();

//       if (response?.success) {
//         setOpen(false);
//         toast.success("Updated the blog");
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <section className="w-screen fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center py-10 overflow-y-auto px-4">
//       <form
//         className="w-full md:w-[700px] bg-gray-900 rounded-lg shadow-xl p-6 relative border border-gray-700" // Consistent modal styling
//         onSubmit={onSubmit}
//       >
//         <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-6 text-center">
//           Update Blog Post
//         </h2>{" "}
//         {/* Consistent modal title */}
//         <div className="mb-4">
//           <label
//             htmlFor="title"
//             className="block text-sm font-medium text-gray-400 mb-1"
//           >
//             Blog Title
//           </label>
//           <input
//             id="title"
//             name="title"
//             type="text"
//             defaultValue={blog?.title}
//             placeholder="Post Title"
//             className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors" // Consistent input styling
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="image"
//             className="block text-sm font-medium text-gray-400 mb-1"
//           >
//             Image URL
//           </label>
//           <input
//             id="image"
//             name="image"
//             type="text"
//             defaultValue={blog?.image}
//             placeholder="Image URL"
//             className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors" // Consistent input styling
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="description"
//             className="block text-sm font-medium text-gray-400 mb-1"
//           >
//             Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             rows={5}
//             defaultValue={blog?.description}
//             placeholder="Blog Description"
//             className="w-full p-3 bg-gray-800/70 border border-gray-700 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-y" // Consistent input styling
//             required
//           />
//         </div>
//         <div className="flex justify-end space-x-3">
//           <button
//             type="submit"
//             className="px-8 py-2 font-semibold text-white rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/30" // Consistent button styling
//           >
//             Modify
//           </button>
//           <button
//             type="button"
//             onClick={() => setOpen(false)}
//             className="px-8 py-2 font-semibold text-gray-300 rounded-md bg-gray-700 hover:bg-gray-600 transition-all duration-300" // Consistent button styling
//           >
//             Close
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };
// // --- End of UpdateBlogModal Component ---

// const ManageBlogs = () => {
//   const [createBlog, { isLoading }] = useCreateBlogMutation();
//   const [deleteBlog] = useDeleteBlogMutation();
//   const [updateModal, setUpdateModal] = useState(false);
//   const [updatedBlog, setUpdatedBlog] = useState({});
//   const { data } = useGetBlogsQuery();
//   const blogs = data?.data;

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const form = new FormData(e.target);

//     const newBlog = {
//       image: form.get("image"),
//       title: form.get("title"),
//       description: form.get("description"),
//       time: new Date().toISOString(),
//     };

//     try {
//       const response = await createBlog(newBlog).unwrap();

//       if (response?.success) {
//         toast.success("You added a new blog");
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };

//   const handleDeleteBlog = (blogId) => {
//     const result = confirm("Are you sure you want to delete this blog?"); // Clarified confirm message
//     result && deleteBlog(blogId);
//   };

//   return (
//     <Container>
//       <div className="bg-gray-950 text-white flex flex-col justify-center items-center px-5 md:px-10 lg:px-16 py-10 rounded-lg shadow-2xl mx-auto my-10">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8 text-center md:text-left w-full">
//           {" "}
//           {/* Consistent heading style */}
//           Add a Blog
//         </h1>

//         <div className="flex flex-col md:flex-row md:space-x-8 w-full bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-800 p-8">
//           {" "}
//           {/* Consistent container styling */}
//           <div className="w-full">
//             <form onSubmit={handleLogin} className="space-y-5">
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-300">
//                   Title
//                 </label>
//                 <input
//                   name="title"
//                   type="text"
//                   className="w-full p-4 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-200 placeholder-gray-500" // Consistent input styling
//                   placeholder="Blog Title" // Clarified placeholder
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-300">
//                   Image URL
//                 </label>
//                 <input
//                   name="image"
//                   type="text"
//                   className="w-full p-4 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-200 placeholder-gray-500" // Consistent input styling
//                   placeholder="Image URL"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-gray-300">
//                   Description
//                 </label>
//                 <textarea
//                   name="description"
//                   rows={5} // Adjusted rows for consistency
//                   className="w-full p-4 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-200 placeholder-gray-500 resize-y" // Consistent input styling
//                   placeholder="Blog Description" // Clarified placeholder
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/40 hover:from-purple-700 hover:to-blue-700 transition-all duration-300" // Consistent button styling
//               >
//                 {isLoading ? "Adding..." : "Add Blog"}{" "}
//                 {/* Clarified button text */}
//               </button>
//             </form>
//           </div>
//         </div>

//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8 text-center md:text-left w-full mt-16">
//           {" "}
//           {/* Consistent heading style */}
//           Manage Blogs
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-6 mt-8 w-full">
//           {blogs?.map((blog) => (
//             <div
//               key={blog._id}
//               className="bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-2xl shadow-xl shadow-purple-900/30 relative group overflow-hidden" // Consistent card styling
//             >
//               {updateModal && (
//                 <UpdateBlogModal blog={updatedBlog} setOpen={setUpdateModal} />
//               )}

//               <div className="absolute inset-0 h-full w-full bg-black/70 flex justify-center items-center gap-4 rounded-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 {" "}
//                 {/* Consistent overlay styling */}
//                 <button
//                   onClick={() => {
//                     setUpdatedBlog(blog);
//                     setUpdateModal(true);
//                   }}
//                   className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg" // Consistent button styling
//                   title="Edit Blog"
//                 >
//                   <MdEdit size={24} /> {/* Added icon */}
//                 </button>
//                 <button
//                   className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-lg" // Consistent button styling
//                   onClick={() => handleDeleteBlog(blog._id)}
//                   title="Delete Blog"
//                 >
//                   <MdDelete size={24} /> {/* Added icon */}
//                 </button>
//               </div>

//               <section className="bg-gray-900/90 backdrop-blur-sm rounded-2xl h-full flex flex-col">
//                 {" "}
//                 {/* Consistent inner card styling */}
//                 <div className="h-[200px] md:h-[190px] lg:h-[220px] xl:h-[300px] w-full rounded-t-2xl overflow-hidden">
//                   <img
//                     src={blog?.image}
//                     className="w-full h-full rounded-t-2xl object-cover object-top transition-transform duration-500 group-hover:scale-105" // Image zoom on hover
//                     alt={blog.title} // Added alt text
//                   />
//                 </div>
//                 <div className="py-5 lg:py-6 xl:py-7 px-5 flex-grow flex flex-col justify-between">
//                   <h3 className="text-gray-200 font-semibold text-lg lg:text-xl mb-3 leading-tight">
//                     {" "}
//                     {/* Consistent title styling */}
//                     {blog.title}
//                   </h3>

//                   <time className="flex items-center gap-2 text-gray-400 font-light text-sm lg:text-base">
//                     {" "}
//                     {/* Consistent timestamp styling */}
//                     <PiClockCounterClockwiseBold className="text-xl text-purple-400" />{" "}
//                     {/* Consistent icon color */}
//                     {new Date(blog?.time).toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}{" "}
//                     {/* Consistent date formatting */}
//                   </time>
//                 </div>
//               </section>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ManageBlogs;

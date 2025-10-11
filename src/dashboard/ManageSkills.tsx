// import Container from "../components/Container";
// import { toast } from "sonner";
// import {
//   useCreateSkillMutation,
//   useDeleteSkillMutation,
//   useGetSkillsQuery,
// } from "../redux/features/skills/skillApi";
// import React from "react";
// import { motion, type Variants } from "framer-motion";
// import { MdEdit, MdDelete } from "react-icons/md";

// const UpdateSkillModal = ({
//   skill,
//   setOpen,
// }: {
//   skill: any;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }) => {
//   return (
//     <div className="w-screen fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center py-10 px-4">
//       <div className="bg-gray-900 rounded-lg p-6 text-white text-center">
//         <h2 className="text-xl font-bold mb-4">Update Skill</h2>
//         <p>
//           Update functionality for this skill ({skill.name}) is coming soon!
//         </p>
//         <button
//           onClick={() => setOpen(false)}
//           className="mt-6 px-4 py-2 bg-purple-600 rounded"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// interface SkillItem {
//   _id: string;
//   name: string;
//   logo: string;
//   transition?: string;
// }

// interface NewSkillPayload {
//   name: string;
//   logo: string;
//   transition?: string;
// }

// interface SkillsApiResponse {
//   success: boolean;
//   message: string;
//   data: SkillItem[];
// }

// interface CreateSkillApiResponse {
//   data: {
//     success: boolean;
//     message: string;
//     data: SkillItem;
//   };
//   error?: {
//     data: {
//       message: string;
//     };
//   };
// }

// interface DeleteSkillApiResponse {
//   data: {
//     success: boolean;
//     message: string;
//   };
//   error?: {
//     data: {
//       message: string;
//     };
//   };
// }

// const titleVariants: Variants = {
//   hidden: { opacity: 0, y: -50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const formSectionVariants: Variants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       staggerChildren: 0.1,
//       delayChildren: 0.2,
//     },
//   },
// };

// const formInputVariants: Variants = {
//   hidden: { opacity: 0, x: -30 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const buttonVariants: Variants = {
//   hover: { scale: 1.02, boxShadow: "0px 10px 15px rgba(128, 90, 213, 0.4)" },
//   tap: { scale: 0.98 },
// };

// const skillCardVariants: Variants = {
//   hidden: { opacity: 0, y: 50, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.7,
//       ease: "easeOut",
//     },
//   },
//   hover: {
//     scale: 1.02,
//     boxShadow: "0px 15px 30px rgba(128, 90, 213, 0.4)",
//     transition: { duration: 0.3 },
//   },
// };

// const overlayButtonsVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.3 } },
// };

// const ManageSkills: React.FC = () => {
//   const [createSkill, { isLoading }] = useCreateSkillMutation();
//   const [deleteSkill] = useDeleteSkillMutation();
//   const {
//     data,
//     isLoading: skillsLoading,
//     isError: skillsError,
//   } = useGetSkillsQuery<SkillsApiResponse>(undefined);
//   const skills: SkillItem[] = data?.data || [];

//   const [updateModal, setUpdateModal] = React.useState<boolean>(false);
//   const [updatedSkill, setUpdatedSkill] = React.useState<SkillItem | {}>({});

//   const handleCreateSkill = async (
//     e: React.FormEvent<HTMLFormElement>
//   ): Promise<void> => {
//     e.preventDefault();

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     const name = formData.get("name") as string;
//     const logo = formData.get("logo") as string;
//     const transition = formData.get("transition") as string;

//     const newSkill: NewSkillPayload = { name, logo, transition };

//     if (!name || !logo) {
//       toast.error("Please fill out all required fields (Name, Logo URL).");
//       return;
//     }

//     try {
//       const response: CreateSkillApiResponse = await createSkill(
//         newSkill
//       ).unwrap();

//       if (response?.data?.success) {
//         toast.success("New skill added successfully!");
//         form.reset();
//       } else {
//         toast.error(response?.data?.message || "Failed to add new skill.");
//       }
//     } catch (error: any) {
//       console.error("Error adding skill:", error);
//       toast.error(
//         error.data?.message || "Something went wrong while adding the skill."
//       );
//     }
//   };

//   const handleDeleteSkill = async (skillId: string): Promise<void> => {
//     const result = confirm(
//       "Are you sure you want to delete this skill? This action cannot be undone."
//     );
//     if (result) {
//       try {
//         const response: DeleteSkillApiResponse = await deleteSkill(
//           skillId
//         ).unwrap();
//         if (response?.data?.success) {
//           toast.success("Skill deleted successfully!");
//         } else {
//           toast.error(response?.data?.message || "Failed to delete skill.");
//         }
//       } catch (error: any) {
//         console.error("Error deleting skill:", error);
//         toast.error(
//           error.data?.message ||
//             "Something went wrong while deleting the skill."
//         );
//       }
//     }
//   };

//   if (skillsLoading) {
//     return (
//       <div className="text-center text-white py-20">
//         Loading skills for management...
//       </div>
//     );
//   }

//   if (skillsError) {
//     return (
//       <div className="text-center text-red-500 py-20">
//         Failed to load skills for management.
//       </div>
//     );
//   }

//   return (
//     <Container>
//       <div className="bg-gray-950 text-white flex flex-col justify-center items-center px-5 md:px-10 lg:px-16 py-10 rounded-lg shadow-2xl mx-auto my-10">
//         <motion.h1
//           className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8 text-center md:text-left w-full"
//           initial="hidden"
//           whileInView="visible"
//           variants={titleVariants}
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           ADD A SKILL
//         </motion.h1>

//         <motion.div
//           className="flex flex-col md:flex-row w-full bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-800 p-8"
//           initial="hidden"
//           whileInView="visible"
//           variants={formSectionVariants}
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           <div className="w-full">
//             <form onSubmit={handleCreateSkill} className="space-y-5">
//               <motion.div className="space-y-2" variants={formInputVariants}>
//                 <label
//                   htmlFor="create-skill-name"
//                   className="block text-sm font-medium text-gray-300"
//                 >
//                   Technology Name
//                 </label>
//                 <input
//                   id="create-skill-name"
//                   name="name"
//                   type="text"
//                   className="w-full p-4 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-200 placeholder-gray-500"
//                   placeholder="e.g., React, Node.js"
//                   required
//                 />
//               </motion.div>
//               <motion.div className="space-y-2" variants={formInputVariants}>
//                 <label
//                   htmlFor="create-skill-logo"
//                   className="block text-sm font-medium text-gray-300"
//                 >
//                   Logo URL
//                 </label>
//                 <input
//                   id="create-skill-logo"
//                   name="logo"
//                   type="text"
//                   className="w-full p-4 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-200 placeholder-gray-500"
//                   placeholder="Image URL for the logo"
//                   required
//                 />
//               </motion.div>
//               <motion.div className="space-y-2" variants={formInputVariants}>
//                 <label
//                   htmlFor="create-skill-transition"
//                   className="block text-sm font-medium text-gray-300"
//                 >
//                   AOS Transition (Optional)
//                 </label>
//                 <input
//                   id="create-skill-transition"
//                   name="transition"
//                   type="text"
//                   className="w-full p-4 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 text-gray-200 placeholder-gray-500"
//                   placeholder="e.g., fade-right, fade-up"
//                 />
//               </motion.div>

//               <motion.button
//                 type="submit"
//                 className="w-full p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white shadow-lg shadow-purple-500/40 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
//                 whileHover="hover"
//                 whileTap="tap"
//                 variants={buttonVariants}
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Adding..." : "Add Skill"}
//               </motion.button>
//             </form>
//           </div>
//         </motion.div>

//         <motion.h1
//           className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8 text-center md:text-left w-full mt-16"
//           initial="hidden"
//           whileInView="visible"
//           variants={titleVariants}
//           viewport={{ once: true, amount: 0.5 }}
//         >
//           MANAGE SKILLS
//         </motion.h1>

//         <section className="w-full mt-8">
//           <div className="grid grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-y-14 gap-x-3">
//             {skills.length === 0 ? (
//               <p className="text-gray-400 text-center col-span-full">
//                 No skills available to manage.
//               </p>
//             ) : (
//               skills.map((skill, index) => (
//                 <motion.div
//                   key={skill._id || index}
//                   className="flex flex-col justify-between items-center gap-4 relative group"
//                   initial="hidden"
//                   whileInView="visible"
//                   whileHover="hover"
//                   variants={skillCardVariants}
//                   viewport={{ once: true, amount: 0.2 }}
//                 >
//                   <motion.div
//                     className="absolute inset-0 h-full w-full bg-black/70 flex justify-center items-center gap-4 rounded-xl z-10"
//                     initial="hidden"
//                     animate={
//                       updateModal && updatedSkill?._id === skill._id
//                         ? "hidden"
//                         : "visible"
//                     }
//                     variants={overlayButtonsVariants}
//                     transition={{ ease: "easeOut", duration: 0.2 }}
//                     style={{ opacity: 0, pointerEvents: "none" }}
//                     whileHover={{ opacity: 1, pointerEvents: "auto" }}
//                   >
//                     <button
//                       onClick={() => {
//                         setUpdatedSkill(skill);
//                         setUpdateModal(true);
//                       }}
//                       className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
//                       title="Edit Skill"
//                     >
//                       <MdEdit size={24} />
//                     </button>
//                     <button
//                       className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors shadow-lg"
//                       onClick={() => handleDeleteSkill(skill._id)}
//                       title="Delete Skill"
//                     >
//                       <MdDelete size={24} />
//                     </button>
//                   </motion.div>
//                   <img
//                     src={skill.logo}
//                     className="w-14 md:w-14 lg:w-16 xl:w-20 mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
//                     alt={`${skill.name} logo`}
//                   />
//                   <p className="text-gray-300 text-sm md:text-base xl:text-lg text-center uppercase font-medium">
//                     {skill.name}
//                   </p>
//                 </motion.div>
//               ))
//             )}
//           </div>
//         </section>
//       </div>
//       {updateModal && (
//         <UpdateSkillModal
//           skill={updatedSkill as SkillItem}
//           setOpen={setUpdateModal}
//         />
//       )}
//     </Container>
//   );
// };

// export default ManageSkills;

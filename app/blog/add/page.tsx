"use client";

import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
const postBlog = async ({
  title,
  description,
} : {
  title: string;
  description: string;
}) => {
  const res = fetch("http://localhost:3000/blog/add",
   {
    method: "POST",
    body: JSON.stringify({
    title,
    description
   }),
   //@ts-ignore
   "Content-Type": "application/json",
});
return (await res).json();
};
const AddBlog = () => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(titleRef.current && descriptionRef.current) {
      toast.loading("Sending Request", { id: "1"});
      await postBlog({
         title: titleRef.current?.value,
         description: descriptionRef.current?.value
      });
      toast.success("Done", { id: "1"});


    }
    
  }
  return (
    <>
    <Toaster />
    <div className="w-full m-auto flex my">
      <div className="flex flex-col justify-center items-center m-auto">
        <p className="text-2xl text-slate-200 font-bold p-3">
          Add A Wonderful Blog
        </p>
        <form onSubmit={handleSubmit}>
           <input ref={titleRef} placeholder="Enter Title" type="text" className="rounded-md px-4 py-2 my-2" />
           <textarea ref={descriptionRef} placeholder="Enter text" name="" id="" cols={30} rows={10 } className="rounded-md px-4 py-2 w-full my-2"></textarea>
           <button type="submit" className="font-semibold px-4 py-2 shadow-xl rounded-lg m-auto bg-slate-300 hover:bg-slate-100">Submit</button>
        </form>
      </div>
    </div>
    </>
  )
};

export default AddBlog
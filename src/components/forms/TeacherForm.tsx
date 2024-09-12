"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface TeacherFormProps {
    type: "create" | "update";
    data: any;
}

const schema = z.object({
    username: z.string().min(3, {message:'Username must be at least 3 characters long!'}).min(20, {message: 'Username must be at most 20 characters long!'}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(8, {message:'Password must be at least 8 characters long!'}),
    firstName: z.string().min(1, {message:'First name is required!'}),
    lastName: z.string().min(1, {message:'Last name is required!'}),
    phone: z.string().min(1, {message:'Last name is required!'}),
    address: z.string().min(1, {message:'Address name is required!'}), 
    birthday: z.date({message:'Address name is required!'}),
    sex: z.enum(['Male', 'Female'], {message:'Sex is required!'}),
    img: z.instanceof(File, {message:'Image is required!'}),
});

const TeacherForm: React.FC<TeacherFormProps> = ({type, data}) => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <form className="flex flex-col gap-8">
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create Teacher" : "Update Teacher"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">Authentication Information</span>
      <input type="text" {...register("username")} className="w-full ring-[1.5px] ring-gray-300 p-2 rounded-md bg-transparent" placeholder="Username" />
      <span className="text-xs text-gray-400 font-medium">Personal Information</span>
    </form>
  );
}

export default TeacherForm
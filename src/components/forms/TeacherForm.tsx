"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import InputField from "../InputField";

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

type Input = z.infer<typeof schema>;

const TeacherForm: React.FC<TeacherFormProps> = ({type, data}) => {
  const {register, handleSubmit, formState: {errors}} = useForm<Input>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit(data => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create Teacher" : "Update Teacher"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <InputField
        label="Username"
        name="username"
        defaultValue={data?.username}
        error={errors.username}
        register={register}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        defaultValue={data?.email}
        error={errors.email}
        register={register}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        defaultValue={data?.password}
        error={errors.password}
        register={register}
      />

      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
}

export default TeacherForm
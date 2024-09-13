"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";
import InputField from "../InputField";

interface StudentFormProps {
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
    bloodType: z.string().min(1, {message:'Blood type name is required!'}), 
    birthday: z.date({ message:'Birthday is required!'}),
    sex: z.enum(['Male', 'Female'], {message:'Sex is required!'}),
    img: z.instanceof(File, {message:'Image is required!'}),
});

type Input = z.infer<typeof schema>;

const StudentForm: React.FC<StudentFormProps> = ({type, data}) => {
  const {register, handleSubmit, formState: {errors}} = useForm<Input>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit(data => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create student" : "Update student"}
      </h1>
      <div className="overflow-y-scroll h-96 p-2">
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
        <InputField
          label="Phone"
          name="phone"
          type="phone"
          defaultValue={data?.phone}
          error={errors.phone}
          register={register}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          error={errors.address}
          register={register}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          error={errors.bloodType}
          register={register}
        />
        <InputField
          label="Birthday"
          name="birthday"
          type="date"
          defaultValue={data?.birthday}
          error={errors.birthday}
          register={register}
        />
        <div className="flex flex-col gap-2 pb-2 w-full">
          <label htmlFor="username" className="text-xs text-gray-500">
            Sex
          </label>
          <select
            className="w-full ring-[1.5px] ring-gray-300 p-2 rounded-md bg-transparent"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male1">Male</option>
            <option value="female1">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 pb-2 w-full">
          <label htmlFor="img" className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" >
            <Image src="/upload.png" alt="image" width={28} height={28} /> 
            <span className="w">Upload Image</span>
          </label>
          <input type="file" id="img" className="hidden" {...register("img")} /> 
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
}

export default StudentForm
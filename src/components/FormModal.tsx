"use client"

import Image from "next/image";
import { useState } from "react";

//import { useState } from "react";

interface FormModalProps {
    table: | "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "event" | "announcement"; 
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}

const FormModal: React.FC<FormModalProps> = ({table, type, data, id}) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor =
      type === "create"
        ? "bg-lamaYellow"
        : type === "update"
        ? "bg-lamaSky"
        : "bg-lamaPurple";
    const [open, setOpen] = useState(false);

    const Form = () => {
      return type === "delete" && id ? (
        <form action="" className="flex flex-col gap-4 p-4">
          <span className="text-center font-medium">Are you sure you want to delete this {table}?</span>
          <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delete</button>
        </form>
        ) : (
          "create or update form"
        )
    }
    
    return (
      <>
          <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`} onClick={() => setOpen(!open)}> 
              <Image src={`/${type}.png`} alt={`Image ${type}`} width={16} height={16} />  
          </button>
          
          {open && (
            <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 flex items-center justify-center">
              <div className="bg-white rounded-md p-4 max-w-lg relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                <Form />
                <button className="absolute top-4 right-4 cursor-pointer" onClick={() => setOpen(!open)}>
                  <Image src="/close.png" alt="close" width={14} height={14} />
                </button>
              </div>
            </div>
          )}
      </>

    )
}

export default FormModal
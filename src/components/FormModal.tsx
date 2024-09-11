"use client"

import Image from "next/image";

//import { useState } from "react";

interface FormModalProps {
    table: | "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "event" | "announcement"; 
    type: "create" | "update" | "delete";
    data?: any;
    id?: number;
}

const FormModal: React.FC<FormModalProps> = ({table, type, data, id}) => {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-lamaYellow" : type === "update" ? "bg-lamaSky" : "bg-lamaPurple";
    
  return (
    <>
        <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}>
            <Image src={`/${type}.png`} alt={`Image ${type}`} width={16} height={16} />  
        </button>
    </>

  )
}

export default FormModal
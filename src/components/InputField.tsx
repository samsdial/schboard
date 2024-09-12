import React from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps {
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({label, type = "text", register, name, defaultValue, error, inputProps}) => { 

  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label htmlFor="username" className="text-xs text-gray-500">
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        className="w-full ring-[1.5px] ring-gray-300 p-2 rounded-md bg-transparent"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
}

export default InputField
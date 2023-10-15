"use client"

import { ComponentProps } from "react";

type FormSubmitButtonProps ={
    children: React.ReactNode;
    className?: string;

} & ComponentProps<'button'>

export default function FormSubmitButton({children, className}: FormSubmitButtonProps){
    return (
        <button className={`hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`} >{children}</button>
    )
}
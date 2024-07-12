import { twMerge } from "tailwind-merge"
import { buttonClass } from "./deafultClasses"


const buttonVariantClasses = {
    default: buttonClass,
    outline: twMerge(buttonClass, ""),
    ghost: twMerge(buttonClass, ""),
    link: twMerge(buttonClass, ""),
}



export {
    buttonVariantClasses,
}
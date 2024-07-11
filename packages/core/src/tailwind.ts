import { twMerge } from "tailwind-merge"

const buttonDeafultClass = ""
const buttonVariantClasses = {
    default: buttonDeafultClass,
    outline: twMerge(buttonDeafultClass, ""),
    ghost: twMerge(buttonDeafultClass, ""),
    link: twMerge(buttonDeafultClass, ""),
}



export { buttonVariantClasses }
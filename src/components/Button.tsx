import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "outlined" | "danger" | "green" | "login";
}

function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primaryDarker border-none h-[60px] w-full",
    outlined:
      "bg-transparent border-2 border-grayPrimary text-grayPrimary hover:bg-grayPrimary hover:text-white h-[60px]",
    green:
      "text-greenPrimary border-greenPrimary border hover:bg-greenPrimary bg-transparent hover:text-white h-[60px] w-full ",
    danger:
      "text-redPrimary border-redPrimary border hover:bg-redPrimary bg-transparent hover:text-white h-[60px]",
    login:
      "bg-primary text-white hover:bg-primaryDarker hover:text-white w-[300px] h-[60px]",
  };

  const _className = twMerge(
    variantClasses[variant],
    "appearance-none rounded-lg p-2 text-sm font-medium shadow transition-all",
    className
  );

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  );
}

export default Button;

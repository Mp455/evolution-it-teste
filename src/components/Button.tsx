import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "outlined" | "danger" | "green";
}

function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primaryDarker border-none h-[50px]",
    outlined:
      "bg-transparent border-2 border-grayPrimary text-grayPrimary hover:bg-grayPrimary hover:text-white h-[50px]",
    green:
      "text-greenPrimary border-greenPrimary border hover:bg-greenPrimary bg-transparent hover:text-white h-[50px]",
    danger:
      "text-redPrimary border-redPrimary border hover:bg-redPrimary bg-transparent hover:text-white h-[50px]",
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

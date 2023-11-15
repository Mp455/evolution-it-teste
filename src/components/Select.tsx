import { ComponentPropsWithoutRef, LegacyRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  // Corrigido para "select"
  error?: boolean;
  errorMessage?: string;
  options: string[];
}

function Select(
  { className, error, errorMessage, options, ...props }: SelectProps,
  ref: LegacyRef<HTMLSelectElement> | undefined // Corrigido para HTMLSelectElement
) {
  const inputClassName = twMerge(
    "rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-orange placeholder-black placeholder-opacity-20 outline-none transition-all",
    error ? "border-red-500" : "focus:ring-1 focus:ring-primary",
    className
  );

  return (
    <div className="flex w-full flex-col">
      <select ref={ref} className={inputClassName} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && errorMessage && (
        <span className="mt-1 text-xs text-red-400">{errorMessage}</span>
      )}
    </div>
  );
}

export default forwardRef(Select);

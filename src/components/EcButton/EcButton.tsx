import { MouseEventHandler, ReactNode, Ref } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

const EcButton = ({
  children,
  className,
  id,
  variant,
  loading = false,
  disabled = false,
  onClick,
  type = "simple",
  ref,
  loadingText,
  ...props
}: {
  children: ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "simple" | "icon" | "submit";
  id?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  ref?: Ref<HTMLButtonElement>;
  loadingText?: string;
}) => {
  if (type === "icon") {
    if (loading) {
      return (
        <Button
          disabled
          id={id}
          className={twMerge(
            "bg-base-100 flex justify-center items-center text-xs",
            className
          )}
          {...props}
        >
          {children}
        </Button>
      );
    }
    return (
      <Button
        disabled={disabled}
        variant={variant}
        id={id}
        className={twMerge(
          "active:scale-95 transition-all select-none aspect-square",
          className
        )}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
  if (loading) {
    return (
      <Button disabled {...props} className={twMerge(className)} id={id}>
        {loadingText ? loadingText : "Loading..."}
      </Button>
    );
  }
  return (
    <Button
      disabled={disabled}
      variant={variant}
      className={twMerge(
        "active:scale-95 transition-all select-none",
        className
      )}
      onClick={onClick}
      id={id}
      {...props}
    >
      {children}
    </Button>
  );
};

export default EcButton;

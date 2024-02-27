import { MouseEventHandler, ReactNode, Ref } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

const EcButton = ({
  children,
  className,
  variant,
  loading = false,
  disabled = false,
  onClick,
  type = "simple",
  ref,
  ...props
}: {
  children: ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "simple" | "icon" | "submit";
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
}) => {
  if (type === "icon") {
    if (loading) {
      return (
        <Button
          disabled
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
      <Button disabled {...props} className={twMerge(className)}>
        Loading...
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
      {...props}
    >
      {children}
    </Button>
  );
};

export default EcButton;

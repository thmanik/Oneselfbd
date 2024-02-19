import { MouseEventHandler, ReactNode, Ref } from "react";
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
  type?: "simple" | "icon";
  ref?: Ref<HTMLButtonElement>;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}) => {
  if (type === "icon") {
    if (loading) {
      return (
        <Button
          disabled
          className={`${className} bg-base-100 flex justify-center items-center text-xs`}
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
        className={`${className} active:scale-95 transition-all select-none aspect-square`}
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
      <Button disabled {...props}>
        Loading...
      </Button>
    );
  }
  return (
    <Button
      disabled={disabled}
      variant={variant}
      className={`${className} active:scale-95 transition-all select-none`}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default EcButton;

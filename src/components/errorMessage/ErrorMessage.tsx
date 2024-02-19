import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const ErrorMessage = ({
  message,
  className,
}: {
  message?:
    | string
    | FieldError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  className?: string;
}) => {
  return (
    <p
      className={twMerge(
        "text-red-600 font-bold pl-2 !mt-2 text-sm",
        className
      )}
    >
      {message as unknown as string}
    </p>
  );
};

export default ErrorMessage;

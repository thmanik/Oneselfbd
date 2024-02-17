import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

const ErrorMessage = ({
  message,
}: {
  message?:
    | string
    | FieldError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}) => {
  return (
    <p className="text-red-600 font-bold pl-2 !mt-2 text-sm">
      {message as unknown as string}
    </p>
  );
};

export default ErrorMessage;

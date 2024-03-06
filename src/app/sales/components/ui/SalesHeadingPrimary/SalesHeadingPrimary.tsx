import { twMerge } from "tailwind-merge";

const SalesHeadingPrimary = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("flex justify-center items-center", className)}>
      <span className="text-center bg-[#edf7fa] py-3 px-10 w-max block rounded-full font-bold text-xl md:text-2xl">
        {title}
      </span>
    </h2>
  );
};

export default SalesHeadingPrimary;

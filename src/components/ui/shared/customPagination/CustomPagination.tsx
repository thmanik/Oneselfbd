import EcButton from "@/components/EcButton/EcButton";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import deletePropFromObj from "@/lib/ec/deletePropFromObj";
import objectToSearchParams from "@/lib/ec/objectToSearchParams";
import { TMeta } from "@/types/response";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { twMerge } from "tailwind-merge";
const CustomPagination = ({
  meta,
  searchParams,
  className,
}: {
  meta: TMeta;
  searchParams: Record<string, string | string[] | undefined>;
  className?: string;
}) => {
  const pageNumbers: number[] = [];
  for (let i = meta?.page - 3; i <= meta?.page + 3; i++) {
    if (i < 1) continue;
    if (i > meta.totalPage) break;
    pageNumbers.push(i);
  }

  const withoutPageProp = deletePropFromObj({ ...searchParams }, "page");
  const newSearchParam = objectToSearchParams(
    withoutPageProp as Record<string, string>
  );
  return (
    <div className={twMerge("mt-5", className)}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <EcButton
              className="relative hover:text-white"
              disabled={Number(searchParams?.page || 0) <= 1}
              variant="ghost"
            >
              <Link
                href={`?page=${Number(searchParams?.page || 1) - 1}${newSearchParam ? "&" + newSearchParam : ""}`}
                className="absolute h-full w-full"
              ></Link>
              <MdOutlineKeyboardDoubleArrowRight className="rotate-180" />
            </EcButton>
          </PaginationItem>
          {pageNumbers?.map((item) => (
            <PaginationItem key={item}>
              <Link
                className={`p-4 ${Number(searchParams?.page || 1) === item && "text-secondary "} rounded-md hover:text-secondary font-bold transition-all`}
                href={`?page=${item}${newSearchParam ? "&" + newSearchParam : ""}`}
              >
                {item}
              </Link>
            </PaginationItem>
          ))}
          <PaginationItem>
            <EcButton
              className="relative hover:text-white"
              disabled={Number(searchParams?.page || 1) >= meta?.totalPage}
              variant="ghost"
            >
              <Link
                href={`?page=${Number(searchParams?.page || 1) + 1}${newSearchParam ? "&" + newSearchParam : ""}`}
                className="absolute h-full w-full"
              ></Link>
              <MdOutlineKeyboardDoubleArrowRight />
            </EcButton>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CustomPagination;

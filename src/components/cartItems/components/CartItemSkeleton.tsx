"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "../../ui/table";
const CartItemSkeleton = () => {
  return (
    <TableRow>
      <TableCell className="font-medium flex gap-3 items-center justify-center">
        <Skeleton className="h-6 w-6 m-5 rounded-full" />
        <div className="hover:text-secondary flex-grow flex gap-3 items-center font-bold flex-wrap text-center">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-4 w-[50px] md:w-[200px]" />
        </div>
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell className="flex justify-center items-center">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell className="space-y-2">
        <Skeleton className="h-4 w-[50px]" />
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
      <TableCell className="flex justify-end">
        <Skeleton className="h-4 w-[50px]" />
      </TableCell>
    </TableRow>
  );
};

export default CartItemSkeleton;

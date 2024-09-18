"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetOrderedProductsQuery } from "@/redux/features/user/userApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "../components/productType/ProductType";
const OrderProductTable = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const { data, isLoading } = useGetOrderedProductsQuery(undefined);
  const router = useRouter();

  useEffect(() => {
    if (data?.data) {
      const total = data.data.reduce(
        (sum: number, product: Product) =>
          sum + (isNaN(product.total) ? 0 : product.total),
        0
      );
      setTotalAmount(total);
    }
  }, [data]);

  const sortedData = data?.data
    ?.slice()
    .sort(
      (a: Product, b: Product) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  const handleViewOrder = (_id: string) => {
    router.push(`/my-account/my-orders/${_id}`);
  };

  return (
    <div className="overflow-x-auto p-2">
      <div className="align-middle border rounded-lg shadow-md max-w-4xl mx-auto lg:max-w-5xl">
        {isLoading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <Table className="min-w-full border-collapse">
            <TableCaption className="text-lg font-semibold mb-4">
              A list of your recent invoices.
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-gray-200">
                <TableHead className="w-[120px] lg:w-[150px] font-bold text-black py-3 px-4">
                  Order ID
                </TableHead>
                <TableHead className="w-[120px] lg:w-[150px] font-bold text-black py-3 px-4">
                  Order Date
                </TableHead>
                <TableHead className="w-[120px] lg:w-[150px] font-bold text-black py-3 px-4">
                  Order Total
                </TableHead>

                <TableHead className="w-[100px] lg:w-[120px] text-right font-bold text-black py-3 px-4">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData?.length > 0 ? (
                sortedData.map((product: Product) => (
                  <TableRow key={product._id} className="hover:bg-gray-100">
                    <TableCell className="font-medium py-3 px-4">
                      {product.orderId}
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      {product.createdAt
                        ? new Date(product.createdAt).toLocaleDateString()
                        : "-"}
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      ${product.total.toFixed(2)}
                    </TableCell>

                    <TableCell className="text-right py-3 px-2">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => handleViewOrder(product._id)}
                      >
                        View Order
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-3 px-4">
                    No Orders found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            {sortedData?.length > 0 && (
              <TableFooter>
                <TableRow className="bg-gray-200">
                  <TableCell className="font-bold py-3 px-4" colSpan={3}>
                    {sortedData.length} Item(s)
                  </TableCell>
                  <TableCell className="text-right font-bold py-3 px-4">
                    ৳ {totalAmount.toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            )}
          </Table>
        )}
      </div>
    </div>
  );
};

export default OrderProductTable;

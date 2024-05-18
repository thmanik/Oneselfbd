import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import config from "@/config/config";
import Image from "next/image";
import React from "react";
import { Product } from "../commonTypes/CommonTypes";

type Props = {
  searchResult: Product[];
  notFoundProducts: string[];
  error: string | null;
};

const ProductTable: React.FC<Props> = ({ searchResult }) => {
  return (
    <div className="overflow-x-auto">
      {searchResult && searchResult.length > 0 && (
        <Table className="w-[85%] ms:w-[97%] mx-auto border-collapse border border-gray-300">
          <thead>
            <TableRow className="bg-gray-200 font-bold">
              <TableCell className="px-4 py-2">Image</TableCell>
              <TableCell className="px-4 py-2">Product Name</TableCell>
              <TableCell className="px-4 py-2">Price</TableCell>
              <TableCell className="px-4 py-2">Quantity</TableCell>
              <TableCell className="px-4 py-2">Warranty Period</TableCell>
              <TableCell className="px-4 py-2">Warranty Status</TableCell>
              <TableCell className="px-4 py-2">Sub-Total</TableCell>
              <TableCell className="px-4 py-2">Action</TableCell>
            </TableRow>
          </thead>
          <TableBody>
            {searchResult.map((order, orderIndex) =>
              order.products.map((product, index) => {
                let warrantyStatus = "No Warranty";
                let remainingDays = -1;

                if (product.warranty) {
                  const endDate = new Date(product.warranty.endsDate);
                  const currentDate = new Date();
                  remainingDays = Math.ceil(
                    (endDate.getTime() - currentDate.getTime()) /
                      (1000 * 3600 * 24)
                  );
                  warrantyStatus =
                    remainingDays < 0
                      ? "Warranty Expired"
                      : `${remainingDays} days left`;
                }

                const warrantyStatusClass =
                  remainingDays < 0 ? "text-red-500" : "text-green-500";

                return (
                  <TableRow
                    key={`${orderIndex}-${index}`}
                    className={
                      orderIndex % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                    }
                  >
                    <TableCell className="px-4 py-2">
                      <div className="w-16 h-12 relative">
                        <Image
                          layout="fill"
                          objectFit="contain"
                          src={`${config.base_url}/${product.image.src}`}
                          alt={product.image.alt}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-2">{product.title}</TableCell>
                    <TableCell className="px-4 py-2">
                      ${product.unitPrice.toFixed(2)}
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      {product.quantity}
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      {product.warranty
                        ? `${product.warranty.startDate} — ${product.warranty.endsDate}`
                        : "N/A"}
                    </TableCell>
                    <TableCell className={`px-4 py-2 ${warrantyStatusClass}`}>
                      {warrantyStatus}
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      ${(product.unitPrice * product.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      <button
                        className={`btn border p-1 rounded-sm hover:bg-green-600`}
                      >
                        Claim Request
                      </button>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default ProductTable;

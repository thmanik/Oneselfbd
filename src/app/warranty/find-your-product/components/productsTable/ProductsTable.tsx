import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import config from "@/config/config";
import {
  ProductToClaim,
  setTableDataToClaim,
} from "@/redux/features/tableData/tableData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Product } from "../commonTypes/CommonTypes";

type Props = {
  searchResult: Product[];
  notFoundProducts: string[] | undefined;
  error: string | null;
};

const ProductTable = ({ searchResult }: Props) => {
  const productsWithWarranty: JSX.Element[] = [];
  const productsWithoutWarranty: JSX.Element[] = [];
  const dispatch = useDispatch();
  const router = useRouter();

  searchResult.forEach((order, orderIndex) => {
    order.products.forEach((product, index) => {
      let warrantyStatus = "No Warranty";
      let remainingDays: number = -1;

      if (product.warranty) {
        const endDate = new Date(product?.warranty?.endsDate);
        const currentDate = new Date();
        remainingDays = Math.ceil(
          (endDate?.getTime() - currentDate?.getTime()) / (1000 * 3600 * 24)
        );
        warrantyStatus =
          remainingDays < 0 ? "Warranty Expired" : `${remainingDays} days left`;
      }

      const warrantyStatusClass =
        remainingDays < 0 ? "text-red-500" : "text-green-500";

      const productRow = (
        <TableRow
          key={`${orderIndex}-${index}`}
          className={orderIndex % 2 === 0 ? "bg-gray-100" : "bg-gray-50"}
        >
          <TableCell className="px-2 md:px-4 py-2">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <Image
                layout="fill"
                objectFit="contain"
                src={`${config?.base_url}/${product?.image?.src} ` || ""}
                alt={product?.image?.alt || ""}
              />
            </div>
          </TableCell>
          <TableCell className="px-2 md:px-4 py-2 text-xs md:text-base">
            {product?.title}
          </TableCell>
          <TableCell className="px-2 md:px-4 py-2 text-xs md:text-base">
            &#2547; {product?.unitPrice?.toFixed(2)}
          </TableCell>
          <TableCell className="px-2 md:px-4 py-2 text-xs md:text-base">
            {product?.quantity}
          </TableCell>
          <TableCell className="px-2 md:px-4 py-2 text-xs md:text-base">
            {product?.warranty
              ? `${product?.warranty?.startDate} — ${product?.warranty?.endsDate}`
              : "N/A"}
          </TableCell>
          <TableCell
            className={`px-2 md:px-4 py-2 ${warrantyStatusClass} text-sm md:text-base`}
          >
            {warrantyStatus}
          </TableCell>
          <TableCell className="px-2 md:px-4 py-2 text-sm md:text-base">
            &#2547; {(product?.unitPrice * product?.quantity)?.toFixed(2)}
          </TableCell>
        </TableRow>
      );

      if (remainingDays >= 0) {
        productsWithWarranty.push(productRow);
      } else {
        productsWithoutWarranty.push(productRow);
      }
    });
  });

  const handleClaimAllClick = () => {
    const productsToClaim = searchResult.reduce(
      (acc: ProductToClaim[], order) => {
        order.products.forEach((product) => {
          if (product.warranty) {
            acc.push({
              warrantyCodes: product.warranty.warrantyCodes.map(
                (wc) => wc.code
              ),
              shippingDetails: order.shipping,
            });
          }
        });
        return acc;
      },
      []
    );

    dispatch(setTableDataToClaim(productsToClaim));
    router.push("/warranty/claim-your-warranty");
  };

  return (
    <div className="overflow-x-auto">
      {productsWithWarranty.length > 0 && (
        <>
          <Table className="w-[90%] sm:w-[85%] mx-auto border-collapse border border-gray-300 mb-8">
            <thead>
              <TableRow className="bg-gray-200 font-bold text-xs md:text-base">
                <TableCell className="px-2 md:px-4 py-2">Image</TableCell>
                <TableCell className="px-2 md:px-4 py-2">
                  Product Name
                </TableCell>
                <TableCell className="px-2 md:px-4 py-2">Price</TableCell>
                <TableCell className="px-2 md:px-4 py-2">Quantity</TableCell>
                <TableCell className="px-2 md:px-4 py-2">
                  Warranty Period
                </TableCell>
                <TableCell className="px-2 md:px-4 py-2">
                  Warranty Status
                </TableCell>
                <TableCell className="px-2 md:px-4 py-2">Sub-Total</TableCell>
              </TableRow>
            </thead>
            <TableBody>{productsWithWarranty}</TableBody>
          </Table>
          <div className="w-[90%] sm:w-[85%] mx-auto">
            <button
              onClick={handleClaimAllClick}
              className="w-full border mt-2 border-blue-500 p-2 rounded-sm hover:bg-blue-500 text-black hover:text-white text-xs md:text-base"
            >
              Claim All
            </button>
          </div>
        </>
      )}

      {productsWithoutWarranty.length > 0 && (
        <>
          <Table className="w-[90%] sm:w-[85%] mx-auto border-collapse border border-gray-300 mt-8">
            <thead>
              <TableRow className="bg-gray-200 font-bold text-xs md:text-base">
                <TableCell className="px-2 md:px-4 py-2">Image</TableCell>
                <TableCell className="px-2 md:px-4 py-2">
                  Product Name
                </TableCell>
                <TableCell className="px-2 md:px-4 py-2">Price</TableCell>
                <TableCell className="px-2 md:px-4 py-2">Quantity</TableCell>
                <TableCell className="px-2 md:px-4 py-2">
                  Warranty Period
                </TableCell>
                <TableCell className="px-2 md:px-4 py-2">
                  Warranty Status
                </TableCell>
                <TableCell className="px-2 md:px-4 py-2">Sub-Total</TableCell>
              </TableRow>
            </thead>
            <TableBody>{productsWithoutWarranty}</TableBody>
          </Table>
          <div className="w-[90%] sm:w-[85%] mx-auto">
            <p className="w-full p-2 font-bold text-sm md:text-xl text-red-600 text-center">
              উক্ত পন্যের ওয়ারেন্টি নেই
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductTable;

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import config from "@/config/config";
import Image from "next/image";

type WarrantyCode = {
  code: string;
};

type ProductImage = {
  src: string;
  alt: string;
};

type Warranty = {
  duration: string;
  startDate: string;
  endsDate: string;
  warrantyCodes: WarrantyCode[];
};

type Product = {
  _id: string;
  orderId: string;
  products: {
    _id: string;
    productId: string;
    title: string;
    image: ProductImage;
    warranty: Warranty;
    unitPrice: number;
    quantity: number;
  }[];
};

type Props = {
  searchResult: Product[];
  notFoundProducts: string[] | undefined;
  error: string | null;
};

const ProductTable = ({ searchResult, notFoundProducts, error }: Props) => (
  <div className="overflow-x-auto">
    {error && <p className="text-red-500 text-center">{error}</p>}
    {searchResult && searchResult.length > 0 && (
      <Table className="w-[85%] ms:w-[97%] mx-auto border-collapse border border-gray-300">
        <thead>
          <TableRow className="bg-gray-200">
            <TableCell className="px-4 py-2">Image</TableCell>
            <TableCell className="px-4 py-2">Name</TableCell>
            <TableCell className="px-4 py-2">Price</TableCell>
            <TableCell className="px-4 py-2">Quantity</TableCell>
            <TableCell className="px-4 py-2">Warranty Period</TableCell>
            <TableCell className="px-4 py-2">Warranty Status</TableCell>
            <TableCell className="px-4 py-2">Subtotal</TableCell>
            <TableCell className="px-4 py-2">Claim Request</TableCell>
          </TableRow>
        </thead>
        <TableBody>
          {searchResult.map((order, orderIndex) =>
            order.products.map((product, index) => {
              const endDate = new Date(product.warranty.endsDate);
              const currentDate = new Date();
              const remainingDays = Math.ceil(
                (endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
              );
              const warrantyStatus =
                remainingDays < 0
                  ? "Warranty Expired"
                  : `${remainingDays} days left`;

              return (
                <tr
                  key={`${orderIndex}-${index}`}
                  className={
                    orderIndex % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                  }
                >
                  <td className="px-4 py-2">
                    <div className="w-16 h-12 relative">
                      <Image
                        layout="fill"
                        objectFit="contain"
                        src={`${config.base_url}/${product.image.src}`}
                        alt={product.image.alt}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2">{product.title}</td>
                  <td className="px-4 py-2">${product.unitPrice.toFixed(2)}</td>
                  <td className="px-4 py-2">{product.quantity}</td>
                  <td className="px-4 py-2">
                    {product.warranty.startDate} - {product.warranty.endsDate}
                  </td>
                  <td className="px-4 py-2">{warrantyStatus}</td>
                  <td className="px-4 py-2">
                    ${(product.unitPrice * product.quantity).toFixed(2)}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className={`btn text-black ${
                        remainingDays < 0
                          ? "bg-gray-400 cursor-not-allowed"
                          : "border border-green-500 p-1   hover:bg-green-600"
                      }`}
                      disabled={remainingDays < 0}
                    >
                      Claim Request
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </TableBody>
      </Table>
    )}
    {notFoundProducts && notFoundProducts.length > 0 && (
      <div className="text-red-500">
        {notFoundProducts.map((code, index) => (
          <p key={index}>{`Product not found: ${code}`}</p>
        ))}
      </div>
    )}
  </div>
);

export default ProductTable;

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import Image from "next/image";

// type Product = {
//   image: string;
//   productName: string;
//   price: number;
//   quantity: number;
//   warrantyDate: string;
//   subtotal: number;
// };
// type Props = {
//   searchResult: Product[];
//   notFoundProducts: string[] | undefined;
//   error: string | null;
// };

// const ProductTable = ({ searchResult, notFoundProducts, error }: Props) => (
//   <div className="cart flex flex-col p-4 overflow-x-auto mx-auto mt-8 w-[85%] ms:w-[97%]">
//     {error && <p className="text-red-500 text-center">{error}</p>}
//     {searchResult && searchResult.length > 0 && (
//       <div className="table-responsive">
//         <Table className="min-w-full">
//           <TableHeader>
//             <TableRow className="bg-gray-100">
//               <TableHead className="px-4 py-2 ">#</TableHead>
//               <TableHead className="px-4 py-2 ">Image</TableHead>
//               <TableHead className="px-4 py-2 ">Name</TableHead>
//               <TableHead className="px-4 py-2">Price</TableHead>
//               <TableHead className="px-4 py-2 ">Quantity</TableHead>
//               <TableHead className="px-4 py-2  ">Warranty Date</TableHead>
//               <TableHead className="px-4 py-2 text-right">Subtotal</TableHead>
//               <TableHead className="px-4 py-2 text-center">
//                 Claim Request
//               </TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {searchResult.map((product, index) => (
//               <TableRow
//                 key={index}
//                 className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
//               >
//                 <TableCell className=" py-2">{index + 1}</TableCell>
//                 <TableCell className="px-4 py-2">
//                   <Image
//                     width={100}
//                     height={80}
//                     src={product?.image}
//                     alt={`Product ${index + 1}`}
//                   />
//                 </TableCell>
//                 <TableCell className=" py-2">{product?.productName}</TableCell>
//                 <TableCell className=" py-2 ">
//                   ${product?.price?.toFixed(2)}
//                 </TableCell>
//                 <TableCell className="px-4 py-2 ">
//                   {product?.quantity}
//                 </TableCell>
//                 <TableCell className="px-4 py-2 me-4">
//                   {product?.warrantyDate}
//                 </TableCell>
//                 <TableCell className="px-4 py-2 text-right">
//                   ${product?.subtotal?.toFixed(2)}
//                 </TableCell>
//                 <TableCell className="px-4 py-2 text-center">
//                   <button className="btn text-green-700">Claim Request</button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     )}
//     {notFoundProducts && notFoundProducts.length > 0 && (
//       <div className="text-red-500">
//         {notFoundProducts.map((code, index) => (
//           <p key={index}>{`পন্য পাওয়া যায়নি: ${code}`}</p>
//         ))}
//       </div>
//     )}
//   </div>
// );

// export default ProductTable;

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

type Product = {
  image: string;
  productName: string;
  price: number;
  quantity: number;
  warrantyDate: string;
  subtotal: number;
};
type Props = {
  searchResult: Product[];
  notFoundProducts: string[] | undefined;
  error: string | null;
};

const ProductTable = ({ searchResult, notFoundProducts, error }: Props) => (
  <div className="cart flex flex-col p-4 overflow-x-auto mx-auto mt-8 w-[85%] ms:w-[97%]">
    {error && <p className="text-red-500 text-center">{error}</p>}
    {searchResult && searchResult.length > 0 && (
      <div className="table-responsive">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="px-4 py-2 ">#</TableHead>
              <TableHead className="px-4 py-2 ">Image</TableHead>
              <TableHead className="px-4 py-2 ">Name</TableHead>
              <TableHead className="px-4 py-2">Price</TableHead>
              <TableHead className="px-4 py-2 ">Quantity</TableHead>
              <TableHead className="px-4 py-2  ">Warranty Date</TableHead>
              <TableHead className="px-4 py-2 text-right">Subtotal</TableHead>
              <TableHead className="px-4 py-2 text-center">
                Claim Request
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {searchResult.map((product, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <TableCell className=" py-2">{index + 1}</TableCell>
                <TableCell className="px-4 py-2">
                  <Image
                    width={100}
                    height={80}
                    src={product.image}
                    alt={`Product ${index + 1}`}
                  />
                </TableCell>
                <TableCell className=" py-2">{product.productName}</TableCell>
                <TableCell className=" py-2 ">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="px-4 py-2 ">{product.quantity}</TableCell>
                <TableCell className="px-4 py-2 me-4">
                  {product.warrantyDate}
                </TableCell>
                <TableCell className="px-4 py-2 text-right">
                  ${product.subtotal.toFixed(2)}
                </TableCell>
                <TableCell className="px-4 py-2 text-center">
                  <button className="btn text-green-700">Claim Request</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )}
    {notFoundProducts && notFoundProducts.length > 0 && (
      <div className="text-red-500">
        {notFoundProducts.map((code, index) => (
          <p key={index}>{`পন্য পাওয়া যায়নি: ${code}`}</p>
        ))}
      </div>
    )}
  </div>
);

export default ProductTable;

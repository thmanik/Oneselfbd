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
import Link from "next/link";

const invoices = [
  {
    orderID: "INV001",
    date: "01/02/2024",
    ship_to: "Manik",
    totalAmount: "$250.00",
    paymentStatus: "Unpaid",
  },

  {
    orderID: "INV001",
    date: "05/02/2024",
    ship_to: "Manik",
    totalAmount: "$200.00",
    paymentStatus: "Paid",
    paymentMethod: "Bank Transfer",
  },
  {
    orderID: "INV001",
    date: "04/02/2024",
    ship_to: "Manik",
    totalAmount: "$300.00",
    paymentStatus: "Pending",
  },
];

const MyOrdersPage = () => {
  return (
    <Table className="border">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-bold text-black">
            Orders ID
          </TableHead>
          <TableHead className="font-bold text-black">DATE</TableHead>
          <TableHead className="font-bold text-black">Ship To</TableHead>
          <TableHead className="font-bold text-black">Order Total</TableHead>
          <TableHead className="font-bold text-black">Status</TableHead>
          <TableHead className="text-right font-bold text-black">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.orderID}>
            <TableCell className="font-medium ">{invoice.orderID}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.ship_to}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell className="text-right">
              <Link href="#">View Order</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>{invoices.length} Item(s)</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default MyOrdersPage;

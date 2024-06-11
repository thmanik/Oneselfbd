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
} from "@/components/ui/table"; // Adjust the import path according to your project structure
import Link from "next/link";
import { useEffect, useState } from "react";

type Invoice = {
  orderID: string;
  date: string;
  ship_to: string;
  totalAmount: string;
  paymentStatus: string;
};

const invoices: Invoice[] = [
  {
    orderID: "INV001",
    date: "01/02/2024",
    ship_to: "Manik",
    totalAmount: "$250.00",
    paymentStatus: "Unpaid",
  },
  {
    orderID: "INV002",
    date: "05/02/2024",
    ship_to: "Manik",
    totalAmount: "$200.00",
    paymentStatus: "Paid",
  },
  {
    orderID: "INV003",
    date: "04/02/2024",
    ship_to: "Manik",
    totalAmount: "$300.00",
    paymentStatus: "Pending",
  },
];

const OrderProductTable = () => {
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const calculateTotalAmount = () => {
      let total = 0;
      invoices.forEach((invoice) => {
        const amount = parseFloat(invoice.totalAmount.replace("$", ""));
        if (!isNaN(amount)) {
          total += amount;
        }
      });
      setTotalAmount(total);
    };

    calculateTotalAmount();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="inline-block align-middle">
        <Table className="min-w-full border-collapse">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] font-bold text-black">
                Orders ID
              </TableHead>
              <TableHead className="font-bold text-black">DATE</TableHead>
              <TableHead className="font-bold text-black">Ship To</TableHead>
              <TableHead className="font-bold text-black">
                Order Total
              </TableHead>
              <TableHead className="font-bold text-black">Status</TableHead>
              <TableHead className="text-right font-bold text-black">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.orderID}>
                <TableCell className="font-medium">{invoice.orderID}</TableCell>
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
              <TableCell className="font-bold" colSpan={5}>
                {invoices.length} Item(s)
              </TableCell>
              <TableCell className="text-right font-bold">
                ${totalAmount.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default OrderProductTable;

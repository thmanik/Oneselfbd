"use client";

import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isActive, setIsActive] = useState<string>("/my-account");

  return (
    <div className="md:col-span-4">
      <div className="py-4">
        <ul className="space-y-3">
          <hr />
          <li className="cursor-pointer">
            <Link href="/my-account">
              <h4
                className={isActive === "/my-account" ? "font-bold" : ""}
                onClick={() => setIsActive("/my-account")}
              >
                My Account
              </h4>
            </Link>
          </li>
          <hr />
          <li className="cursor-pointer">
            <Link href="/my-account/my-orders">
              <h4
                className={
                  isActive === "/my-account/my-orders" ? "font-bold" : ""
                }
                onClick={() => setIsActive("/my-account/my-orders")}
              >
                My Orders
              </h4>
            </Link>
          </li>
          <hr />
          {/* Add more sidebar links as needed */}
          <li className="cursor-pointer text-red-600">
            <Link href="/logout">
              <h4 onClick={() => setIsActive("/logout")}>Logout</h4>
            </Link>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

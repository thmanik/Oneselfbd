"use client";
import Link from "next/link";
import Image from "next/image";
import comingGif from "../../../public/coming.gif";
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      <Image src={comingGif} alt="Coming soon" />
    </div>
  );
}

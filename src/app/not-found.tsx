import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="text-4xl">Page Not Found</h1>
      <p className="my-4">Could not find requested resource</p>
      <Link href="/" className="text-white py-1 px-4 bg-[#29C1F1] rounded-md">
        Return Home
      </Link>
    </div>
  );
}

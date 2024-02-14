import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const SectionTitle = ({
  title,
  href,
  linkText,
}: {
  title: string;
  href?: string;
  linkText?: string;
}) => {
  return (
    <div className="px-2">
      <div
        className={`${href ? "flex justify-between items-center" : "block"}`}
      >
        <h2 className="text-secondary font-semibold border-b-2 border-primary py-3 -pb-1">
          {title}
        </h2>
        {href ? (
          <>
            <Link
              href={href}
              className="hover:text-primary flex gap-2 font-semibold"
            >
              {linkText ?? "See all"}{" "}
              <span>
                <IoIosArrowDroprightCircle className="w-6 h-6" />
              </span>
            </Link>
          </>
        ) : null}
      </div>
      <hr />
    </div>
  );
};

export default SectionTitle;

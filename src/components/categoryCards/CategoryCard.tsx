import { CarouselItem } from "@/components/ui/carousel";
import TCategory from "@/types/categories/categories";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }: { category: TCategory }) => {
  return (
    <CarouselItem className="basis-1/6 mx-5">
      {/* TODO: Change to slug */}
      <Link
        href={`/product-category/${category.name}`}
        className="block text-center p-4 "
      >
        <Image
          src="/images/social_icons/facebook.png"
          alt={category.name}
          width={200}
          height={200}
          className="w-20 h-20 mx-auto hover:scale-95 transition-all"
        />
        <h2 className="mt-2 font-bold">{category.name}</h2>
      </Link>
    </CarouselItem>
  );
};

export default CategoryCard;

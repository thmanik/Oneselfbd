import CategoryCard from "@/components/categoryCards/CategoryCard";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Box from "@/components/ui/ec/Box";
import TCategory from "@/types/categories/categories";

const CategorySection = ({ categories }: { categories: TCategory[] }) => {
  return (
    <Box className="bg-white">
      <Carousel>
        <CarouselContent>
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </CarouselContent>
      </Carousel>
    </Box>
  );
};

export default CategorySection;

import useQuery from "@/hooks/useQuery";
import TCategory from "@/types/categories/categories";
import BottomHeader from "./bottomHeader/BottomHeader";
import MainHeader from "./components/MainHeader";
import TopHeader from "./components/TopHeader";

const Header = async () => {
  const [{ data: categories = [] }] =
    await useQuery<TCategory[]>("/categories");

  return (
    <header className="fixed top-0 left-0 w-full mb-16 z-40 bg-white shadow-lg sm:static sm:shadow-none sm:bg-transparent sm:mb-0">
      <TopHeader />
      <MainHeader categories={categories} />
      <BottomHeader categories={categories} />
    </header>
  );
};

export default Header;

import useQuery from "@/hooks/useQuery";
import TCategory from "@/types/categories/categories";
import BottomHeader from "./bottomHeader/BottomHeader";
import MainHeader from "./components/MainHeader";
import TopHeader from "./components/TopHeader";

const Header = async () => {
  const [{ data: categories = [] }] =
    await useQuery<TCategory[]>("/categories");
  return (
    <header>
      <TopHeader />
      <MainHeader categories={categories} />
      <BottomHeader categories={categories} />
    </header>
  );
};

export default Header;

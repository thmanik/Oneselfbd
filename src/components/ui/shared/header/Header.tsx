import BottomHeader from "./bottomHeader/BottomHeader";
import MainHeader from "./components/MainHeader";
import TopHeader from "./components/TopHeader";

const Header = () => {
  return (
    <header>
      <TopHeader />
      <MainHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;

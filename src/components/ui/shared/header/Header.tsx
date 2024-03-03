import BottomHeader from "./bottomHeader/BottomHeader";
import MainHeader from "./components/MainHeader";
import TopHeader from "./components/TopHeader";

const Header = () => {
  return (
    <div>
      <TopHeader />
      <MainHeader />
      <BottomHeader />
    </div>
  );
};

export default Header;

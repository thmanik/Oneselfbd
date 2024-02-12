import CopyrightContent from "./components/CopyrightContent";
import MainFooterContent from "./components/MainFooterContent";

const Footer = () => {
  return (
    <footer className="pt-10">
      <MainFooterContent />
      <CopyrightContent />
    </footer>
  );
};

export default Footer;

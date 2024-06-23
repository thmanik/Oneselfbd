import CopyrightContent from "./components/CopyrightContent";
import MainFooterContent from "./components/MainFooterContent";

const Footer = () => {
  return (
    <footer className="mt-3">
      <MainFooterContent />
      <CopyrightContent />
    </footer>
  );
};

export default Footer;

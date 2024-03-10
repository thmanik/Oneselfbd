import Image from "next/image";
import logo from "../../public/images/logo/logo.png";
import loadingGif from "../../public/loading.gif";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-[100vh]">
      <Image src={logo} alt="logo" width={100} priority={true}></Image>
      <h1 className="text-4xl">Welcome to OneSelf</h1>
      <Image src={loadingGif} alt="loading" priority={true}></Image>
    </div>
  );
};

export default loading;

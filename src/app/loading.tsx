import Image from "next/image";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-[100vh]">
      <Image
        src="/images/logo/logo.png"
        alt="logo"
        width={100}
        height={100}
        priority={true}
      ></Image>
      <h1 className="text-4xl">Welcome to OneSelf</h1>
      <Image
        src="/images/animations/loading.gif"
        alt="loading"
        width={100}
        height={100}
        priority={true}
      ></Image>
    </div>
  );
};

export default loading;

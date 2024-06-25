import ContainerMax from "@/components/containerMax/ContainerMax";
import { TSingleProduct } from "@/types/products/singleProduct";

const InformationSection = ({ product }: { product: TSingleProduct }) => {
  return (
    <section className="bg-[#116b80] my-5 w-full py-5 md:py-10">
      <ContainerMax>
        <div className="">
          <h3 className="text-[#2cfa2c] text-center text-xl md:text-2xl lg:text-3xl font-bold">
            যে কোন তথ্যের জন্য যোগাযোগ করুন
          </h3>
          <p className="text-white text-center text-xl md:text-2xl lg:text-3xl font-bold my-3">
            মোবাইলঃ +8801967214215
          </p>

          <div className="text-center  md:py-5 flex justify-center items-center">
            <p className="italic text-2xl text-red-600 font-bold bg-yellow-400 w-[95%] md:px-10 py-5 rounded-full">
              লাইটের মুল্য- <span>{product?.price?.salePrice}</span> টাকা
            </p>
          </div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default InformationSection;

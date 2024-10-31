import ContactInformation from "./components/contactInformation/ContactInformation";
import DefaultShippingAddress from "./components/defaultShippingAddress/DefaultShippingAddress";

const MyAccoutPage = () => {
  return (
    <div className="grid md:grid-cols-12 xms:ms-0 xls:ms-0 sm:ms-0 md:ms-8 gap-5">
      <div className="md:col-span-6 sm:col-span-12 ">
        <ContactInformation />
      </div>
      <div className="md:col-span-6 sm:col-span-12">
        <DefaultShippingAddress />
      </div>
    </div>
  );
};

export default MyAccoutPage;

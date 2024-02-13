import CartItems from "@/components/cartItems/CartItems";
import ContainerMax from "@/components/containerMax/ContainerMax";
import config from "@/config/config";

const CartPage = () => {
  return (
    <section className="pt-10 md:pt-20">
      <ContainerMax>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-1 md:col-span-2">
            <CartItems basUrl={config.base_url} />
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            doloribus ad ex, fugit, ipsam sed in quia nisi eveniet saepe qui
            illo. Deleniti voluptate itaque dolorem assumenda mollitia iure
            maiores.
          </div>
        </div>
      </ContainerMax>
    </section>
  );
};

export default CartPage;

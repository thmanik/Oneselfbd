import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TSingleProduct } from "@/types/products/singleProduct";
const ProductDetails = ({ product }: { product: TSingleProduct }) => {
  return (
    <div>
      <Tabs defaultValue="description">
        <TabsList className="overflow-x-auto md:overflow-hidden pl-10 md:pl-0">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="additionalInformation">
            Additional information
          </TabsTrigger>
          <TabsTrigger value="shipping&Return">Shipping & Return</TabsTrigger>
        </TabsList>
        <hr className="w-full" />
        <TabsContent value="description">
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
        </TabsContent>
        <TabsContent value="additionalInformation">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic odit
            officiis obcaecati, quos ratione veritatis dolores dolor amet,
            deserunt minus atque laborum. Ipsam iure rem enim, sapiente rerum
            hic velit.
          </p>
        </TabsContent>
        <TabsContent value="shipping&Return">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic odit
            officiis obcaecati, quos ratione veritatis dolores dolor amet,
            deserunt minus atque laborum. Ipsam iure rem enim, sapiente rerum
            hic velit.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetails;

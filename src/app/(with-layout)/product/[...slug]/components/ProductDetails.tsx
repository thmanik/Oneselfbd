import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TSingleProduct } from "@/types/products/singleProduct";

const ProductDetails = ({ product }: { product?: TSingleProduct }) => {
  return (
    <div>
      <Tabs defaultValue="description">
        <TabsList className="overflow-x-auto md:overflow-hidden pl-10 md:pl-0">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="usageGuidelines">Usage guidelines</TabsTrigger>
          <TabsTrigger value="additionalInfo">
            Additional information
          </TabsTrigger>
        </TabsList>
        <hr className="w-full" />
        <TabsContent value="description">
          <div
            dangerouslySetInnerHTML={{
              __html: (product?.description as string) || "",
            }}
          ></div>
        </TabsContent>
        <TabsContent value="usageGuidelines">
          <div
            dangerouslySetInnerHTML={{
              __html: (product?.usageGuidelines as string) || "",
            }}
          ></div>
        </TabsContent>
        <TabsContent value="additionalInfo">
          <div
            dangerouslySetInnerHTML={{
              __html: (product?.additionalInfo as string) || "",
            }}
          ></div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductDetails;

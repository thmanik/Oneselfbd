import ContainerMax from "@/components/containerMax/ContainerMax";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Featured from "./components/Featured";
import OnSale from "./components/OnSale";
import TopRated from "./components/TopRated";

const SuggestedProducts = () => {
  return (
    <section>
      <ContainerMax>
        <Tabs defaultValue="featured">
          <TabsList>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="onSale">On sale</TabsTrigger>
            <TabsTrigger value="topRated">Top rated</TabsTrigger>
          </TabsList>
          <hr className="w-full" />
          <TabsContent value="featured">
            <Featured />
          </TabsContent>
          <TabsContent value="onSale">
            <OnSale />
          </TabsContent>
          <TabsContent value="topRated">
            <TopRated />
          </TabsContent>
        </Tabs>
      </ContainerMax>
    </section>
  );
};

export default SuggestedProducts;

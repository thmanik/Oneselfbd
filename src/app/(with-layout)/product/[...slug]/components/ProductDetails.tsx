"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TSingleProduct } from "@/types/products/singleProduct";
import { useEffect } from "react";

const ProductDetails = ({ product }: { product?: TSingleProduct }) => {
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      // Add desired attributes
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      iframe.setAttribute("referrerPolicy", "strict-origin-when-cross-origin");
    }
  }, [product?.description]);

  return (
    <div>
      <style jsx>{`
        .video-responsive {
          position: relative;
          padding-bottom: 56.25%; /* Aspect ratio 16:9 (9 / 16 * 100%) */
          height: 0;
          overflow: hidden;
        }
      `}</style>
      <style jsx global>{`
        iframe {
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
          border: 0;
        }
      `}</style>
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
            className="video-responsive"
            dangerouslySetInnerHTML={{
              __html: (product?.description as string) || "",
            }}
          ></div>
        </TabsContent>
        <TabsContent value="usageGuidelines">
          <div
            className="video-responsive"
            dangerouslySetInnerHTML={{
              __html: (product?.usageGuidelines as string) || "",
            }}
          ></div>
        </TabsContent>
        <TabsContent value="additionalInfo">
          <div
            className="video-responsive"
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

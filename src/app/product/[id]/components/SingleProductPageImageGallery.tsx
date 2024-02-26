"use client";
import { useBaseUrl } from "@/hooks/useBaseUrl";
import { TGalleryImage } from "@/types/products/singleProduct";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SingleProductPageImageGallery = ({ image }: { image: TGalleryImage }) => {
  const baseUrl = useBaseUrl();
  const galleryImages = image?.gallery.map((image) => ({
    original: `${baseUrl}/${image.src}`,
    thumbnail: `${baseUrl}/${image.src}`,
    crossOrigin: "anonymous",
  }));

  return (
    <>
      <ImageGallery
        items={galleryImages}
        lazyLoad
        showNav={false}
        //  autoPlay TODO: enable this
        // infinite TODO: enable this
      />
    </>
  );
};

export default SingleProductPageImageGallery;

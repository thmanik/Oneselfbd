"use client";
import { TImage } from "@/types/products/singleProduct";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SingleProductPageImageGallery = ({
  image,
  baseUrl,
}: {
  image: TImage;
  baseUrl: string;
}) => {
  const galleryImages = image?.gallery.map((image) => ({
    original: `${baseUrl}/uploads/public${image.src}`,
    thumbnail: `${baseUrl}/uploads/public${image.src}`,
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

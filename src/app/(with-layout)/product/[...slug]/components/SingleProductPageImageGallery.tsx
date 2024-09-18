"use client";
import config from "@/config/config";
import { TGalleryImage } from "@/types/products/singleProduct";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SingleProductPageImageGallery = ({
  gallery,
}: {
  gallery: TGalleryImage[];
}) => {
  const galleryImages = gallery?.map((image) => ({
    original: `${config.base_url}/${image?.src} `,
    thumbnail: `${config.base_url}/${image?.src}`,
    crossOrigin: "anonymous",
  }));

  return (
    <>
      <ImageGallery
        items={galleryImages}
        lazyLoad
        showNav={false}
        autoPlay // TODO: enable this
        infinite //TODO: enable this
      />
    </>
  );
};

export default SingleProductPageImageGallery;

type TCategory = {
  slug: string;
  _id: string;
  name: string;
  image: {
    _id: string;
    src: string;
    alt: string;
  };
  isFlashSale?: boolean;
};

export default TCategory;

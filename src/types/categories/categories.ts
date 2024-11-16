export type TSubCategory = {
  _id: string;
  slug: string;
  name: string;
  hasProducts: boolean;
};

// Define TCategory type
export type TCategory = {
  hasProducts: boolean;

  slug: string;
  _id: string;
  name: string;
  image: {
    _id: string;
    src: string;
    alt: string;
  };
  subcategories: [
    {
      name: string;
      slug: string;
      image: {
        src: string;
      };
    },
  ];
};

export default TCategory;

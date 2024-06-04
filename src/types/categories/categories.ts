type TCategory = {
  slug: string | string[] | undefined;
  _id: string;
  name: string;
  image: {
    _id: string;
    src: string;
    alt: string;
  };
};

export default TCategory;

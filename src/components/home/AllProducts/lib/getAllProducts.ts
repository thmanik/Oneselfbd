import config from "@/config/config";

const getAllProducts = async () => {
  const res = await fetch(`${config.base_url}/api/v1/products`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Error when fetching Products!");
  }
  return data.data;
};

export default getAllProducts;

import api from "./api";

export const getProducts = async () => {
  try {
    const res = await api.get("products");
    return res;
  } catch (error) {
    console.log("ERROR GETTING PRODUCTS:", error);
  }
};

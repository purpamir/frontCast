import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { getProducts } from "../services/products";
import { useSelector } from "react-redux";
const Products = () => {
  const [products, setProducts] = useState([]);
  const getProductsData = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };
  useEffect(() => {
    getProductsData();
  }, []);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <Layout>
      <section
        className={`${
          isDarkMode ? "bg-slate-700 text-gray-300" : ""
        } flex flex-col p-10 justify-center items-center`}
      >
        <h2 className="font-[vazirmatn] text-4xl md:2xl:text-5xl mt-24 mb-28  font-semibold ">
          دوره‌های آموزشی
        </h2>
        <div className="flex justify-center place-self-center items-center gap-[56px] flex-wrap">
          {products?.map((item) => (
            <Card key={item?.id} item={item} />
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default Products;

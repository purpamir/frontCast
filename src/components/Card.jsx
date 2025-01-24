import { BsDot } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { useEffect } from "react";

// #3473d1
const Card = ({ item }) => {
  const login = useSelector((state) => state.auth.token);

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  useEffect(() => {
    if (item) {
      JSON.parse(localStorage.getItem("cartItems"));
    }
  }, [item]);

  return (
    <figure
      className={`${
        isDarkMode ? "bg-slate-600" : "bg-white"
      } font-[vazirmatn] w-[500px] h-[768px] md:2xl:w-[520px] transition-all rounded-2xl flex flex-col justify-start items-center mb-16`}
    >
      <img
        className="mb-5 rounded-tl-2xl rounded-tr-2xl w-full"
        src={`http://localhost:5000${item?.thumbnail}`}
      />
      <div className="flex flex-col w-full px-5 py-2">
        <div
          className={`${
            isDarkMode
              ? "fill-gray-200 text-[#7ab2ff]"
              : "fill-[#2a5ca7] text-[#2a5ca7]"
          } flex items-center w-full text-[1.3rem] overflow-hidden mb-8`}
        >
          <BsDot className=" w-7 h-7 block" />
          <span className="  font-bold ">تکمیل شده</span>
        </div>
        <Link to={`/products/${item?.id}`}>
          <h2
            className={`${
              isDarkMode
                ? "text-gray-200 hover:text-[#7ab2ff]"
                : "text-gray-700"
            } text-2xl md:2xl:text-3xl mb-28 h-14 block font-semibold `}
          >
            {item?.title}
          </h2>
        </Link>
        <div className="flex justify-between items-center text-[1.39rem]">
          <div
            className={`${
              isDarkMode
                ? "bg-[#647da1] text-gray-200"
                : "text-[#2a5ca7] bg-[#e6f1ff]"
            }  px-4 py-2 w-fit rounded-lg  font-bold`}
          >
            {item?.price === "0" ? (
              <span>{item?.status}</span>
            ) : (
              <div className="flex items-center justify-center">
                {item?.price}
                <span className="mr-2 text-sm">تومان</span>
              </div>
            )}
          </div>
          <Link
            to={`/products/${item?.id}`}
            className={`${
              isDarkMode
                ? "fill-gray-200 text-[#7ab2ff]"
                : "fill-[#2a5ca7] text-[#2a5ca7]"
            } flex gap-2 justify-center items-center font-bold text-[#2a5ca7]`}
          >
            <span className="">مشاهده دوره </span>
            <FaArrowLeft />
          </Link>
        </div>
      </div>
      {login ? (
        <button
          onClick={handleAddToCart}
          // onClick={shop}
          // onClick={}
          className="flex rounded-br-xl rounded-bl-xl px-6 w-full py-3 mt-2 justify-center items-center gap-3 text-xl font-bold text-gray-100 bg-[#3473d1]  hover:bg-[#2a5ca7] transition-all"
        >
          افزودن به سبد خرید
          <FaCartPlus className="w-6 h-6" />
        </button>
      ) : (
        ""
      )}
    </figure>
  );
};

export default Card;

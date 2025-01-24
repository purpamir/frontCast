import Layout from "../components/Layout";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
const Cart = () => {
  const login = useSelector((state) => state.auth.token);
  if (!login) {
    return <Navigate to={"/auth"} replace />;
  }
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Layout>
      <div
        className={`${
          isDarkMode ? "bg-slate-700" : ""
        } flex justify-center items-center p-7`}
      >
        <div
          className={`${
            isDarkMode
              ? "bg-slate-500 text-gray-200"
              : "bg-[#efefef] text-gray-800"
          } w-full md:2xl:w-[95rem] p-7 rounded-3xl text-4xl font-bold`}
        >
          <h1 className="my-24">سبد خرید</h1>
          <div
            className={`${
              isDarkMode ? "text-gray-200" : ""
            } rounded-2xl bg-[#639ce72f] px-8 py-14 text-[#2a5ca7] text-2xl flex justify-between`}
          >
            {cartItems?.length === 0 ? (
              <h2>سبد خرید خالی است.</h2>
            ) : (
              <div>
                {cartItems?.map((cartItem, index) => (
                  <div key={cartItem} className="mb-10">
                    {index !== 0 && (
                      <div className="flex flex-col gap-1 mb-8">
                        <img
                          className="w-52 md:lg:w-64 md:2xl:w-80 mb-6"
                          src={`http://localhost:5000${cartItem?.thumbnail}`}
                        />

                        <h3>{cartItem?.title}</h3>
                        {/* <h3>{cartItem?.Quantity}</h3> */}
                        <h3>
                          {cartItem?.price}
                          <span className="mr-4">هزار تومان</span>
                        </h3>
                        <div className="flex gap-2">
                          <button>-</button>
                          <div>{cartItem?.Quantity}</div>
                          <button>+</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div></div>
          <Link
            to={"/auth"}
            className="mt-8 mb-14 w-fit  flex justify-center  items-center bg-[#3473d1] hover:bg-[#2a5ca7] text-2xl px-10 py-6 place-self-center rounded-xl font-semibold text-white"
          >
            اقدام به پرداخت
          </Link>
        </div>
      </div>
    </Layout>
  );
};
export default Cart;

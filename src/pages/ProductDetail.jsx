import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getProducts } from "../services/products";
import { useParams } from "react-router";
import { FaYoutube } from "react-icons/fa";
import { PiMoneyFill, PiStudentFill } from "react-icons/pi";
import { Link } from "react-router";
import { SlClock } from "react-icons/sl";
import { FaLock } from "react-icons/fa";
import logo from "../images/tablogo.png";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
const ProductDetail = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const getProductData = async () => {
    const res = await getProducts();
    console.log(res);
    setProducts(res.data);
  };
  useEffect(() => {
    getProductData();
  }, []);

  const product = products?.find((item) => item?.id === Number(params.id));
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const login = useSelector((state) => state.auth.token);

  return (
    <Layout>
      <div
        className={`${
          isDarkMode ? "bg-slate-700 fill-red-200 text-gray-200" : ""
        } p-8 flex flex-col items-center justify-center `}
      >
        {/* *******************  main   ********************** */}
        <section
          className={`${
            isDarkMode ? "bg-slate-600" : "bg-[#efefef] text-gray-800"
          } md:lg:w-[44rem] md:2xl:-mx-10 md:lg:h-[40rem] md:xl:w-[57rem] md:2xl:w-[75rem] flex flex-col items-center p-8 justify-center font-[vazirmatn] bg-[#efefef] rounded-3xl   mb-24`}
        >
          <div className="md:xl:flex md:xl:items-center  md:xl:mx-10  gap-6 md:xl:justify-center">
            <div className="rounded-lg  text-2xl">
              <div className=" text-4xl md:xl:text-5xl   mb-20 block font-semibold ">
                <h1 className="leading-snug ">{product?.title}</h1>
              </div>
              <div className="flex gap-16">
                <p className="flex items-center gap-2">
                  <PiMoneyFill
                    className={`${
                      isDarkMode ? "fill-[#62a1ff]" : "fill-[#2a5ca7]"
                    } fill-[#2a5ca7]  w-10 h-10 block`}
                  />

                  {product?.price === "0" ? (
                    <span>{product?.status}</span>
                  ) : (
                    <div className="flex  items-center">
                      {product?.price}
                      <span className="mr-2">تومان</span>
                    </div>
                  )}
                </p>
                <p className="flex items-center gap-2 ">
                  <PiStudentFill
                    className={`${
                      isDarkMode ? "fill-[#62a1ff]" : "fill-[#2a5ca7]"
                    } fill-[#2a5ca7] -mt-2 w-10 h-10`}
                  />
                  <span className="">{product?.studentsCount}</span>
                </p>
              </div>
              <p className="mt-10 flex items-center gap-2 w-56 leading-normal">
                <SlClock
                  className={`${
                    isDarkMode ? "fill-[#62a1ff]" : "fill-[#2a5ca7]"
                  } -mt-1 w-10 h-10`}
                />

                {product?.timeCourse}
              </p>
              {!login ? (
                <Link className="text-center mt-10 bg-[#3473d1] hover:bg-[#2a5ca7] flex items-center justify-self-start px-5 py-3 rounded-xl text-white ">
                  ثبت نام در دوره
                </Link>
              ) : (
                <Link className="text-center mt-10 bg-[#3473d1] hover:bg-[#2a5ca7] flex items-center justify-self-start px-5 py-3 rounded-xl text-white ">
                  افزودن به سبد خرید
                </Link>
              )}

              <Link
                className={`${
                  isDarkMode ? "text-[#62a1ff]" : "text-[#2a5ca7] "
                } text-[#2a5ca7] flex gap-2 items-center mt-10`}
              >
                <FaYoutube className=" transition-all fill-[#] w-11 h-11 " />
                <span className=" font-semibold">
                  مشاهده فصل اول دوره در کانال یوتوب
                </span>
              </Link>
            </div>
            {login ? (
              <div className="relative">
                <video
                  className="rounded-2xl hidden md:2xl:block min-w-[720px] "
                  width=""
                  controls
                  height=""
                  src={`http://localhost:5000${product?.url}`}
                />
                <img
                  className="hidden fill-[#2a5ca7] md:2xl:block md:2xl:w-12 md:2xl:h-12 md:2xl:absolute top-[3%] right-[2%]"
                  src={logo}
                />
              </div>
            ) : (
              <div className="relative">
                <video
                  className="rounded-2xl hidden md:2xl:block md:2xl:min-w-[600px] blur-[8px] "
                  width=""
                  height=""
                  src={`http://localhost:5000${product?.url}`}
                />
                <FaLock className="hidden fill-[#2a5ca7] md:2xl:block md:2xl:w-20 md:2xl:h-20 md:2xl:absolute top-[35%] right-[42%]" />
              </div>
            )}
          </div>
        </section>
        {/* *******************  sub   ********************** */}
        <section
          key={product?.id}
          className={`${
            isDarkMode ? "bg-slate-600 text-gray-100" : "bg-white"
          } md:lg:w-[44rem] md:xl:w-[57rem] md:2xl:w-[75rem] flex flex-col items-center p-10 justify-center font-[vazirmatn]  rounded-3xl mb-24`}
        >
          <p
            key={product?.id}
            className="text-2xl leading-loose rounded-3xl font-[vazirmatn] "
          >
            {product?.description}
          </p>
          <h2 className=" mb-14 mt-24 md:2xl:text-5xl text-4xl  w-full font-bold">
            سر فصل‌ها
          </h2>
          <div className="w-full mb-24">
            {product?.sesions?.map((item) => (
              <Accordion
                color="neutral"
                size="lg"
                variant="solid"
                item={item}
                className="w-2/4 flex justify-center flex-col "
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">
                    <p className=" font-[vazirmatn] self-start text-2xl px-6 py-4 font-semibold">
                      {item?.title}
                    </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {login ? (
                    <p>
                      {item?.description?.map((item, index) => (
                        <p className="font-[vazirmatn] mr-6 mb-8 text-xl flex gap-2 items-center justify-start">
                          {item}
                        </p>
                      ))}
                    </p>
                  ) : (
                    <p className="text-lg">
                      برای مشاهده سرفصل ها ابتدا باید وارد{" "}
                      <Link
                        to={"/auth"}
                        className="text-[#3473d1] font-semibold"
                      >
                        حساب کاربری
                      </Link>{" "}
                      خود شوید.
                    </p>
                  )}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductDetail;

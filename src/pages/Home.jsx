import Layout from "../components/Layout";
import homeimg from "../images/home.jpg";
import { Link, Navigate } from "react-router";
import user1 from "../images/users/jalali.jpg";
import user2 from "../images/users/mojtahedi.jpg";
import user3 from "../images/users/purmohammad.jpg";
import user6 from "../images/users/malekzadeh.jpg";
import user4 from "../images/users/farajpour.jpg";
import user5 from "../images/users/mirzaei.jpg";
import post1 from "../images/React-Best-Practices.png";
import post2 from "../images/reactrouter.png";
import post3 from "../images/websocket.png";
import { SlClock } from "react-icons/sl";
import { SlBubbles } from "react-icons/sl";
import { SlCheck } from "react-icons/sl";
import { SlCamrecorder } from "react-icons/sl";
import { SlNote } from "react-icons/sl";
import { SlList } from "react-icons/sl";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getProducts } from "../services/products";
import { useSelector } from "react-redux";
const Home = () => {
  const [products, setProducts] = useState([]);
  const getProductData = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };
  useEffect(() => {
    getProductData();
  }, []);

  const login = useSelector((state) => state.auth.token);
  if (!login) {
    return <Navigate to={"/auth"} replace />;
  }
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <Layout>
      <div
        className={`${
          isDarkMode
            ? "bg-slate-700 text-gray-300 fill-gray-300 stroke-gray-300"
            : "bg-[#f8f8f8 text-gray-800 "
        } pb-40 flex justify-center items-center p-8`}
      >
        <div className="flex-col md:2xl:w-[95rem]  gap-12 font-[vazirmatn] justify-center items-center  md:sm:w-full md:md:w-full md:lg:w-full">
          {/* ************************************************************************* */}
          {/* ************************************ HERO SECTION ***************************************************************************************************************************** */}
          {/* ************************************************************************* */}
          <div className="flex items-center justify-center gap-12 mb-72  ">
            <div className=" flex-col   md:xl:pl-14 transition-all">
              <h1 className="mb-16 mt-10  text-right text-4xl md:2xl:text-5xl w-full font-semibold md:sm:mr-3 ">
                برنامه نویسی به زبان ساده.
              </h1>
              <p className="  leading-[2.8rem] text-2xl w-fit text-right md:sm:mr-12 md:md:mr-4">
                در فرانت کست می‌توانید مهارت‌های برنامه نویسی خود را تقویت کنید
                و به یک توسعه‌دهنده حرفه‌ای تبدیل شوید.
              </p>
              <Link
                to={"/products"}
                className="flex mt-12 mb-20  items-center justify-center bg-[#3473d1] hover:bg-[#2a5ca7] text-2xl px-6 py-3 w-56 md:xl:mr-4 rounded-xl font-semibold text-white"
              >
                شروع یادگیری
              </Link>
              <div className="min-w-[600px] md:lg:grid-cols-3 md:xl:gap-y-10 md:xl:gap-x-4  grid grid-cols-2 md:lg:mr-6 gap-x-2 gap-y-10 mt-10 justify-center items-center ">
                <div classname=" text-right  flex justify-center items-center">
                  <div className=" flex gap-2 w-fit items-center justify-center">
                    <SlNote className="fill-[#3473d1] w-10 h-10 " />

                    <span className="text-[1.6rem] mr-1  font-semibold">
                      یادگیری با انجام تمرین
                    </span>
                  </div>
                </div>
                <div classname="  text-right flex justify-center items-center">
                  <div className="flex gap-2 w-fit items-center justify-center ">
                    <SlClock className="fill-[#3473d1] w-11 h-11 " />

                    <span className="text-[1.6rem] mr-1  font-semibold">
                      ویدیوهای کوتاه و با کیفیت
                    </span>
                  </div>
                </div>
                <div classname="  text-right flex justify-center items-center">
                  <div className="flex gap-2 w-fit items-center justify-center ">
                    <SlCheck className="fill-[#3473d1] w-10 h-10  " />

                    <span className="text-[1.6rem] mr-1  font-semibold">
                      ضمانت بازگشت وجه
                    </span>
                  </div>
                </div>
                <div classname="  text-right flex justify-center items-center">
                  <div className="flex gap-2 w-fit items-center justify-center">
                    <SlCamrecorder className="fill-[#3473d1] w-10 h-10 " />

                    <span className=" text-[1.6rem] mr-1  font-semibold">
                      به روز رسانی رایگان
                    </span>
                  </div>
                </div>
                <div classname="  text-right flex justify-center items-center">
                  <div className="flex gap-2 w-fit items-center justify-center mr-1">
                    <SlList className="fill-[#3473d1] w-9 h-9" />

                    <span className="text-[1.6rem] mr-1  font-semibold">
                      سرفصل های جامع و دقیق
                    </span>
                  </div>
                </div>
                <div classname="  text-right flex justify-center items-center">
                  <div className="flex gap-2 w-fit items-center justify-center ml-3">
                    <SlBubbles className="fill-[#3473d1] w-10 h-10 " />

                    <span className="text-[1.6rem] mr-1  font-semibold">
                      پشتیبانی دوره ها
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={homeimg}
              className=" rounded-3xl hidden  md:2xl:block w-7/12 md:2xl:mt-12"
            />
          </div>
          {/* ************************************************************************* */}
          {/* ************************************ PRODUCTS SECTION ***************************************************************************************************************************** */}
          {/* ************************************************************************* */}
          <h2 className="text-4xl md:sm:mr-3 md:2xl:text-5xl px-10 mb-24  font-semibold">
            دوره‌های آموزشی
          </h2>
          <div className="mb-8 flex justify-center place-self-center items-center gap-[56px] flex-wrap">
            {products?.map(
              (item, index) => index < 6 && <Card key={item} item={item} />
            )}
          </div>
          <Link
            to={"/products"}
            className="text-center mb-72  bg-[#3473d1] hover:bg-[#2a5ca7] flex items-center justify-self-center px-8 py-3 mt-20 rounded-2xl text-white text-3xl"
          >
            مشاهده همه دوره‌های آموزشی
          </Link>
          <br />
          {/* ************************************************************************* */}
          {/* ******************************* TESTIMONIALS SECTION ***************************************************************************************************************************** */}
          {/* ************************************************************************* */}
          <h2 className="mb-28 text-4xl md:2xl:text-5xl font-bold ">
            از زبان دانشجویان فرانت کست
          </h2>
          <div className="grid md:2xl:grid-cols-3 grid-cols-1 md:xl:grid-cols-2 md:xl:gap-x-2">
            <div className="md:md:px-24 md:2xl:px-8 mb-28">
              <div className="flex mb-6 gap-4">
                <img src={user1} className="rounded-full w-28" />
                <span className="text-2xl  font-bold self-center">
                  علی جلالی
                </span>
              </div>
              <p className="text-xl leading-9">
                من در چند دوره‌ی ویدیویی و حضوری آموزش برنامه نویسی شرکت کرده
                بودم، ولی با حضور در دوره‌های ری‌اکت و نود جی‌اس استاد صدری به
                عمیق‌ترین مفاهیم برنامه نویسی جاوااسکریپت پی بردم. روش تدریس
                ایشون رو تا به حال در هیچ کدوم از دوره‌های مشابه ندیده بودم. از
                مفاهیم بسیار ساده شروع شده و پله پله بدون اینکه کسی لحظه‌ای از
                کلاس عقب بمونه تمام حاضرین رو تا رسیدن به پیشرفته‌ترین مراحل با
                خودشون همراه می‌کردن. من به شخصه کل پیشرفت‌هایی که در زمینه
                برنامه نویسی داشتم رو مدیون ایشون هستم. بعد از اتمام دوره‌ها
                توسط ایشون به یک شرکت دانش بنیان معرفی شدم و هم اکنون با این
                شرکت در حال همکاری هستم.
              </p>
            </div>

            <div className=" md:md:px-24 md:2xl:px-8 mb-28">
              <div className="flex mb-6 gap-4">
                <img src={user2} className="rounded-full w-28" />
                <span className="text-2xl  font-bold self-center">
                  سودا مجتهدی
                </span>
              </div>
              <p className="text-xl leading-9">
                یکی از دلایل مهمی که باعث تمایز دوره‌های فرانت کست از بقیه می‌شه
                تایم کوتاه ویدیوها و کیفیت بسیار بالای اون‌هاست. به شکلی که
                پیچیده‌ترین مفاهیم به‌صورت خیلی ساده به دانشجو منتقل می‌شه و
                دلیل این هم فقط تسلط بسیار عالی استاد صدری روی مباحث و قدرت
                انتقال قوی ایشون هست. این موضوع خیلی کمک می‌کنه که فرآیند
                یادگیری اصلا خسته‌کننده نباشه. همینطور چالش‌ها و تمرین‌هایی که
                در طول دوره مطرح می‌شه خیلی کمک می‌کنه تا یادگیری مفاهیم به شکل
                عمیق صورت بگیره و یه انگیزه خیلی قوی هم برای ادامه دادن مسیر
                هست.
              </p>
            </div>

            <div className="md:md:px-24 md:2xl:px-8 mb-28">
              <div className="flex mb-6 gap-4">
                <img src={user3} className="rounded-full w-28" />
                <span className="text-2xl  font-bold self-center">
                  پرستو پورمحمد
                </span>
              </div>
              <p className="text-xl leading-9">
                یکی از معدود اساتیدی که واقعا براشون مهمه که دانشجوها مطلب رو
                دقیق و کامل یاد بگیرن، برای همین با مطرح کردن سوالات و تمرین‌های
                متنوع و مفید، انگیزه قوی برای یادگیری ایجاد می کنن که نوع تدریس،
                نشان دهنده تسلط کامل روی مطلب هست. همیشه روی کد نویسی اصولی خیلی
                تاکید می‌کنن که این کار، برای دسترسی سریع به کدها و رفع خطای کد
                خیلی مهم و کاربردی هست، برای خود منم توجه به این موضوع خیلی مفید
                بوده همیشه.
              </p>
            </div>

            <div className="md:md:px-24 md:2xl:px-8 mb-28">
              <div className="flex mb-6 gap-4">
                <img src={user4} className="rounded-full w-28" />
                <span className="text-2xl  font-bold self-center">
                  مجتبی فرجپور
                </span>
              </div>
              <p className="text-xl leading-9">
                در كلاس طراحى و مبانى برنامه نويسى وب با استاد صدرى آشنا شدم و
                با توجه به تسلط كامل و قدرت بيان قوى علاقه‌ام به برنامه نويسى
                بيشتر شد و دوره هاى جاوااسكريپت و ري‌اكت را با جناب آقاى صدرى
                ادامه دادم و الان تو شركت دانش بنيان مشغول به كار هستم. پيشنهاد
                مي‌كنم اگر واقعا علاقه‌مند به برنامه نويسى هستيد دوره‌هاى آقاى
                صدرى را از دست ندید.
              </p>
            </div>

            <div className="md:md:px-24 md:2xl:px-8 mb-28">
              <div className="flex mb-6 gap-4">
                <img src={user5} className="rounded-full w-28" />
                <span className="text-2xl  font-bold self-center">
                  شبنم میرزایی{" "}
                </span>
              </div>
              <p className="text-xl leading-9">
                در کلاس جاوا اسکریپت با استاد صدری آشنا شدم. تدریس عالی و
                تشویقهای مستمرشون باعث شد بعد از وقفه طولانی دوباره به سمت
                برنامه نویسی برگردم. در کلاسهای نود ایشون شرکت کردم و علاوه بر
                اون از ویدیوهای آموزشی ری اکت و آخرین ویدیوهای بی نظیر نود ایشون
                استفاده زیادی بردم. خیلی خیلی خوشحالم که باهاشون آشنا شدم؛ کاش
                که خیلیی زودتر این اتفاق افتاده بود.
              </p>
            </div>

            <div className="md:md:px-24 md:2xl:px-8 mb-48">
              <div className="flex mb-6 gap-4">
                <img src={user6} className="rounded-full w-28" />
                <span className="text-2xl  font-bold self-center">
                  محمد مهدی ملک زاده
                </span>
              </div>
              <p className="text-xl leading-9">
                زبان جاوااسکریپت رو با اولین دوره‌ی فرانت‌کست یعنی "شروع برنامه
                نویسی با جاوااسکریپت" شروع کردم. همونجا بود که بخاطر سبک تدریس
                فوق‌العاده استاد صدری، علاقه بسیار زیادی به این زبان پیدا کردم و
                خیلی راحت یاد گرفتم. در ادامه وقتی خواستم Node و React رو شروع
                کنم از ویدئوهای استاد صدری استفاده کردم و همیشه فرانت‌کست،
                بهترین گزینه من برای زمانی بود که میخواستم تکنولوژی جدیدی رو یاد
                بگیرم. این دوره‌ها به قدری کامل هستن که نیازی به هیچ منبع
                دیگه‌ای نیست و میشه خیلی راحت میشه پروژه کار کرد. حتی وقتی بخوای
                تو تکنولوژی‌ای عمیق‌تر بشی، بخاطر پایه قوی‌ای که این ویدئوها
                ایجاد میکنن، کار خیلی سریع و راحت میشه.
              </p>
            </div>
          </div>
          {/* ************************************************************************* */}
          {/* ****************************** POSTS SECTION ***************************************************************************************************************************** */}
          {/* ************************************************************************* */}
          <h2 className="mb-16 md:2xl:text-5xl text-4xl w-full font-bold ">
            پست‌های فرانت کست
          </h2>
          <p className="mb-28 text-2xl leading-loose font-semibold  ">
            برای مشاهده پست‌های بیشتر لطفا به
            <Link className="text-[#3473d1]"> وبلاگ</Link> مراجعه کنید.
          </p>

          <div className="grid-cols-1 grid justify-center md:xl:grid-cols-2 md:2xl:grid-cols-3 items-center">
            <figure
              className={`${
                isDarkMode
                  ? "bg-slate-600 text-gray-300"
                  : "bg-white text-gray-800"
              } place-self-center font-[vazirmatn] w-[500px] h-[650px] md:2xl:w-[520px] transition-all rounded-2xl flex flex-col justify-start items-center mb-16`}
            >
              <img
                className="-mt-1 mb-5 rounded-tl-2xl rounded-tr-2xl w-full"
                src={post1}
              />
              <div className="flex flex-col w-full px-6 py-2 ">
                <Link className=" text-2xl md:2xl:text-3xl mb-28 h-8 block font-semibold ">
                  بررسی best practice ها در React
                </Link>
                <div className="flex justify-between items-center text-2xl">
                  <Link
                    className={`${
                      isDarkMode ? "text-gray-300 fill-gray-300" : ""
                    } flex gap-2 justify-center items-center font-bold text-[#3473d1]`}
                  >
                    <span className="">ادامه پست </span>
                    <FaArrowLeft />
                  </Link>
                </div>
              </div>
            </figure>

            <figure
              className={`${
                isDarkMode
                  ? "bg-slate-600 text-gray-300"
                  : "bg-white text-gray-800"
              } place-self-center font-[vazirmatn] w-[500px] h-[650px] md:2xl:w-[520px] transition-all rounded-2xl flex flex-col justify-start items-center mb-16`}
            >
              <img
                src={post2}
                className="-mt-1 rounded-tl-3xl rounded-tr-3xl mb-5 w-full"
              />
              <div className="flex flex-col w-full px-6 py-2 ">
                <Link className="text-2xl md:2xl:text-3xl mb-28 h-8 block font-semibold ">
                  بررسی تغییرات نسخه React Router 7
                </Link>
                <div className="flex justify-between items-center text-2xl">
                  <Link
                    className={`${
                      isDarkMode ? "text-gray-300 fill-gray-300" : ""
                    } flex gap-2 justify-center items-center font-bold text-[#3473d1]`}
                  >
                    <span className="">ادامه پست </span>
                    <FaArrowLeft />
                  </Link>
                </div>
              </div>
            </figure>

            <figure
              className={`${
                isDarkMode
                  ? "bg-slate-600 text-gray-300"
                  : "bg-white text-gray-800"
              } place-self-center font-[vazirmatn] w-[500px] h-[650px] md:2xl:w-[520px] transition-all rounded-2xl flex flex-col justify-start items-center mb-16`}
            >
              <img
                src={post3}
                className="rounded-tl-3xl rounded-tr-3xl mb-5 -mt-1 w-full"
              />
              <div className="flex flex-col w-full px-6 py-2 ">
                <Link className="text-2xl md:2xl:text-3xl mb-28 h-8 block font-semibold ">
                  کار با WebSocket در <br />
                  Node.js با استفاده از تایپ اسکریپت
                </Link>
                <Link
                  className={`${
                    isDarkMode ? "text-gray-300 fill-gray-300" : ""
                  } "mb-4 flex gap-2 text-2xl font-bold text-[#3473d1] items-center`}
                >
                  <span className="">ادامه پست </span>
                  <FaArrowLeft />
                </Link>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;

import { Link } from "react-router";
import footerlogo from "../images/footerlogo.png";
import footerlogo2 from "../images/zarinpal.png";
import { TiSocialTwitter } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";
const Footer = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <footer
      className={`${
        isDarkMode
          ? "bg-slate-700 fill-gray-300 stroke-gray-300 text-gray-300"
          : "bg-[#f8f8f8 text-gray-700"
      } font-[Vazirmatn] pt-64 px-4`}
    >
      <div className="text-2xl font-bold md:lg:flex md:lg:gap-16 w-full md:lg:mb-24  justify-center items-center">
        <Link className=" hover:text-[#3473d1] transition-all  block text-center mb-16 md:lg:m-0">
          درباره ما
        </Link>
        <Link className=" hover:text-[#3473d1] transition-all  block text-center mb-16 md:lg:m-0 ">
          تماس با ما
        </Link>
        <Link className=" hover:text-[#3473d1] transition-all  block text-center mb-16 md:lg:m-0 ">
          شرایط استفاده
        </Link>
        <Link className=" hover:text-[#3473d1] transition-all  block text-center mb-16 md:lg:m-0 ">
          وبلاگ
        </Link>
        <Link className=" hover:text-[#3473d1] transition-all  block text-center mb-20 md:lg:m-0 ">
          کانال تلگرام
        </Link>
      </div>
      <div className="flex gap-2 justify-center items-center ">
        <span className="font-bold text-2xl ">شبکه های اجتماعی :</span>
        <div className="flex items-center justify-center gap-2 md:lg:gap-8">
          <Link>
            <TiSocialTwitter className=" transition-all hover:fill-[#3473d1] w-8 h-8 " />
          </Link>
          <Link>
            <FiInstagram className=" transition-all hover:stroke-[#3473d1] w-8 h-8 " />
          </Link>
          <Link>
            <FaTelegram className=" transition-all hover:fill-[#3473d1] w-8 h-8 " />
          </Link>
          <Link>
            <FaYoutube className=" transition-all hover:fill-[#3473d1] w-8 h-8 " />
          </Link>
          <Link>
            <FaLinkedin className=" transition-all hover:fill-[#3473d1] w-8 h-8 " />
          </Link>
        </div>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <a href="https://www.zarinpal.com/">
          <img src={footerlogo2} className="my-16 w-16 place-self-center" />
        </a>
        <a href={"https://enamad.ir/"}>
          <img src={footerlogo} className="my-24 w-24 place-self-center" />
        </a>
      </div>
      <p className="text-gray-700 text-2xl text-center pb-20">
        تمامی حقوق برای فرانت‌کست محفوظ است.
      </p>
    </footer>
  );
};
export default Footer;

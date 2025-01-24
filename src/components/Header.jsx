import { useState } from "react";
import { Link, Navigate } from "react-router";
import frontcastlogo from "../images/frontcast-logo-top.png";
import "../App.css";
import { RiToggleFill } from "react-icons/ri";
import { RiToggleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/slices/themeSlice";
import { MdShoppingCart } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuHandler = () => {
    setShowMenu(!showMenu);
  };
  const [showAcc, setShowAcc] = useState(false);
  const showAccHandler = () => {
    setShowAcc(!showAcc);
  };
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const darkModeHandler = () => {
    dispatch(toggleMode());
  };
  const login = useSelector((state) => state.auth.token);
  const [quantity, setQuantity] = useState(0);
  const shopIconIncrease = () => {
    setQuantity(quantity + 1);
  };
  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className={`${isDarkMode ? "bg-slate-700" : "bg-[#f8f8f8]"}`}>
      <div className="flex flex-col justify-center items-center ">
        <div className=" md:2xl:ml-10 mb-12 mt-20 flex gap-12 md:sm:gap-16 md:lg:gap-32 md:2xl:gap-14 text-gray-900 font-[Vazirmatn] justify-center  items-center ">
          {/* ************************************************************************* */}
          {/* **************************** HEADER BUTTON **************************************************************************************************************************** */}
          {/* ************************************************************************* */}
          <button onClick={menuHandler}>
            <CgMenu className="text-[#3e81e4] md:2xl:hidden h-12 w-12" />
          </button>

          {/* ************************************************************************* */}
          {/* ************************** HEADER MENU LIST ***************************************************************************************************************************** */}
          {/* ************************************************************************* */}
          <div
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            } mt-8 md:2xl:justify-center relative hidden font-[Vazirmatn] md:2xl:  md:2xl:flex md:2xl:items-center`}
          >
            <button
              onClick={login ? showAccHandler : ""}
              className="mb-8 w-fit flex transition-all justify-center gap-3 items-center bg-[#3473d1] hover:bg-[#2a5ca7] text-2xl px-6 py-3 rounded-xl font-semibold text-gray-200 md:2xl:w-full"
            >
              <Link to={!login ? "/auth" : null}> حساب کاربری</Link>
              <FaChevronDown
                className={`${!login ? "hidden" : "flex"} w-5 h-5`}
              />
            </button>
            {showAcc ? (
              <Link
                onClick={logOut}
                to={"/auth"}
                className="absolute top-[84px] text-center place-content-center right-0  w-[262px] h-[70px] text-gray-100 bg-red-700 rounded-xl text-xl font-bold"
              >
                خروج از حساب کاربری
              </Link>
            ) : (
              ""
            )}

            <Link
              to={"/"}
              className="hover:text-[#3473d1] transition-all   w-full min-w-[12rem]   mb-6 text-[1.4rem] flex justify-center font-bold"
            >
              صفحه اصلی
            </Link>
            <Link
              to={"/products"}
              className="hover:text-[#3473d1] transition-all w-full min-w-[12rem]  mb-6 text-[1.4rem] block font-bold"
            >
              دوره‌های آموزشی
            </Link>
            <Link
              to={"/cart"}
              className="hover:text-[#3473d1] transition-all  min-w-[12rem]  w-full   mb-6 text-[1.4rem] block font-bold"
            >
              سبد خرید
            </Link>
            {/* ************************************************************************* */}
            {/* **************************  DARK MODE ***************************************************************************************************************************** */}
            {/* ************************************************************************* */}
            {isDarkMode ? (
              <button
                className="transition-all mb-7 -mr-16"
                onClick={darkModeHandler}
              >
                <RiToggleLine className="w-16 h-16 fill-gray-300" />
              </button>
            ) : (
              <button
                className=" transition-all mb-7 -mr-16"
                onClick={darkModeHandler}
              >
                <RiToggleFill className="w-16 h-16 fill-slate-700" />
              </button>
            )}
          </div>
          {/* ?********** SHOP ********* */}
          <div className="flex justify-center items-center">
            <span className="block rounded-[50%] text-lg text-center mt-4 w-[30px] h-[30px] bg-red-600 text-white font-bold z-0">
              0
            </span>
            <Link to={"/cart"} onClick={shopIconIncrease}>
              <MdShoppingCart className="fill-[#3e81e4] w-11 h-12 transition-all -mr-3 z-1" />
            </Link>
          </div>
          {/* ************************************************************************* */}
          {/* ********************** HEADER LOGO ***************************************************************************************************************************** */}
          {/* ************************************************************************* */}

          <Link className="flex items-center justify-center " to={"/"}>
            <img src={frontcastlogo} className="w-[380px] " />
          </Link>
        </div>
      </div>
      {
        /* *************************************************************************
      {/* ************************ HIDDEN MENU 
      *****************************************************************************************************************************/

        showMenu ? (
          <div className="flex justify-center items-center transition-all">
            <div
              className={`${
                isDarkMode
                  ? "bg-slate-600 text-gray-200"
                  : "bg-[#e1e1e1] text-gray-900"
              } ${
                showAcc ? "" : ""
              } transition-all relative w-[629px] md:sm:w-[685px] md:lg:w-[830px] -mt-10 rounded-2xl rounded-t-none p-8  md:2xl:hidden font-[Vazirmatn]  flex-col `}
            >
              <button
                onClick={login ? showAccHandler : ""}
                className=" mb-8 w-fit  flex justify-center gap-3 items-center bg-[#3473d1] hover:bg-[#2a5ca7] text-2xl px-6 py-3 rounded-xl font-semibold text-gray-200"
              >
                <Link to={!login ? "/auth" : null}> حساب کاربری</Link>
                <FaChevronLeft
                  className={`${!login ? "hidden" : "flex"} w-5 h-5`}
                />
              </button>
              <Link
                to={"/"}
                className="hover:text-[#3473d1] transition-all   mb-8 text-2xl block font-bold"
              >
                صفحه اصلی
              </Link>
              <Link
                to={"/products"}
                className=" hover:text-[#3473d1] transition-all   mb-8 text-2xl block font-bold"
              >
                دوره‌های آموزشی
              </Link>
              <Link
                to={"/cart"}
                className="hover:text-[#3473d1] transition-all   mb-8 text-2xl block font-bold"
              >
                سبد خرید
              </Link>
              {isDarkMode ? (
                <button
                  className="transition-all mb-7 -mx-5"
                  onClick={darkModeHandler}
                >
                  <RiToggleLine className="w-24 h-16 fill-gray-300" />
                </button>
              ) : (
                <button
                  className=" transition-all mb-7 -mx-5"
                  onClick={darkModeHandler}
                >
                  <RiToggleFill className="w-24 h-16 fill-gray-700" />
                </button>
              )}
              {showAcc ? (
                <Link
                  onClick={logOut}
                  to={"/auth"}
                  className="absolute top-[41px] text-center place-content-center right-[320px] w-[270px] h-[71px] text-gray-100 bg-red-700 rounded-xl text-xl font-bold"
                >
                  خروج از حساب کاربری
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : null
      }
    </div>
  );
};
export default Header;

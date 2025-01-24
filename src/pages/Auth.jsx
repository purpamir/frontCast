import { Link, Navigate } from "react-router";
import Layout from "../components/Layout";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import logo from "../images/frontcast-logo-top.png";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/slices/authSlice";
const Auth = () => {
  const [passwordShow, setPasswordShow] = useState("hidden");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const showPass = () => {
    if (passwordShow === "hidden") setPasswordShow("show");
    else if (passwordShow === "show") setPasswordShow("hidden");
  };

  const [state, setState] = useState("login");
  const stateHandler = () => {
    if (state === "login") {
      setState("register");
    } else if (state === "register") setState("login");
    else if (state === "forget") setState("login");
  };
  const forgetHandler = () => {
    setState("forget");
  };
  const { loading, error, token } = useDispatch((state) => state.auth);
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(
      userLogin({
        username: userName,
        password,
      })
    );
  };
  console.log(error);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const login = useSelector((state) => state.auth.token);
  if (login) {
    return <Navigate to={"/"} />;
  }

  return (
    <Layout>
      <div
        className={`${
          isDarkMode ? "bg-slate-700 " : "text-gray-700"
        } flex justify-center items-center font-[vazirmatn] pt-12 px-4`}
      >
        <div
          className={`${
            isDarkMode ? "bg-[#3d4b5f]" : ""
          } flex  mx-3 shadow-shadow-[] flex-col px-8 justify-center items-center  rounded-3xl border-[3px] border-[#3473d194]`}
        >
          <Link to={"/"}>
            <img src={logo} className="h-12 my-16" />
          </Link>
          <div className="flex gap-5 mb-12 transition-all">
            {state === "login" ? (
              <div className="text-center transition-all flex flex-col items-center">
                <div className="border-[4px] transition-all border-[#3473d1] rounded-full mb-8 w-full flex justify-between items-center ">
                  <button className=" transition-all font-semibold rounded-full w-2/3 text-center text-gray-100  text-[1.5rem] bg-[#3473d1] py-2 -mr-1">
                    ورود
                  </button>
                  <button
                    onClick={stateHandler}
                    className={`${
                      isDarkMode ? "text-gray-100" : "text-[#3473d1]"
                    }  transition-colors font-semibold rounded-full w-1/2 text-[1.5rem] text-center px-8 mx-2 py-2 text-[#3473d1]`}
                  >
                    ثبت نام
                  </button>
                </div>
                <p
                  className={`${
                    isDarkMode ? "text-gray-200" : ""
                  } font-semibold w-full mb-6 text-lg`}
                >
                  لطفا برای ادامه یا ورود، شماره همراه و رمز عبور خود را وارد
                  کنید.
                </p>
                <div
                  className={`${
                    isDarkMode ? "text-gray-600" : ""
                  } flex items-center justify-center w-full`}
                >
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    placeholder="نام کاربری   (اجباری)"
                    className="w-full text-lg p-3 h-20 border-2 border-gray-400 rounded-xl"
                  />
                </div>
                <br />

                <div
                  className={`${
                    isDarkMode ? "text-gray-600" : ""
                  } flex justify-center items-center w-full`}
                >
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type={passwordShow === "hidden" ? "password" : "text"}
                    placeholder="کلمه عبور   (اجباری)"
                    className="rounded-xl w-full text-lg  mb-8 border-2 border-l-0 p-3 border-gray-400 h-20 rounded-bl-none rounded-tl-none"
                  />
                  <button
                    onClick={showPass}
                    className="border-2 p-3 border-gray-400 rounded-xl bg-white border-r-0  rounded-br-none rounded-tr-none flex justify-center items-center mb-8 h-20 w-1/4"
                  >
                    {passwordShow === "hidden" ? (
                      <IoMdEyeOff className="w-[34px] h-[34px] fill-[#777]" />
                    ) : (
                      <IoMdEye className="w-[34px] h-[34px] fill-[#3473d1]" />
                    )}
                  </button>
                </div>
                <button
                  onClick={loginHandler}
                  className="text-center transition-all mt-4 rounded-full  mb-6 p-3 w-full bg-[#3473d1] hover:bg-[#2a5ca7] text-white font-semibold text-2xl"
                >
                  <span>ورود</span>
                </button>
                {error && <p>{error}</p>}
                <button
                  onClick={forgetHandler}
                  className={`${
                    isDarkMode ? "text-gray-200" : ""
                  } text-2xl text-[#3473d1] font-bold text-center`}
                >
                  رمزم را فراموش کردم
                </button>
              </div>
            ) : state === "register" ? (
              <div className=" transition-all text-center flex flex-col  items-center">
                <div className=" transition-all border-[4px] border-[#3473d1] w-full rounded-full mb-8  flex justify-center items-center">
                  <button
                    onClick={stateHandler}
                    className={`${
                      isDarkMode ? "text-gray-100" : "text-[#3473d1]"
                    } rounded-full  flex items-center px-8 mx-3 justify-center transition-all  w-1/2 text-center  font-semibold text-[1.5rem]`}
                  >
                    <p>ورود</p>
                  </button>
                  <button className="rounded-full -ml-1 flex items-center justify-center w-2/3 transition-all  text-center text-white font-semibold text-[1.5rem] bg-[#3473d1] py-2 mx-1">
                    <p>ثبت نام</p>
                  </button>
                </div>
                <p
                  className={`${
                    isDarkMode ? "text-gray-200" : ""
                  } font-semibold w-full mb-6 text-lg`}
                >
                  لطفا برای ثبت نام اطلاعات زیر را وارد کنید و منتظر ارسال کد
                  تایید بمانید.
                </p>
                <input
                  placeholder="نام   (اجباری)"
                  className=" transition-all  text-lg rounded-xl w-full   p-2  border-2 border-gray-400 h-14"
                />
                <br />
                <input
                  placeholder="نام خانوادگی   (اجباری)"
                  className=" transition-all text-lg  rounded-xl w-full  p-2   border-2 border-gray-400 h-14"
                />
                <br />
                <div className="flex items-center justify-center w-full">
                  <input
                    // {...register("username", {
                    // required: "username is required",
                    // })} */}
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    placeholder="شماره همراه   (اجباری)"
                    className="w-full text-lg p-3 h-14 border-2 border-gray-400 rounded-xl rounded-l-none"
                  />
                  <p
                    className={`${
                      isDarkMode ? "text-slate-200" : ""
                    } bg-[#3473d149] text-xl flex gap-1 border-2 border-gray-400 rounded-xl p-2 border-r-0 rounded-r-none h-14 w-1/4 justify-center items-center`}
                  >
                    <span className="mt-1">98+</span>
                    <svg
                      width="28px"
                      height="28px"
                      viewBox="0 0 36 36"
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--twemoji"
                      preserveAspectRatio="xMidYMid meet"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill="#DA0001"
                          d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z"
                        >
                          {" "}
                        </path>{" "}
                        <path fill="#EEE" d="M0 13h36v10H0z">
                          {" "}
                        </path>{" "}
                        <path
                          fill="#239F40"
                          d="M36 13V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v4h36z"
                        >
                          {" "}
                        </path>{" "}
                        <path fill="#E96667" d="M0 23h36v1H0z">
                          {" "}
                        </path>{" "}
                        <g fill="#BE1931">
                          {" "}
                          <path d="M19.465 14.969c.957.49 3.038 2.953.798 5.731c1.391-.308 3.162-4.408-.798-5.731zm-2.937 0c-3.959 1.323-2.189 5.423-.798 5.731c-2.24-2.778-.159-5.241.798-5.731zm1.453-.143c.04.197 1.101.436.974-.573c-.168.408-.654.396-.968.207c-.432.241-.835.182-.988-.227c-.148.754.587.975.982.593z">
                            {" "}
                          </path>{" "}
                          <path d="M20.538 17.904c-.015-1.248-.677-2.352-1.329-2.799c.43.527 1.752 3.436-.785 5.351l.047-5.097l-.475-.418l-.475.398l.08 5.146l-.018-.015c-2.563-1.914-1.233-4.837-.802-5.365c-.652.447-1.315 1.551-1.329 2.799c-.013 1.071.477 2.243 1.834 3.205a6.375 6.375 0 0 1-1.678.201c.464.253 1.34.192 2.007.131l.001.068l.398.437l.4-.455v-.052c.672.062 1.567.129 2.039-.128a6.302 6.302 0 0 1-1.732-.213c1.344-.961 1.83-2.127 1.817-3.194z">
                            {" "}
                          </path>{" "}
                        </g>{" "}
                        <path fill="#7BC58C" d="M0 12h36v1H0z">
                          {" "}
                        </path>{" "}
                      </g>
                    </svg>
                  </p>
                </div>
                <br />
                <div className="flex justify-center items-center w-full">
                  <input
                    // {...register("password", {
                    //   required: "password is required",
                    // })}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    type={passwordShow === "hidden" ? "password" : "text"}
                    placeholder="کلمه عبور   (اجباری)"
                    className="rounded-xl w-full text-lg  mb-8 border-2 border-l-0 p-3 border-gray-400 h-14 rounded-bl-none rounded-tl-none"
                  />
                  <button
                    onClick={showPass}
                    className="border-2 p-3 border-gray-400 rounded-xl bg-white border-r-0  rounded-br-none rounded-tr-none flex justify-center items-center mb-8 h-14 w-1/4"
                  >
                    {passwordShow === "hidden" ? (
                      <IoMdEyeOff className="w-[34px] h-[34px] fill-[#777]" />
                    ) : (
                      <IoMdEye className="w-[34px] h-[34px] fill-[#3473d1]" />
                    )}
                  </button>
                </div>
                <Link className="rounded-full flex justify-center items-center transition-all p-6 w-full  bg-[#3473d1] hover:bg-[#2a5ca7] text-white font-semibold text-2xl h-14 mt-4">
                  <p>ثبت نام</p>
                </Link>
              </div>
            ) : (
              <div className="text-center transition-all flex flex-col items-center text-2xl">
                {" "}
                <p className="font-semibold w-full mb-4 text-gray-800 mt-6 text-lg">
                  لطفا شماره همراه خود را وارد کنید و منتظر ارسال کد بمانید
                </p>
                <div className="flex items-center justify-center w-full">
                  <input
                    // {...register("username", {
                    // required: "username is required",
                    // })} */}
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    placeholder="شماره همراه   (اجباری)"
                    className="w-full text-lg p-3 h-20 border-2 border-gray-400 rounded-xl rounded-l-none"
                  />
                  <p className="bg-[#3473d149] text-xl flex gap-1 border-2 border-gray-400 rounded-xl p-2 border-r-0 rounded-r-none h-20 w-1/4 justify-center items-center">
                    <span className="mt-1">98+</span>
                    <svg
                      width="28px"
                      height="28px"
                      viewBox="0 0 36 36"
                      aria-hidden="true"
                      role="img"
                      class="iconify iconify--twemoji"
                      preserveAspectRatio="xMidYMid meet"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill="#DA0001"
                          d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-4H0v4z"
                        >
                          {" "}
                        </path>{" "}
                        <path fill="#EEE" d="M0 13h36v10H0z">
                          {" "}
                        </path>{" "}
                        <path
                          fill="#239F40"
                          d="M36 13V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v4h36z"
                        >
                          {" "}
                        </path>{" "}
                        <path fill="#E96667" d="M0 23h36v1H0z">
                          {" "}
                        </path>{" "}
                        <g fill="#BE1931">
                          {" "}
                          <path d="M19.465 14.969c.957.49 3.038 2.953.798 5.731c1.391-.308 3.162-4.408-.798-5.731zm-2.937 0c-3.959 1.323-2.189 5.423-.798 5.731c-2.24-2.778-.159-5.241.798-5.731zm1.453-.143c.04.197 1.101.436.974-.573c-.168.408-.654.396-.968.207c-.432.241-.835.182-.988-.227c-.148.754.587.975.982.593z">
                            {" "}
                          </path>{" "}
                          <path d="M20.538 17.904c-.015-1.248-.677-2.352-1.329-2.799c.43.527 1.752 3.436-.785 5.351l.047-5.097l-.475-.418l-.475.398l.08 5.146l-.018-.015c-2.563-1.914-1.233-4.837-.802-5.365c-.652.447-1.315 1.551-1.329 2.799c-.013 1.071.477 2.243 1.834 3.205a6.375 6.375 0 0 1-1.678.201c.464.253 1.34.192 2.007.131l.001.068l.398.437l.4-.455v-.052c.672.062 1.567.129 2.039-.128a6.302 6.302 0 0 1-1.732-.213c1.344-.961 1.83-2.127 1.817-3.194z">
                            {" "}
                          </path>{" "}
                        </g>{" "}
                        <path fill="#7BC58C" d="M0 12h36v1H0z">
                          {" "}
                        </path>{" "}
                      </g>
                    </svg>
                  </p>
                </div>
                <br />
                <button className="text-center transition-all mt-8 rounded-full p-3 w-full bg-[#3473d1] hover:bg-[#2a5ca7] text-white ">
                  درخواست تغییر رمز
                </button>
                <br />
                <button
                  className=" text-[#3473d1] font-bold text-center"
                  onClick={stateHandler}
                >
                  بازگشت به فرم ورود
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Auth;

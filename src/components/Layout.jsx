import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  console.log(isDarkMode);
  // false

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;

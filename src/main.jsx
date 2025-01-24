import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import ScrollToTop from "./assets/ScrollToTop.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Provider>
  </BrowserRouter>
);
